import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = {
    name: "Madrid",
    country: "Spain"
};

function Hello() {
    return (
        <div>
            <h1>Welcome to React</h1>
            <p>My name is Greg, let's build something.</p>
        </div>
    );
}


// Lets look at using properties with React.JS
// The props object provides data to a component to be displayed
// THink of a React component as a function that takes in data as an 
// arguement and then returns React elements to create a user interface. 

// create element takes in three arguments, first is the name of the tag that we want to create, 
// second is any properties and 
// third is any children(this is what is rendered).

function Name({ library, message, number }) {
    console.log(Object.keys(props));
    return (
        <div>
            <h1>Welcome to React.. again!?</h1>
            <p>{message}</p>
            <p>{number} Props Total</p>
        </div>
    );
}

ReactDOM.render(
    // this is the function that will be used to build this element to be 
    // rendered on the page.
    // Can also use XML directly in the JS
    <Name library="React"
        message="have fun ;)"
        number={3}
    />,
    document.getElementById('root')
);
    
