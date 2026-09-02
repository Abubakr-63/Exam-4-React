import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { promotionsData } from '../backend/api';

export default function Sale_Info() {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    function getProducts(){
        promotionsData.map(elem => {
        if(elem.id == id){
            setProduct(elem);
        }
    })
    }
    useEffect(() => {
        getProducts()
    },[]);
    console.log(product)
  return (
        <div className='container mx-auto m-10 w-120'>
        <img src={product.image} alt="" />
        <h1 className='text-3xl text-[#446B80] font-bold'>{product.title}</h1>
        <p>{product.date}</p>
        <p>{product.description}</p>
        </div>
  )
}
