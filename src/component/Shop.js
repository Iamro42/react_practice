import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
const Shop = () => {
    useEffect(() => {
        fetchData();
    }, []);

    const [items, setItems] = useState([]);

    const fetchData = async () => {
        const data = await fetch("https://fortnite-api.theapinetwork.com/upcoming/get");
        const items = await data.json();
        console.log(items.data);
        setItems(items.data)
    }

    return (
        <div>
            {items && items.map((item) => (
                <h3 key={item.itemId}>
                <Link to ={`/shop/${item.itemId}`}>{item.item.name}</Link>
                </h3>
            ))}
        </div>
    );
};

export default Shop;