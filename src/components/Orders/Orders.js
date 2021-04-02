import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import './Orders.css'

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch('https://safe-woodland-25422.herokuapp.com/order?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
    return (
        <div className="container">
            {
                order.map(detail => <div className="detail-content">
                    <h3>Name : {loggedInUser.name}</h3>
                    <h4>Email : {detail.email}</h4>
                    <hr />
                    <h5>Meal-Name : {detail.name}</h5>
                    <h5>Wight : {detail.wight}</h5>
                    <h5>Price : {detail.price}</h5>
                    <h4>Date : {detail.currentDate}</h4>
                    <h4>Time : {detail.currentTime}</h4>
                </div>)
            }
        </div>
    );
};

export default Orders;