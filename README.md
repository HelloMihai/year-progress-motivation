# YearProgressMotivation

![2025-04-19_22-25-25](https://github.com/user-attachments/assets/337889ac-c047-4e29-8d5d-f7baf55d67fc)

## clone repo
```
git clone git@github.com:HelloMihai/year-progress-motivation.git
cd year-progress-motivation
```

## Docker
```
cd year-progress-motivation
docker compose up --build -d
```

## normal static run
```
cd year-progress-motivation
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

## allow custom server urls.  Add to `allowedHosts` in `vite.config.js`
```
...
  server: {
    host: '0.0.0.0', // <== this is the key
    port: 5173,
    allowedHosts: ['localhost', 'another.host']
  }
...
```

RUN COMMANDS
```
cd year-progress-motivation
docker build -f Dockerfile.dev -t vite-app-dev .
```
run 
```
docker run -it --rm -v "$(pwd):/app" -v /app/node_modules -p 5173:5173 vite-app-dev
```
or run in foreground (stops with terminal session)
```
docker run -d --name vite-app-dev \
  -v "$(pwd):/app" \
  -v vite_node_modules:/app/node_modules \
  -p 5173:5173 \
  vite-app-dev
```
open http://localhost:5173
