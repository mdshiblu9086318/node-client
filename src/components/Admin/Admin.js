import React from 'react';
import './Admin.css'
import grid from '../../images/grid.png'
import plus from '../../images/plus.png'
import edit from '../../images/edit.png'
import ManageProduct from '../ManageProduct/ManageProduct';
import AddProduct from '../AddProduct/AddProduct';

const Admin = () => {
    const handleManageProduct = () => {
        document.getElementById('add-product-content').style.display = "none"
        document.getElementById('manage-product-content').style.display = "block"
    }

    const handleAddProduct = () => {
        document.getElementById('manage-product-content').style.display = "none"
        document.getElementById('add-product-content').style.display = "block"
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="side-navigation">
                        <ul>
                            <li id="manage-meal">
                                <div className="d-flex" onClick={handleManageProduct}>
                                    <img src={grid} alt="" />
                                    <button>Manage Meal</button>
                                </div>
                            </li>
                            <li id="add-meal">
                                <div className="d-flex" onClick={handleAddProduct}>
                                    <img src={edit} alt="" />
                                    <button>Add Meal</button>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex">
                                    <img src={plus} alt="" />
                                    <button>Edit Meal</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-9">
                    <ManageProduct></ManageProduct>
                    <AddProduct></AddProduct>
                </div>
            </div>
        </div>
    );
};

export default Admin;