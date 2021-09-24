import React from 'react';
import styled from '@emotion/styled';

const Order = styled.div`
    width:100%;
    border:1px solid #ccc;
    box-shadow: 0 2px 3px #ccc;
    padding: 10px;
    margin: 10px auto;
    box-sizing: border-box;
`

const order = (props) => (
    <Order>
        <p>Ingredients: Salad(1)</p>
        <p>Price: <strong>USD 5.45</strong> </p>
    </Order>
)

export default order