import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

import { BrowserRouter } from 'react-router-dom';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { CART_FEATURE_KEY, cartReducer } from '@acme/cart/data-access';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = configureStore({
  reducer: { [CART_FEATURE_KEY]: cartReducer },
  // Additional middleware can be passed to this array
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
  // Optional Redux store enhancers
  enhancers: [],
});

root.render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </Provider>
);
