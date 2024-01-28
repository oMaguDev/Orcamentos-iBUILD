import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tggvxlnvzrfteeavuech.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnZ3Z4bG52enJmdGVlYXZ1ZWNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY0NTIyMTgsImV4cCI6MjAyMjAyODIxOH0.ij_1-BA9ICRED8ryS6SxNLkfGKLt9m6HYarxM5nQ_m8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);