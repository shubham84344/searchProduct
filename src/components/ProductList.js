import React, { useEffect, useState } from 'react'
import './ProductList.scss';

function ProductList() {

    const [category, setCategory] = useState([]);
    console.log('category', category)

    useEffect(() => {
        async function categoriesApiCall() {
            try {
                const response = await fetch("https://fakestoreapi.com/products/categories");
                if (!response.ok) {
                    console.log('Response not OK', response.status);
                    return;
                }
                const data = await response.json();
                setCategory(data);
            } catch (error) {
                console.log('Error fetching categories:', error);
            }
        }
        categoriesApiCall();
    }, []);

    return (
        <div className='ProductListScss'>
            <div className='leftSide'>
                <ul>
                    {category.map((list, index) => (
                        <li key={index}>{list}</li>
                    ))}
                </ul>
            </div>
            <div className=' rightSide'>
                <p>right side</p>
            </div>
        </div>
    )
}

export default ProductList
