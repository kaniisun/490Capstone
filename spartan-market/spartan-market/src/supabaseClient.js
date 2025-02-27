// supabaseClient.js

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vfjcutqzhhcvqjqjzwaf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmamN1dHF6aGhjdnFqcWp6d2FmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0MTEzOTcsImV4cCI6MjA1NTk4NzM5N30.qj8ZHoelOsaWJpskqYAdlcMegwl1T5mzeIefK7dNUbI";

export const supabase = createClient(supabaseUrl, supabaseKey);
