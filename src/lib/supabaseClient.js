import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	'https://jpqvnimteberkurdadih.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwcXZuaW10ZWJlcmt1cmRhZGloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE2MDgyODIsImV4cCI6MjA0NzE4NDI4Mn0.lLirZw5wtaDQ6Furb8iLf3NOmWF42i5CdQha_ClMs_Y'
);
