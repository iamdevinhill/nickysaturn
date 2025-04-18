import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zfygibwmefjjzfqdpbkf.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmeWdpYndtZWZqanpmcWRwYmtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5MDAyNjAsImV4cCI6MjA2MDQ3NjI2MH0.VCbj7VumoLThJ66BzOj1dcMc2CorVnCidIA_ZAUeOcg";
createClient(supabaseUrl, supabaseKey);
