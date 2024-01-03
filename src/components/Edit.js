import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Edit() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        loadData();
    }, []);

    function loadData() {
        const storedId = localStorage.getItem("id");
        const storedName = localStorage.getItem("name");
        const storedPrice = localStorage.getItem("price");

        // Set state only if all values are present in local storage
        if (storedId && storedName && storedPrice) {
            setId(storedId);
            setName(storedName);
            setPrice(storedPrice);
        } else {
            // Handle missing values or errors appropriately
            console.error("Error loading data from local storage:", storedId, storedName, storedPrice);
        }
    }

    const handleUpdate=()=>{
        if (!id||!name||!price) {
            alert("please fill all the filed")
          }else{}
    
             axios.put(`https://6594fec504335332df81c4f3.mockapi.io/CURD/${id}`, {
                ProductId: id,
                ProductName: name,
                ProductPrice: price,
            });
            console.log('Data updated successfully!');
            navigate('/'); 
            window.alert('Data updated successfully!');
        
    };

    return (
        <div>
            <div className="mb-3">
                <label className="form-label">Product ID</label>
                <input
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    value={id}
                    readOnly // Make Product ID read-only if not editable
                />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Product Name</label>
                <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Product Price</label>
                <input
                    type="text"
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleUpdate}>
                Update
            </button>
        </div>
    );
}

export default Edit;
