# ArchitectUI Bootstrap 5 ReactJS

[Initial Project](https://github.com/DashboardPack/architectui-react-theme-free) 
Ported by `gabaaa` to Vite.js with TypeScript.

ArchitectUI ReactJS is a free admin dashboard template based on Bootstrap and React frontend framework. It is easy to install, customize and use.
### Made with love by DashboardPack.com

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
npm run dev
```

After the command finished, you should see a Compiled successfully! message in your terminal window. Also, a web server service will be started so you can view your app in the browser: http://localhost:5173

To create a production optimized build run the command below:

```bash
npm run build
```

This created another folder in the root of your project named dist. You'll have an option to start a local web server to view your newly created production build.  
In order to build for a url pathname that is not `/` i.e. `www.example.com/ui` then create an `.env` file at folder root and set the `VITE_PUBLIC_URL`.
```shell
VITE_PUBLIC_URL="/ui"
```

```bash
npm run preview
```

This will start a local web server on port 4173, on which the production folder (/dist/) will be available in your browser.
