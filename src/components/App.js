import React from "react";
import ReactDOM from "react-dom/client";


const AppLayout = () => {

    return (<div className="w-24 m-10 p-2">
        Hello world
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout></AppLayout>);