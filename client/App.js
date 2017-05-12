import React from 'react'

//const App = () => <div>5+3 </div> //does not perform operation
//function takes no parameters and has html components in func definition
//class App extends React.Component {
  //render(){
    //return <h1> actual class </h1> //can give html tag a class BUT class is a keyword, so you have to use <h1 className="blah">
    //return React.createElement('h1',null,'non jsx boi')
    //element is first argument(remember if element starts with a capital it is custom)
    //2nd argument for props
    //3rd can be another element or string rep inner element of tag
    //this is non jsx but equiv
  //}
//} // ^ all this crap works

//const App = () => <h1> stateless and proud </h1>
//stateless func cant have state, duh
//but a class can


class App extends React.Component {
  render(){
    let txt = this.props.txt //let used to declare a variable that is limited in scope within the area it is defined
    return <h1>{txt}</h1>
  }
}

App.propTypes = {
  txt: React.PropTypes.string, //want txt to be of type string
  cat: React.PropTypes.number
}

export default App //this shit does not print and i don't know why this is from video four

//okay yay this worked
//seemingly this gets rendered and sent to main.js
//then the html file is what does the actual displaying
