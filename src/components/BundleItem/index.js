import React from 'react';
import PropTypes from 'prop-types';


let totalPrice = 0;

const getBubblesName =( item ) => {
    let bubbleService = require('../../../../server/services/bubbleService');
    totalPrice += bubbleService.getProducts()[item-1].price;
    return bubbleService.getProducts()[item-1]
};


const BundleItem = ({ id, name, description, items }) => (

    <div className="card card-body bundle-item">
        <h3 className="title">{ name }</h3>
        <p className="description">{ description }</p>
        {items.map((i,index) =>
            [
                <p key={ index }>{ getBubblesName(i).name }</p>,
                <div><img src={ getBubblesName(i).image } alt={ getBubblesName(i).name } /></div>,
            ])}
        <p className="price"> Total Price: { totalPrice } $</p>

    </div>
);

BundleItem.propTypes = {
    /* */
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    items: PropTypes.array
};

BundleItem.defaultProps = {
    items: [],
    description: ""
}

export default BundleItem;