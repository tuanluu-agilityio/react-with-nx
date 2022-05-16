import { Route, Navigate, Link, Routes } from 'react-router-dom';

import { BooksFeature } from '@acme/books/feature';

// importing the UI library into our App
import {
  GlobalStyles,
  Header,
  Main,
  NavigationItem,
  NavigationList,
} from '@acme/ui';

import { CartFeature } from '@acme/cart/feature';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header>
        <h1>Bookstore</h1>
        <NavigationList>
          <NavigationItem>
            <Link to="/books">Books</Link>
          </NavigationItem>
          <NavigationItem>
            <Link to="/feature">CartFeature</Link>
          </NavigationItem>
        </NavigationList>
      </Header>
      <Main>
        <Routes>
          <Route path="/books" element={<BooksFeature />} />
          <Route path="/cart" element={<CartFeature />} />
          <Route path="/" element={<Navigate to="/books" />} />
        </Routes>
      </Main>
    </>
  );
};

export default App;
