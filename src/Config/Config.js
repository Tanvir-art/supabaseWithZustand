import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://itbiopbrsdklojvsbfxy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0YmlvcGJyc2RrbG9qdnNiZnh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY2MzU4NzUsImV4cCI6MjAyMjIxMTg3NX0.3yiZVQ_vcHdk6sPB-Ex0mNpzp0Txc9RSTaT1wFBlX2I';

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;


// import { createClient } from '@supabase/supabase-js'
// const supabaseUrl = 'https://itbiopbrsdklojvsbfxy.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
// const supabase = createClient(supabaseUrl, supabaseKey)