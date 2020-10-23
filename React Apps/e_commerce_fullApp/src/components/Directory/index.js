import React from 'react';
import ShopMen from './../../assets/men.jpg';
import ShopWomen from './../../assets/women.jpg';
import './stylesDir.scss';

const Directory = props => {
    return (
        <div className="directory">
            <div className="wrap">
                <div
                    className="item" 
                    style={{backgroundImage: `url(${ShopWomen})`}}
                > 
                    <a>Shop womens</a> 
                </div>
                <div
                    className="item"  
                    style={{backgroundImage: `url(${ShopMen})`}}
                > 
                    <a>Shop mens</a>
                </div>
            </div>    
        </div>
    );
};

export default Directory;
