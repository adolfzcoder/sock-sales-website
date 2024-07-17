import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://blheqrswekvnjhgrexpf.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsaGVxcnN3ZWt2bmpoZ3JleHBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEyMTA5MzAsImV4cCI6MjAzNjc4NjkzMH0.RywmAn83A3i5_43pDZKejYA6RCa2UFcZyvr6b6SLgek";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;