import React, { useState, useEffect } from 'react';


const withData = (WrappedComponent) => {
    const WithData = (props) => {
        const [data, setData] = useState([]);

        useEffect(() => {
            setTimeout(() => {
                fetch(props.dataSource)
                .then(response => response.json())
                .then(data => setData(data.slice(0, 3)));
            }, 1500);
        });

        return (
            data.length < 1 ? <h3>LOADING ...</h3> :
            <WrappedComponent data={data} {...props} />
        );
    };

    return WithData;
};


export default withData;