fetch('http://localhost:3000/api/notify-new-post', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    postId: 1781047442905,
    postTitle: "🕷️ O Fim do Peter Parker? Teoria Aponta que Tom Holland Pode Virar o Monstruoso 'Aranha-Humana' em Homem-Aranha 4!",
    postExcerpt: "O trailer do quarto filme solo de Tom Holland no Universo Cinematográfico da Marvel (MCU) não apenas confirmou que o herói vive a fase mais sombria, solitária e depressiva de sua vida nas ruas frias de Nova York, mas também jogou na nossa cara pistas aterrorizantes.",
    postImage: "https://eezccvpkexmssynooupi.supabase.co/storage/v1/object/public/images/homemaranha4.webp"
  })
}).then(res => res.json()).then(data => console.log(data)).catch(err => console.error(err));
