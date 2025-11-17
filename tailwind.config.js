/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
      extend: {
        keyframes: {
          customPing: {
            '0%': { transform: 'scale(1)', opacity: '1' },
            '75%': { transform: 'scale(1.1)', opacity: '0' }, // 10% lebih besar
            '100%': { transform: 'scale(1.1)', opacity: '0' },
          },
          slowRotate: {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
        },
        animation: {
          'custom-ping': 'customPing 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
          'slow-rotate': 'slowRotate 3s linear infinite', // Rotasi lebih lambat (10 detik)
        },
        
        colors: {
          primary: "#58b12f",
          hero: "#A3E635",
          secondary: "#207033",
          gradient: "#E4FDEB",
          third: "#0D4019",
          amenities: "#AEE2FF",
          base: "#1D232A"
        },
        fontFamily: {
          Poppins: "Poppins, sans-serif",
          Koulen: "Koulen, sans-serif",
          syne: "Syne, sans-serif",
          vollkorn: "Vollkorn, serif",
          dmsans: "DM Sans, sans-serif",
        },
      },
    },
    plugins: [require("daisyui")],
  
    daisyui: {
      themes: ["light", "dark", "synthwave"],
    },
    darkMode: "class",
  };
  