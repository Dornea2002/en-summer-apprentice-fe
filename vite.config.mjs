import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default {
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
};

// server: {

//   proxy: {

//     "/api/Event/GetAll": {

//       target: "https://localhost:5173";

//       changeOrigin: true;

//       secure: false;

//     };

//   };

// };