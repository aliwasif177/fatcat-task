
# **Botics AI**  
Botics is an e-commerce store for Robitics which is built in React where people can browse for robots and their parts and can manufacture their own robots virtually for custom orders. The App is bilingual. supported languages are English and Chinese.    

## **Documentation**  
The documentation includes:  
- **Installation Guide**  
- **Dependencies**  
- **Architecture** 
- **Deployment**

## **Installation Guide**:  
You can run this project using following guidelings.
### Available Scripts  
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
project bt]
### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.



## **Dependencies**: 
The major dependencies are listed below:  
### Installation Dependencies

| Package | Version | Description |
| --- | --- | --- |
| react | 16.13.1 | A JavaScript library for building user interfaces |
| react-router | 5.2.0 | A framework for building server-rendered React applications |
| material-UI | 4.12.3 | Official React bindings for Redux |
| react-redux | 4.0.5| Official React bindings for Redux |
| react-toastify | 7.0.3 | A library for displaying toasts in a React application |
| pubnub | 4.32.0 | Library used for creating chating channels |
| react-hook-form | 7.20.4 | Dynamic form with custom attributes |
| material-table | 1.69.3 | Comprehensive tables to manage data effeciently |
| jwt-decode | 3.1.2 | Librarty to decode jwt token generated from O-auth 2.0 |
| moment | 2.27.0 | Library for date formatting |
| stripe | 1.4.1 | Stripe is a suite of APIs powering online payment processing and commerce solutions for internet businesses of all sizes. Accept payments and scale faster. |

### Dev Dependencies 
| Package | Version | Description |
| --- | --- | --- |
| axios | 0.21.1 | Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). |
| yup | 0.32.9 | Yup is a JavaScript schema builder for value parsing and validation. |
| history | 5.0.0 | Used to gain more control over dynamic navigations |
| Jest | 27.4.0 | Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase |
| Storybook | 6.5.0 | Storybook is a frontend workshop for building UI components and pages in isolation |
| Prettier | 2.7.4 | Code formatting |


### Architecture:
General folder structure:  


<img width="796" alt="image" src="https://user-images.githubusercontent.com/60692401/213504388-f472729c-4572-449e-92d1-2f67225c01d3.png">



# App.js

<img width="1558" alt="image" src="https://user-images.githubusercontent.com/60692401/213508124-3616940f-cc1d-47a1-a093-6ffd0976ecca.png">


This code defines a React functional component called App that is the entry point of the application.

The component uses the useDispatch hook from the react-redux library to access the dispatch function, which is used to dispatch actions to the store.

It also uses the useSelector hook to access the tenantSuccessStatus and tenantLoadingStatus from the state of the application, which is stored in the apiReducer slice of the store. These values are used to determine the status of the tenant account and the loading status of the application, respectively.

The component loads stripe from the process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY variable, which is passed as an argument to the loadStripe() function from the '@stripe/stripe-js' library. The returned promise is stored in stripePromise variable.

The component uses the useEffect hook to dispatch an action actionCreators.checkStatus() to check the status of the tenant and if the JWT token is present it dispatches an action cartActionsCreator.getCartProducts() to get the cart products.

# Router

<img width="1593" alt="image" src="https://user-images.githubusercontent.com/60692401/213509971-4c72edb0-25d4-4543-9312-7217c3fec466.png">



# Store

<img width="1576" alt="image" src="https://user-images.githubusercontent.com/60692401/213511373-9744aad8-ed22-48cc-9ddf-4125c38dd9f1.png">
  

The code imports several modules from different libraries such as 'redux' and 'redux-devtools-extension'.

The code imports combinedReducers from the './reducers' file which is the root Reducer.

It imports mainMiddleware from './middlewares' file which is the main middleware for the application.

The code defines a constant devTools that is a reference to the window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ function and is only set if the DEBUG environment variable is set to true.

It defines a variable enhancer that is used to compose the middleware and dev tools and will be used to configure the store.

The enhancer is set to composeWithDevTools(applyMiddleware(mainMiddleware)) when the DEBUG environment variable is not true and to compose(applyMiddleware(mainMiddleware), devTools) when DEBUG is true.

Finally, the code exports the result of calling the createStore function, passing in the combinedReducers and enhancer as arguments. This creates the store with the combined reducers and the specified enhancer.

# Stripe

<img width="1436" alt="image" src="https://user-images.githubusercontent.com/60692401/213513620-61ef6a1d-5161-4df2-8c32-fa86e16980bf.png">

This code exports a React functional component called Checkout. This component is responsible for handling the checkout process and the payment process using Stripe.

The component imports several modules from the 'react' and '@stripe/react-stripe-js' libraries.

The component defines a constant CARD_ELEMENT_OPTIONS which is an object that contains the styling options for the Stripe payment card element. The options include the color, font family, font size, and the placeholder color of the card element.

The component uses the useEffect hook to call the useStripe and useElements hooks from the '@stripe/react-stripe-js' library. These hooks are used to initialize the Stripe gateway and to manage the card element.

It also uses useDispatch from 'react-redux' to dispatch actions.

The component uses shipmentAmount variable from props.location.state.shipmentAmount to get the amount of shipment from shipment container.

The component uses paymentIntentResponse and PaymentIntentError from redux state to handle payment success and error respectively.

It also uses CardElement from '@stripe/react-stripe-js' to render the card element to the user.










