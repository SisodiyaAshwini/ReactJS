import React, { Component } from 'react';
import { Route } from 'react-router';
import Subscription from './components/Subscription'
//import with S as capital. This is how react understands.

import './custom.css'

export default class App extends Component {
  static displayName = App.name;
    state = { // This is a state. This is reserved word and special kind 
        //and this can only be use when class is extended by Component within a component
        // here you can use normal property also, not nesscary to use state
        // What is special about state is if values in state changes it will rerender the component 
        //and update the DOM in the browser
        //before react 16.8 this was the only way to maintain state(hence most popular in existing projects) 
        //but after that react hook get introduced. See below commented section for hooks
        page: [
            { name: "Subscription", number: "1" },
            { name: "subscription with settings", number: "2" }
        ],
        someOtherState : "Other state"
    }

    switchNameHandler = () => {
        //console.log("clicked!!");
        this.state.page[0].name = "new page"; //Dont do this
        //React will not recognised this. you cannot directly change the value in state like this
        //Component provide special method for this 
        this.setState({
            page: [
                { name: "new page", number: "1" },
                { name: "subscription with settings", number: "2" }
            ]
        })
        //In setstate you are only passing page to change hence someOtherState will remain untouched
    }

  render () { // This react needs to render HTML to DOM
    return (
        <div>
            <Subscription name="subscription" number="1"/> // Anything starts with small is understands as normal JSX i.e. normal html
            // anything start with uppercase can be considered as customer controls
            //These are the attribute you pass to the components which can be read as props on another page

            <Subscription name="subscription with settings" number="2">This will have retension settings</Subscription>
            //Anything you pass between opening and closing curly braces goes as childern. It can be anything react component, simple text, list, nested html.

            //Dynamically
            <Subscription name={this.state.page[0].name} number={this.state.page[0].number}></Subscription>

            <button onClick={this.switchNameHandler}></button> //Dont pass () after function name, as we are passing this as refreence,
            //if we pass () it will get executed on load and we only want to get it executed on click
        </div>
    );
  }
}



////-------------------------------------------------React Hooks----------------------------------------
////This is functional hook
////import React, { useState} from 'react'; //Hooks state with 'use' and there are couple of hooks avaiable.

//// it is a functional component hence created a function
//const App = props => {
//    //useState() //It exactly returns two elements always. First elements we get is object of current state 
//    //and second element is function that allow us to update the state
//    //We can use array desturcturing to keep arrays (not compulsory)

//    //Now how to pass second element(setSubscriptionState) which should be a function,
//    //for this we will be creating function within a function which is allowed in javascript

//    //this is not required to call as we are in function and not class

//    const [subscriptionState, setSubscriptionState] = useState({
//        page: [
//            { name: "Subscription", number: "1" },
//            { name: "subscription with settings", number: "2" }
//        ],
//        someOtherState: "Other state"
//    });

//    switchNameHandler = () => {
//        setSubscriptionState({
//            page: [
//                { name: "new page", number: "1" },
//                { name: "subscription with settings", number: "2" }
//           ],
//            Otherstate: subscriptionState.someOtherState //Use this will ensure all old things will come in new
//        })
//    }
//    //In hook, it replaces the old with new hence not merging and someOtherState will get removed. 
//    //This is big difference between state and hooks hence pass everything in old and than change as needed
//    //This can also be done by setting hook multiple times which is allowed

//    //i.e create another hook const
//    const [otherState, setOtherState] = useState('Other state');
//    //and i am not calling any function to set any new value so old value will reamin as it is and now we have two const.

//    return (
//        <div>
//            //Dynamically use hook
//            <Subscription name={subscriptionState.page[0].name} number={subscriptionState.page[0].number}></Subscription>

//            <button onClick={switchNameHandler}></button> //Dont pass () after function name, as we are passing this as refreence,
//        //if we pass () it will get executed on load and we only want to get it executed on click
//        </div>
//    );
//}