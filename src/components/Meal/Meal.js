import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { userContext } from '../../App';
import './Meal.css'

const Meal = (props) => {
    const { name, wight, price } = props.meal;
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    const history = useHistory();

    const handleCheckoutOrder = () => {
        const order = { ...loggedInUser, name, wight, price, currentDate, currentTime }
        fetch('https://safe-woodland-25422.herokuapp.com/checkoutOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {

            })
        history.push('/orders')
    }
    return (
        <div className="container">
            <div className="checkoutMeal">
                <div className="d-flex justify-content-between">
                    <h5>Description</h5>
                    <h6>Quantity</h6>
                    <h5>Price</h5>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                    <h5>{name} {wight}</h5>
                    <h5>1</h5>
                    <h5>{price}</h5>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                    <h4>Total</h4>
                    <h5>{price}</h5>
                </div>
            </div>
            <button onClick={handleCheckoutOrder} className="btn btn-success">Checkout</button>
        </div>
    );
};

export default Meal;