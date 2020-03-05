import React from 'react';
import BundleItem from '../BundleItem';
import PropTypes from 'prop-types';

const BundleList = ({ bundles }) => (
    <div className="grid">
        {bundles.map((b, index)=>
            [
                <BundleItem
                    key={index }
                    name= { b.name }
                    items={ b.items }
                />
            ]
        )}
    </div>
);

BundleList.propTypes = {
    bundles: PropTypes.array.isRequired
}

export default BundleList
