# YearProgressMotivation

## FOR PRODUCTION RUN
```
cd yourpath/app/
docker build -t vite-app .
docker run -p 3000:80 vite-app
```
open http://localhost:3000

## FOR DEV WITH HOT RELOADING

add this to `vite.config.js`
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  //_____ ADD BELOW
  server: {
    host: '0.0.0.0', // <== this is the key
    port: 5173
  }
  //_____ ADD ABOVE
})
```

RUN COMMANDS
```
cd yourpath/app/
docker build -f Dockerfile.dev -t vite-app-dev .
docker run -it --rm -v "$(pwd):/app" -v /app/node_modules -p 5173:5173 vite-app-dev
```
open http://localhost:5173