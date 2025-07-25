import React, { useEffect, useState } from 'react'
import './Product.css'
import axios from 'axios';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


// useEffect(() => {
//     fetch('https://dummyjson.com/products')
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data.products);
//             setProducts(data.products);
//         })
//         .catch((err) => console.error(err));
// }, []);

// const getData = async () => {
//     try {
//       const res = await fetch("https://dummyjson.com/products");
//       const data = await res.json();
//       console.log(data);
//       setProducts(data.products);
//     } catch (err) {
//       console.log(err);
//     }
//   };
  //   useEffect(()=>{
  //   getData()
  // },[])


const getData = async () => {
    try {
        const res = await axios.get('https://dummyjson.com/products');
            console.log(res.data);
        setError("res.data.products")
    } catch (error) {
        console.log(error)
        setError("error on fetcing data")
    }finally{
        setLoading(false);
    }
};

useEffect (() =>{
    getData();
}, []);






    return (
        <div className='product-container'>
            {products.length > 0 &&
                products.map((product) => (
                    <div className='product-card' key={product.id}>
                        <h1>{product.title}</h1>
                        <img src={product.images[0]} alt={product.title} />
                        <p>{product.description}</p>

                    </div>


                ))}

        </div>
    )
}

export default Product;