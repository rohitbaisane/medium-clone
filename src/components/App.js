import React from "react";
import ReactDOM from "react-dom/client";
import Signup from "./Signup";
import Body from "./Body";


const AppLayout = () => {

    return (
        <Body></Body>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout></AppLayout>);