import { defineConfig } from 'vite';
// import {resolve} from 'path';


// import reactRefresh from '@vitejs/plugin-react-refresh';

// import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [
  //   createHtmlPlugin({
  //     minify: false,
  //     pages: [
  //       {
  //         entry: './main.js',
  //         filename: 'index.html',
  //         template: './src/index.html',  
  //       }
  //     ],
  //   }),
  // ],
  // appType:'mpa',
  root: 'src',
  base:'',
  // assetsInclude:['src/assets/img/*.jpg'],
  plugins:[],
  build:{
    outDir: 'dist',
    emptyOutDir:true,
    rollupOptions:{
      input:{
        main: './src/index.html',
        contacto: 'src/contacto.html',
        galeria: 'src/galeria.html',
        nosotros: 'src/nosotros.html',
        menu: 'src/menu.html',
        proceso:'src/proceso.html'
      }
    }
  }
});
