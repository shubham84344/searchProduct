import React, { useEffect, useState } from 'react';
import './ProductList.scss';

function ProductList({ search }) {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async (url, setter) => {
            try {
                const res = await fetch(url);
                if (!res.ok) return;
                const data = await res.json();
                setter(data);
            } catch (err) {
                console.error(`Error fetching from ${url}:`, err);
            }
        };

        fetchData("https://fakestoreapi.com/products/categories", setCategories);
        fetchData("https://fakestoreapi.com/products", setProducts);
    }, []);

    const filteredProducts = products.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="ProductListScss">
            <div className="leftSide">
                <ul>
                    {categories.map((cat, i) => (
                        <li key={i}>{cat}</li>
                    ))}
                    {categories.length === 0 &&
                        <p style={{ width: '100%' }}>
                            No categories found.
                        </p>
                    }
                </ul>
            </div>
            <div className="rightSide">
                <div className="productGrid">
                    {filteredProducts.map((p) => (
                        <div className="productCard" key={p.id}>
                            <img src={p.image} alt={p.title} className="productImg" />
                            <h3 className="productTitle">{p.title}</h3>
                            <p className="productCategory">{p.category}</p>
                            <p className="productPrice">${p.price}</p>
                            <p className="productDesc">{p.description}</p>
                            <p className="productRating">Rating: {p.rating?.rate} ({p.rating?.count})</p>
                        </div>
                    ))}
                    {filteredProducts.length === 0 &&
                        <p style={{ width: '100%', textAlign: 'center' }}>
                            No products found.
                        </p>
                    }
                </div>
            </div>
        </div>
    );
}

export default ProductList;
