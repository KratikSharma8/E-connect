import React, { useState } from 'react';
import './CSS/Dump.css';

function WasteMaterialForm() {
    const [errors, setErrors] = useState({});
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        
        // Perform your custom validations here
        const validationErrors = {};
        
        if (!form.name.value.trim()) {
            validationErrors.name = 'Name is required';
        }
        if (!form.image.files[0]) {
            validationErrors.image = 'Image is required';
        }
        // Add more validations as needed
        
        if (Object.keys(validationErrors).length === 0) {
            // Validations passed, submit the form or handle data
            console.log('Form submitted!');
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div class name="waste-form-container">
            <h1>Waste Material Form</h1>
            <form id="wasteForm" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                {errors.name && <span className="error">{errors.name}</span>}<br /><br />
            </div>
            <div className="form-group">
                <label htmlFor="image">Image:</label>
                <input type="file" id="image" name="image" accept="image/*" required />
                {errors.image && <span className="error">{errors.image}</span>}<br /><br />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description"></textarea><br /><br />
            </div>
            <div className="form-group">
                <label htmlFor="quantity">Quantity:</label>
                <input type="number" id="quantity" name="quantity" /><br /><br />
            </div>
            <div className="form-group">
                <label htmlFor="source">Source:</label>
                <input type="text" id="source" name="source" /><br /><br />
                </div>
            <div className="form-group">
                <label htmlFor="location">Location:</label>
                <input type="text" id="location" name="location" /><br /><br />
                </div>
            <div className="form-group">
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" /><br /><br />
                </div>
            <div className="form-group">
                <label htmlFor="contact">Contact Information:</label>
                <input type="text" id="contact" name="contact" /><br /><br />
                </div>
            <div className="form-group">
                <label htmlFor="collectionMethod">Collection Method:</label>
                <input type="text" id="collectionMethod" name="collectionMethod" /><br /><br />
                </div>
            <div className="form-group">
                <label htmlFor="disposalMethod">Disposal Method:</label>
                <input type="text" id="disposalMethod" name="disposalMethod" /><br /><br />
                </div>
            <div className="form-group">
                <label htmlFor="hazardousMaterials">Hazardous Materials:</label>
                <input type="checkbox" id="hazardousMaterials" name="hazardousMaterials" /><br /><br />
                </div>
            <div className="form-group">
                <label htmlFor="weightVolume">Weight or Volume:</label>
                <input type="text" id="weightVolume" name="weightVolume" /><br /><br />
            </div>
            <div className="form-group">
                <label htmlFor="ecoFriendly">Eco-Friendly Alternatives:</label>
                <textarea id="ecoFriendly" name="ecoFriendly"></textarea><br /><br />
            </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default WasteMaterialForm;
