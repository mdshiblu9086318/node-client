import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import MealContainer from '../MealContainer/MealContainer.js';

const Home = () => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        fetch('https://safe-woodland-25422.herokuapp.com/meals')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [])
    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                {
                    meals.length === 0 && <Spinner animation="border" variant="success" />
                }
            </div>
            <div className="row">
                {
                    meals.map(meal => <MealContainer meal={meal}></MealContainer>)
                }
            </div>
        </div>
    );
};

export default Home;