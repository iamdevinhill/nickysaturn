// src/routes/api/signup/+server.ts
import { json } from '@sveltejs/kit';
import { createClient } from '@supabase/supabase-js';

export async function POST({ request }) {
  const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL ?? '';
  const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_KEY ?? '';

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase URL or Anon Key is missing');
    return json({ error: 'Server misconfiguration. Missing Supabase credentials.' }, { status: 500 });
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  try {
    const body = await request.json();
    const { full_name, email_address, phone_number } = body;

    if (!full_name || !email_address || !phone_number) {
      return json({ error: 'All fields are required.' }, { status: 400 });
    }

    const parsedPhone = Number(phone_number);
    if (Number.isNaN(parsedPhone)) {
      return json({ error: 'Invalid phone number.' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('nicky_saturn_mailing_list')
      .insert({ full_name, email_address, phone_number: parsedPhone })
      .select();

    console.log('Supabase INSERT response:', { error, data });

    if (error) {
      return json({ error: error.message || 'Insert failed.' }, { status: 500 });
    }

    return json({ message: 'Success!', data }, { status: 201 });
  } catch (err) {
    console.error('Server error:', err);
    return json({ error: 'Server error. Invalid request.' }, { status: 500 });
  }
}
