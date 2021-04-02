import React, { useState } from 'react';
import './AddProduct.css'
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const onSubmit = data => {
        const mealData = {
            name: data.name,
            wight: data.wight,
            price: data.price,
            imageURL: imageURL
        }
        fetch('https://safe-woodland-25422.herokuapp.com/addMeal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mealData)
        })
    };
    const handleImageUpload = event => {
        const imageData = new FormData()
        imageData.set('key', '91dbb4b48e0e9071e39d892bc32501e9')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(response => {
                setImageURL(response.data.data.display_url);
            })
    }
    return (
        <div id="add-product-content">
            <h3>Add Product</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="name" ref={register} placeholder="Enter Name" />
                <input type="text" name="wight" ref={register} placeholder="Enter Wight" />
                <br /><br />
                <input type="text" name="price" ref={register} placeholder="Enter Price " />
                <input type="file" onChange={handleImageUpload} />
                <br /><br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;