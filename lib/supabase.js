import { createClient } from "@supabase/supabase-js";

// Hanya boleh dipakai di server (app/api/...), karena memakai secret key.
export function supabaseServer() {
  return createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SECRET_KEY,
    {
      auth: { persistSession: false },
    },
  );
}
