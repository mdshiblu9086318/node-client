import React from 'react';
import './MealContainer.css'
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const MealContainer = (props) => {
    const { imageURL, name, wight, price } = props.meal;
    const history = useHistory()
    const handleMeal = name => {
        const url = `/checkout/${name}`
        history.push(url)
    }
    return (
        <div className="col-md-4">
            <Card className="mealContent">
                <Card.Body>
                    <img src={imageURL} alt="" />
                    <div className="d-flex">
                        <h3>{name}</h3>
                        <h3>{wight}</h3>
                    </div>
                    <div className="d-flex">
                        <h1>{price}</h1>
                        <button className="btn btn-success" onClick={() => handleMeal(name)}>Buy Now</button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MealContainer;