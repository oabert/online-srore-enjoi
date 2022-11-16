import React from 'react';
import CategoryItemComponent from "../category-item/category-item.component";
import './directory.styles.scss'

const DirectoryComponent = () => {
    const categories = [
        {
            id: 1,
            title: 'Smartphones',
            images: 'https://dummyjson.com/image/i/products/1/1.jpg',
        },
        {
            id: 2,
            title: 'Laptops',
            images: 'https://dummyjson.com/image/i/products/6/1.png',
        },
        {
            id: 3,
            title: 'Fragrances',
            images: 'https://dummyjson.com/image/i/products/12/1.jpg',

        },
        {
            id: 4,
            title: 'Home-decoration',
            images: 'https://dummyjson.com/image/i/products/27/3.jpg',
        },
        {
            id: 5,
            title: 'skincare',
            images: 'https://dummyjson.com/image/i/products/19/1.jpg',
        }
    ];
    return (
        <div className="directory-container">

            {categories.map((category) => (
                <CategoryItemComponent key={category.id} category={category}/>
            ))}

        </div>
    );
};

export default DirectoryComponent;
