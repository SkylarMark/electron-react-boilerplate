This Project is Basic React Project with React-Router-DOM Configured for working in both environments
development as well as Production mode with Electron.

## Available Scripts`

In the project directory, you can run:

### `npm react-start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run react-build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `npm run electron-start`

Runs electron and open the electron window only. If React server is not Running, its not gonna work. To use this start React server with [npm run start]

### `npm run dev-start`

Runs the Development version of electron along with React Server
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run package`

It will first package react in [build] folder, then its gonna package the project with electron.

### `npm run electron-package`

It will pack the current build folder made from [npm run react-build]
