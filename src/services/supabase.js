import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vhoanisazzpfpqklddbi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZob2FuaXNhenpwZnBxa2xkZGJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYzMjA5MzMsImV4cCI6MjA0MTg5NjkzM30.3370ld8EZgqv2yp8Yv_QzIRrh_Rs9bfiReJ-RfYza_w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
