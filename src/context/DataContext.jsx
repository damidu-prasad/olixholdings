import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const DataContext = createContext();
export const useData = () => useContext(DataContext);

const defaultData = {
  stats: [], services: [], products: [], industries: [], reviews: [], jobs: [],
  heroTitle: '', heroSubtitle: '', logoImage: null
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(defaultData);
  const [bookings, setBookings] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(() => localStorage.getItem('olix_admin') === 'true');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [contentRes, bookingsRes, contactsRes] = await Promise.all([
        supabase.from('site_content').select('data').eq('id', 1).single(),
        supabase.from('bookings').select('*').order('created_at', { ascending: false }),
        supabase.from('contacts').select('*').order('created_at', { ascending: false })
      ]);
      
      if (contentRes.data) setData(contentRes.data.data);
      if (bookingsRes.data) setBookings(bookingsRes.data);
      if (contactsRes.data) setContacts(contactsRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const syncContent = async (newData) => {
    setData(newData);
    await supabase.from('site_content').update({ data: newData }).eq('id', 1);
  };

  const login = (password) => {
    if (password === 'olix2026') { setIsAdmin(true); localStorage.setItem('olix_admin', 'true'); return true; }
    return false;
  };
  const logout = () => { setIsAdmin(false); localStorage.removeItem('olix_admin'); };

  const updateField = (field, value) => syncContent({ ...data, [field]: value });
  
  const addItem = (field, item) => {
    const newItem = { ...item, id: Date.now() };
    syncContent({ ...data, [field]: [...data[field], newItem] });
  };
  
  const updateItem = (field, id, updates) => {
    if (field === 'bookings') {
      setBookings(prev => prev.map(b => b.id === id ? { ...b, ...updates } : b));
      supabase.from('bookings').update(updates).eq('id', id).then();
    } else if (field === 'contacts') {
      setContacts(prev => prev.map(c => c.id === id ? { ...c, ...updates } : c));
      supabase.from('contacts').update(updates).eq('id', id).then();
    } else {
      syncContent({ ...data, [field]: data[field].map(i => i.id === id ? { ...i, ...updates } : i) });
    }
  };
  
  const deleteItem = (field, id) => {
    if (field === 'bookings') {
      setBookings(prev => prev.filter(b => b.id !== id));
      supabase.from('bookings').delete().eq('id', id).then();
    } else if (field === 'contacts') {
      setContacts(prev => prev.filter(c => c.id !== id));
      supabase.from('contacts').delete().eq('id', id).then();
    } else {
      syncContent({ ...data, [field]: data[field].filter(i => i.id !== id) });
    }
  };
  
  const addBooking = async (booking) => {
    const newBooking = { ...booking, status: 'pending' };
    const { data: inserted, error } = await supabase.from('bookings').insert([newBooking]).select();
    if (!error && inserted) setBookings(prev => [inserted[0], ...prev]);
  };
  
  const addContact = async (contact) => {
    const newContact = { ...contact, status: 'unread' };
    const { data: inserted, error } = await supabase.from('contacts').insert([newContact]).select();
    if (!error && inserted) setContacts(prev => [inserted[0], ...prev]);
  };

  if (loading) {
    return <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', background: '#090a0f', color: '#fff' }}>Loading site data...</div>;
  }

  // We merge data, bookings, and contacts into a single object for backwards compatibility with the UI components
  const contextValue = { 
    data: { ...data, bookings, contacts }, 
    isAdmin, login, logout, updateField, addItem, updateItem, deleteItem, addBooking, addContact 
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};
