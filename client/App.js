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
/*  render(){
    let txt = this.props.txt //let used to declare a variable that is limited in scope within the area it is defined
    return <h1>{txt}</h1>
  }
}

App.propTypes = {
  txt: React.PropTypes.string, //want txt to be of type string
  cat: React.PropTypes.number
}*/
  /*constructor(){
    super();
    this.state = { //the this here is to differentiate it from parent class. Want to refer to THIS particular instance
      txt: 'this is text'
    }
  }
  update (e){
    this.setState({txt: e.target.value}) //the this here refers to the state in the constructor
  }*/
  /*render(){
    return ( //the this in here refers to the update function
      <div>
        <input type="text" onChange={this.update.bind(this)}/>
        <h1>{this.state.txt}</h1>
      </div>
    )
  }
}*/
/*render(){
  return ( //the this in here refers to the update function
    <div>
      <h1>{this.state.txt}</h1>
      <Widget update={this.update.bind(this)} />
      <Widget update={this.update.bind(this)} />
      <Widget update={this.update.bind(this)} />
    </div>
  ) //order of h1 and widget etc changes order displayed
} //all update and none take priority
}*/

//const Widget = (props) =>
//  <input type="text" onChange={props.update}/>
  render(){
    return <Button>  React </Button> //want to access React
  }
}

const Button = (props) => <button>{props.children}</button> //this gets React stateless so uses props?
//in this case Button is prop so the props.children are any of the elements text etc enclosed within the Button tags
/*class Heart extends React.Component {
  render(){
    return <span>&hearts;</span>
  }
}*/

export default App //this shit does not print and i don't know why this is from video four

//okay yay this worked
//seemingly this gets rendered and sent to main.js
//then the html file is what does the actual displaying
