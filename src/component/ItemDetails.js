import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
const ItemDetails = ({match}) => {
    useEffect(() => {
        console.log(match);
        fetchItem();
    }, []);

    const [itemData, setItem] = useState({
        images:{}
    });

    const fetchItem = async () => {
        const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
        const item = await data.json();
        console.log(item.data.item);
        setItem(item.data.item);
    }

    return (
        <div>
            <h4>{itemData.name}</h4>
            <img src={itemData && itemData.images.background}/>
        </div>
    );
};

export default ItemDetails;