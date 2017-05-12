import React from 'react'
import { render } from 'react-dom'
//import ReactDOM from 'react-dom';
import App from './App'

/*Meteor.startup(() => {
  render(<App />, document.getElementById("render-target")); //target
});*/
//Returns a reference to the element by its ID; the ID is a string which can be used to uniquely identify the element, found in the HTML id attribute.
//so this returns a reference
//render-target is the target so <App /> is what's being sent to the target

//console.log("hello testing regular js") //this doesn't do anything so I'm guessing it needs a render
/*class test extends React.Component{
render(){
  return( //returns dom representation of component
    <h1> hey </h1>
  );
}
}*/
//pass data into components using props
//ReactDOM.render(
render(
  <App cat={5} txt="this is a prop" />,
  document.getElementById('root')
);
