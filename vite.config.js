import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-mern/',
  plugins: [react()],
  
  // server: {   
//     proxy: {
//       '/api': {
//         // target: "https://jobportal-5kw8.onrender.com",
//         target: 'http://localhost:9000',
//         changeOrigin: true,
//         secure: false
//       }
//     },
//   },
 
//   plugins: [react()],
//  base : "/react-mern/" ,
});
