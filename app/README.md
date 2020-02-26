# Daylight periods visualisation

- (1) The goal of this task is to create React application that will represent the daylight period visualisation of each
location on a chosen date.
- (2) By default, the daylight periods should be presented or cities listed bellow at the same time (expressed UTC).
```
{
    {
        name: 'Krakow',
        lat: 50.064651,
        lon: 19.944981
    },
    {
        name: 'Tokio',
        lat: 39.758602,
        lon: -104.997437
    },
    {
        name: 'New York',
        lat: 55.755825,
        lon: 37.617298
    }
}
```

- (3) Sunrise and sunset times should be fetched using the following API: https://api.sunrise-sunset.org/json
- (4) Solution should contain tests
- (5) The presentation layer should contain the following elements:
    a) A simulation area that contains visual representation of daylight phases, name and coordinates, per each
    location.
    b) A date picker for selecting a day for which daylight phase will be shown.
    c) A form to add new location.
    d) Possibility to remove a location.

## Task Evaluation Criteria
- Overall architecture, simplicity and readability of the code.
- Quality of written tests.
- Usage of SOLID and similar principles.
- Design of modules, classes, methods.
- Problem-solving approach and creativity of the solution.

## Hints
- In some cities, the sun still might be shinning after UTC midnight.
- The solution should handle any exception without crashing.
- Nice looking app would not be enough, because in this task you should focus
mostly on the way the code is written.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test:coverage`

Launches the test runner to output present coverage.<br />

### `npm run lint`

Statically analyzes your code to quickly find problems.<br />

### `npm run flow`

Launches the static type checks.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
