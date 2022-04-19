import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import Product1 from './pages/Product1';
import ProductCustom from './pages/ProductCustom';
import Service from './pages/Service';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/hello' element={<Hello />}></Route>
          <Route path='/service/*' element={<Service />}></Route>
          <Route path='/products' element={<Product />}>
            <Route path=':productId' element={<ProductCustom />}></Route>
            <Route path='product1' element={<Product1 />}></Route>
          </Route>
          <Route
            path='*'
            element={
              <div>
                Notfound, <Link to={'/'}>return Home</Link>
              </div>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
