import React, { useState } from 'react'
import { addProductApi } from '../services/Allapi';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';


function Add() {

    
    const handleAdd = async()=>{
        const {name,category,price,quantity,description} = productDetails
        const result = await addProductApi({name,category,price,quantity,description})
        console.log(result);
        
    }
  return (
    <>
   <div>
    <Link to ={'/'}><FontAwesomeIcon icon={faHouse} /></Link>
    <h3 className='text-center  mt-4'><Link to ={'/'}><FontAwesomeIcon icon={faHouse} /></Link>Add Product </h3>
   <div  className='d-flex justify-content-center align-items-center mt-3' >
   <form action="" className='bg-warning p-5'>
        <input type="text" className='form-control mt-2' placeholder='Prouct Name' onChange={(e)=>setProductDetails({...productDetails, name:e.target.value})} value = {productDetails.name}/>
        <input type="text" className='form-control mt-2' placeholder='Category' onChange={(e)=>setProductDetails({...productDetails, category:e.target.value})} value = {productDetails.category}/>
        <input type="text" className='form-control mt-2' placeholder='Price' onChange={(e)=>setProductDetails({...productDetails, price:e.target.value})} value = {productDetails.price}/>
        <input type="text" className='form-control mt-2' placeholder='Quantity' onChange={(e)=>setProductDetails({...productDetails, quantity:e.target.value})} value = {productDetails.quantity}/>
        <input type="text" className='form-control mt-2' placeholder='Description' onChange={(e)=>setProductDetails({...productDetails, description:e.target.value})} value = {productDetails.description}/>
        <button type='button' className='btn btn-primary mt-3 form-control' onClick={() => handleUpdate(item.id)}>Update</button>
    </form>
   </div>
   </div>
    </>
  )
}

export default Add