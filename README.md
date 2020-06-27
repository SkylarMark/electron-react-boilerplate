This Project is Basic React Project with React-Router-DOM Configured for working in both environments
development as well as Production mode with Electron.

## Available Scripts`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `npm run electron`

Runs electron and open the electron window only. If React server is not Running, its not gonna work properly. To use this start React server with [npm run start]

### `npm run e-dev`

Runs the Development version of electron along with React Server
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

As well as it will open a Electron window, with your project loaded right in.

### `npm run e-pack`

It will run pree-pack which is same as [npm run build], it will build it first then its gonna build the project on electron.

### `npm run e-dpack`

It will pack the current build folder made from [npm run build]
