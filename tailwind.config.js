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
      backgroundImage: {
        'hero-background': "url('@/assets/blob.jpg')",
        'hero-thumbnail':  "url('@/assets/heroVideoThumbnail.jpg')"
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      margin: {
        '45': '45px',
      },
      height: {
        '26': '6.5rem'
      },
      width: {
        '26': '6.5rem'
      },
      maxHeight: {
        '700px': '700px',
      }
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '16': '16px',
      '24': '24px',
      '32': '32px',
      '48': '48px',
      '62': '62px'
    }
    
  },
  plugins: [],
}
