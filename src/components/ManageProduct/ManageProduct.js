import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import './ManageProduct.css'
import removeIcon from '../../images/remove.png'

const ManageProduct = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [manageOrder, setManageOrder] = useState([])
    useEffect(() => {
        fetch('https://safe-woodland-25422.herokuapp.com/order?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setManageOrder(data))
    }, [])
    const handleDeleteMeal = (event,name) => {
        fetch(`https://safe-woodland-25422.herokuapp.com/delete/${name}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if(result){
                    event.target.parentNode.style.display='none'
                }
            })
    }
    return (
        <div id="manage-product-content" >
            <div className="container">
                <div className="d-flex">
                    <h5>Meal Name</h5>
                    <h5>Wight</h5>
                    <h5>Price</h5>
                    <h5>Action</h5>
                </div>
                <hr />
                {
                    manageOrder.map(detail => <div className="d-flex">
                        <p className="meal-name">{detail.name}</p>
                        <p className="meal-wight">{detail.wight}</p>
                        <p className="meal-price">{detail.price}</p>
                        <button className="remove-btn" onClick={() => handleDeleteMeal('event',detail.name)}><img src={removeIcon} alt="" /></button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageProduct;