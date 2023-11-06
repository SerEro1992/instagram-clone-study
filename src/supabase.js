
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://acixcwqlgjsmvahdpszo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjaXhjd3FsZ2pzbXZhaGRwc3pvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyMDU1OTEsImV4cCI6MjAxNDc4MTU5MX0.kbMK93rddvwcVgQZqzo7N4m7gfwN2Fx9deLJUVRnSy0'
export const supabase = createClient(supabaseUrl, supabaseKey)


