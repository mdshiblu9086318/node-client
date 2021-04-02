import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Meal from '../Meal/Meal';



const Checkout = () => {
    const {name} = useParams();
    const [meal,setMeal] = useState({})
    useEffect(()=>{
        fetch('https://safe-woodland-25422.herokuapp.com/meal/'+name)
        .then(res => res.json())
        .then(data => setMeal(data))
    },[name])
    return (
        <div>
           <Meal meal={meal}></Meal>
        </div>
    );
};

export default Checkout;