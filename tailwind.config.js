/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
       
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      
      extend: {
        boxShadow: {
          'custom-shadow': '0px 2px 6px 0px #0000001A',
          "brand-shadow": "0px 1px 3px 0px #1212121A 0px 0px 0px 1px #12121212 0px 1px 1px 0px #1212121A ", 
        },
        fontSize: {
          "70px": "10px",
          "16px": "16px",
          "15px": "15px",
          "14px": "14px",
          "12px": "12px",
          "10px": "10px",
          "18px": "18px",
          "40px": "40px",
          "13px": "13px",
          "20px": "20px",
          "28px": "28px",
          "24px": "24px",
          "30px": "30px",
          "32px": "32px",
          "35px": "35px",
        },
        backgroundImage: {
          
        },
        colors: {
          brandColor: "#0053A6",
          brandcolor2: "#0A3A6B",
          brandColor3: "#ECF0F3",
          brandColor4: "#F2F6FA",
          brandColor5: "#44444B",
          brandGreen: "#B9F0D1",
          brandGreenText: "#235939",
          brandYellow: "#F9E69A",
          brandYellowText: "#866E0C",
          brandBrown: "#A2845E",
          brandBlue: "#30B0C7",
          brandFadedColor: "#0053A666",
          brandBorder: "#EFEFEF",
          brandSidebar: "#0053A60A",
          brandSearch: "#FAFAFC",
          brandPlaceholder: "#BBBBCB",
          brandBack: "#EAECF2",
          brandSearchText: "#6F7079",
          
        },
      },
    },
    daisyui: {
      base: false,
      themes: ["light"],
    },
    plugins: [require("tailwind-scrollbar-hide"), require("daisyui")],
  };
  