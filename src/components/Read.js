import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Read() {
    const [data, setData] = useState([]);
    function getdata(){
        axios
            .get("https://6594fec504335332df81c4f3.mockapi.io/CURD")
            .then((res) => {
                setData(res.data);
            });
    }

    useEffect(() => {
        getdata();
        
    }, []);

    function handleDelete(id) {
        axios.delete(`https://6594fec504335332df81c4f3.mockapi.io/CURD/${id}`)
        .then(()=>{
            getdata();
        })
           
    }

    return (
        <>
            read operation
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Price</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((eachdata) => 
                    (
                        <tr>
                            <td>{eachdata.id}</td>
                            <td>{eachdata.ProductName}</td>
                            <td>{eachdata.ProductPrice}</td>
                            <td><button className="btn-success">Edit</button></td>
                            <td><button className="btn-danger" onClick={()=>{
                                handleDelete(eachdata.id); // Pass the ID to handleDelete
                            }}>Remove</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Read;
