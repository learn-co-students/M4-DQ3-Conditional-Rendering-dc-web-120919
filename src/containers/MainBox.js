import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
constructor(){ 
  super()
  this.state = {
    detail : <Profile/>
  }
}
currentMenu = (event) => { 
  
  if(event.target.id === "photo"){ 
    this.setState({detail :  <Photos/>})
  }
  else if(event.target.id === "cocktail"){ 
    this.setState({detail : <Cocktails/>})
  }
  else if(event.target.id === "pokemon"){ 
    this.setState({detail : <Pokemon/>})
  }
  else{ 
    this.setState({detail : <Profile/>})
  }
  
}
  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */
    
    const detailsToDisplay = <div>{this.state.detail}</div>
    
    return (
      <div>
        <MenuBar currentState={this.state.detail} currentMenu={this.currentMenu} />
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
