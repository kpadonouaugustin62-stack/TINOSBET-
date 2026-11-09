const SUPABASE_URL = 'https://eruhrhdnqncvvrakhhfn.supabase.co';
const SUPABASE_KEY = 'sb_publishable_1DWQrPq_JdFqO8KXdM4NOw_2c1Y2UZ4';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

async function getRequests() {
  const { data, error } = await supabase
    .from('tinosbet_requests')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }
  return data || [];
}

async function saveRequest(request) {
  const { data, error } = await supabase
    .from('tinosbet_requests')
    .insert([request]);

  if (error) {
    console.error(error);
    return null;
  }
  return data;
}

// Les autres fonctions de ton fichier original peuvent rester en dessous
// (escapeHTML, formatAmount, paymentDetails, etc.)
