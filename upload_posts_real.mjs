import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

const supabaseUrl = 'https://eezccvpkexmssynooupi.supabase.co';
const supabaseKey = 'sb_secret_jXUzG_NkQO905Cgu55NAcg_3zoTsrPq';
const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  const postsPath = path.join(process.cwd(), 'src', 'data', 'posts.json');
  const fileContent = fs.readFileSync(postsPath);
  
  const { data, error } = await supabase.storage
    .from('data')
    .upload('posts.json', fileContent, {
      upsert: true,
      contentType: 'application/json'
    });
    
  if (error) {
    console.error('Error uploading posts.json:', error);
  } else {
    console.log('posts.json uploaded to Supabase data bucket!');
  }
}
main();
