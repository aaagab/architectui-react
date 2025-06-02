# ArchitectUI Bootstrap 5 ReactJS Theme FREE

ArchitectUI ReactJS is a free admin dashboard template based on Bootstrap and React frontend framework. It is easy to install, customiza and use. We have this template available in [Vue](https://dashboardpack.com/theme-details/architectui-dashboard-vue-pro/), [jQuery/HTML](https://dashboardpack.com/theme-details/architectui-dashboard-html-pro), [Angular](https://dashboardpack.com/theme-details/architectui-angular-7-bootstrap-material-design-pro?v=7516fd43adaa) and other version. For more awesome admin panels please check DashboardPack.com

### Made with love by DashboardPack.com

## PRO Version Available [here](https://dashboardpack.com/theme-details/architectui-dashboard-react-pro)

## ArchitectUI ReactJS Preview

![ArchitectUI Bootstrap 5 ReactJS Theme FREE](https://colorlib.com/wp/wp-content/uploads/sites/2/architectui-react-free.jpg)

## Installation

Download and Uncompress the theme package archive in your desired folder location.

Download and install Node.js LTS from https://nodejs.org/en/download/

```bash
npm install
```

After npm finishes installing the modules from package.json you can go ahead and start the application. To do so, run the command below.

```bash
npm run start
```

After the command finished, you should see a Compiled successfully! message in your terminal window. Also, a web server service will be started so you can view your app in the browser: http://localhost:3000

To create a production optimized build run the command below:

```bash
npm run build
```

This created another folder in the root of your project named build. You'll have an option to start a local web server to view your newly created production build.

```bash
npx serve -s build -l 4000
```

This will start a local web server on port 4000, on which the production folder (/build/) will be available in your browser.


## Migration to ViteJS React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
