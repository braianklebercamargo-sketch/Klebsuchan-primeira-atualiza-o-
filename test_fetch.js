async function go() {
  const res = await fetch('https://eezccvpkexmssynooupi.supabase.co/storage/v1/object/public/data/posts.json', { cache: 'no-store' });
  const data = await res.json();
  console.log(data[0].title.rendered);
}
go();
