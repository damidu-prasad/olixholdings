import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jacexsjrjrnbcbiybfxi.supabase.co';
const supabaseKey = 'sb_publishable_acToeJJcs6QcFRWzYvGKJA_MdcTBf2x';

export const supabase = createClient(supabaseUrl, supabaseKey);
