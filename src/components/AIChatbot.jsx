import React, { useState, useRef, useEffect } from 'react';

const botResponses = {
  greeting: "Hello! 👋 I'm Olix AI Assistant. I can help you learn about our services, products, or help you book a consultation. What would you like to know?",
  services: "We offer 4 core services:\n\n⚙️ **End-to-End Workflow Automation**\n🧠 **Custom AI Agents & Solutions**\n🔄 **System Integration & Live Syncing**\n🚀 **AI-Driven Product Engineering**\n\nWould you like details on any of these?",
  products: "Our flagship products include:\n\n• **Olix AutoFlow** — Workflow automation platform\n• **Olix AgentX** — Custom AI agent builder\n• **Olix SyncHub** — Real-time data integration\n• **Olix InsightEngine** — AI-powered analytics\n\nVisit our Products page for more details!",
  pricing: "We offer custom pricing based on your business needs. I'd recommend booking a free consultation where our team can provide a tailored quote. Would you like to book a call?",
  book: "Great! You can book a consultation directly at our Book a Call page. Our team typically responds within 24 hours. Would you like me to help with anything else?",
  careers: "We're always looking for talented individuals! Check our Careers page for current openings in AI Engineering, Sales, and Operations. Want to know more?",
  industries: "We serve multiple industries including:\n\n🏦 Finance & Banking\n🛒 E-Commerce & Retail\n🏥 Healthcare\n📞 Customer Service\n🏭 Manufacturing\n📊 SaaS & Technology\n\nOur solutions are tailored to each industry's unique challenges.",
  contact: "You can reach us through:\n\n📧 info@olixholdings.com\n📞 Our Contact page form\n📅 Book a Call page\n\nWe respond within 24 hours!",
  default: "I'd be happy to help with that! You can ask me about our **services**, **products**, **industries** we serve, **pricing**, **careers**, or I can help you **book** a consultation. What interests you?"
};

function getBotReply(message) {
  const lower = message.toLowerCase();
  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) return botResponses.greeting;
  if (lower.includes('service')) return botResponses.services;
  if (lower.includes('product')) return botResponses.products;
  if (lower.includes('price') || lower.includes('cost') || lower.includes('pricing')) return botResponses.pricing;
  if (lower.includes('book') || lower.includes('call') || lower.includes('consult') || lower.includes('appointment')) return botResponses.book;
  if (lower.includes('career') || lower.includes('job') || lower.includes('hiring') || lower.includes('work')) return botResponses.careers;
  if (lower.includes('industry') || lower.includes('finance') || lower.includes('health') || lower.includes('retail')) return botResponses.industries;
  if (lower.includes('contact') || lower.includes('email') || lower.includes('reach')) return botResponses.contact;
  return botResponses.default;
}

const AIChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: botResponses.greeting }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    const botMsg = { from: 'bot', text: getBotReply(input) };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, botMsg]);
    }, 600);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      <button className="chatbot-fab" onClick={() => setOpen(!open)} aria-label="AI Assistant">
        {open ? '✕' : '🤖'}
      </button>

      {open && (
        <div className="chatbot-window glass">
          <div className="chatbot-header">
            <span className="chatbot-status-dot"></span>
            <span>Olix AI Assistant</span>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-msg chatbot-msg-${msg.from}`}>
                <div className="chatbot-bubble">{msg.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chatbot-input-row">
            <input
              type="text"
              placeholder="Ask me anything..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={handleSend}>➤</button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;
