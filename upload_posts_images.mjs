import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

const supabase = createClient('https://eezccvpkexmssynooupi.supabase.co', process.env.VITE_SUPABASE_ANON_KEY);

async function main() {
  const postsPath = path.join(process.cwd(), 'src', 'data', 'posts.json');
  const fileContent = fs.readFileSync(postsPath);
  
  const { data, error } = await supabase.storage
    .from('images')
    .upload('posts.json', fileContent, {
      upsert: true,
      contentType: 'application/json'
    });
    
  if (error) {
    console.error('Error uploading posts.json:', error);
  } else {
    console.log('posts.json uploaded to Supabase images bucket!');
  }
}
main();
