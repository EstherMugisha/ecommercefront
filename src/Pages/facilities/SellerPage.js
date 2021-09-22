import React from 'react';

const SellerPage = (props) => {
    return (
        <div>
            <h1>Hi My name is {props.match.params.name}, I am a Seller. My ID is {props.match.params.id}</h1>
        </div>
    );
}

export default SellerPage;