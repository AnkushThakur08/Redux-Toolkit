import React from 'react';

// Redux
import { Provider } from 'react-redux';
import store from './Store/store';

// React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import NavBar from './Components/NavBar';

// Pages
import Cart from './Pages/Cart';
import Home from './Pages/Home';

const App = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
