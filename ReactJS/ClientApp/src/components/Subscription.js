import React from 'react';

//This is a function 
const subscription = (props) => {
    //Here to create any property you can use const or let
    return (
        <div>
            <p>This is a Subscription Page!</p>
            <p>Add some dynamic content in single {} ; Page number is {Math.floor(Math.random())} </p>
            <p>Name of the page is {props.name} and page number is {props.number}</p>
            // if this is in class, you can aceess props as this.props
            <p>{props.childern}</p> // childern is a reserved word
        </div>
       );
}

//export file with subscription name. This is the default export from this file.
export default subscription;