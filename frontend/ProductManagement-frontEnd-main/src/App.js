import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<ProductList/>}/>
          <Route path='/' element={<ProductList/>}/>
          <Route path='/products' element={<ProductList/>}/>
          <Route path='/saveProduct' element={<AddProduct/>}/>
          <Route path='/updateProduct/:id' element={<UpdateProduct/>}/>
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
