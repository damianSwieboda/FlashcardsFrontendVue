/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue, ts, js}"],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    },
    extend: {
      transformOrigin: {
        'top-left-1/3-3/4': '33% 75%',
      },
      backgroundImage: {
        'hero-background': "url('@/assets/blob.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      margin: {
        '45': '45px',
        
      }
    },
    
  },
  plugins: [],
}
