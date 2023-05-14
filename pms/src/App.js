import { useEffect, useState } from 'react';
import './App.css';
import Product from './Product';



function App() {

  let [products,setProducts]=useState([])

  useEffect(()=>{

     fetch("http://localhost:8000/products",{
      method:"GET"
     })
     .then((response)=>{
      return response.json()
     })
     .then((data)=>{
      console.log(data)
      setProducts(data);
      // products=data;
     })
     .catch((err)=>{
      console.log(err)
     })

  },[])

  

  return (
    <div className="App">
      <h1 className='title'>All Products</h1>

      <div className='products'>

        {

            products.map(function(prod){

              return (
                <Product imageURL={prod.imageURL} name={prod.name} price={prod.price}/>
              )

            })

        }

      </div>
      

     

    </div>
  );
}

export default App;
