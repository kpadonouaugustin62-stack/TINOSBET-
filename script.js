
}
const SUPABASE_URL = 'https://eruhrhdnqncvvrakhhfn.supabase.co';
const SUPABASE_KEY = 'sb_publishable_1DWQrPq_JdFqO8KXdM4NOw_2c1Y2UZ4';

let supabase;

function initSupabase() {
  if (window.supabase) {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  } else {
    console.error('Supabase CDN non chargé');
  }
}

initSupabase();

async function getRequests() {
  if (!supabase) {
    console.error('Supabase non initialisé');
    return [];
  }
  const { data, error } = await supabase
    .from('tinosbet_requests')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Erreur Supabase:', error);
    return [];
  }
  return data || [];
}

async function saveRequest(request) {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('tinosbet_requests')
    .insert([request]);

  if (error) {
    console.error(error);
    return null;
  }
  return data;
}

// Expose functions globally
window.getRequests = getRequests;
window.saveRequest = saveRequest;
