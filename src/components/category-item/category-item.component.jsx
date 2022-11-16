import React from 'react';

import './category-item.styles.scss';

const CategoryItemComponent = ({category}) => {
    const {title, images} = category;
    return (
        <div className="category-container">
            <div className='background-image'
                 style={{
                     backgroundImage: `url(${images})`,
                     backgroundRepeat: "no-repeat",
                     backgroundSize: 'cover',
                 }}/>

            <div className="category-body-container">
                <h2>
                    {title}
                </h2>
                <p> Shop now</p>
            </div>
        </div>
    );
};

export default CategoryItemComponent;
