import React from 'react';
import {Redirect} from "react-router-dom";

const Error = (props) => {
    return (
        <div>
            <button onClick={()=> {return <Redirect to='/'/>}}>Go to main page</button>

            Something went wrong
        </div>
    );
}

export default Error;