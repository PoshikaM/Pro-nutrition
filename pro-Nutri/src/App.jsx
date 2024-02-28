import { Component } from "react";
import FoodBox from "./Components/Foodbox";
import "./App.css"
import foodData from '../resources/FoodData'

class App extends Component{
  constructor(){
    super()
    this.state = {
     foodArr : foodData
    }
  }

render(){
let foodDataArr = this.state.foodArr

const handleInput = (event) => {
  if(event.target.value == ''){
    this.setState({foodArr:foodData})
  }
  let input = event.target.value.toLowerCase()
  let modifiedArr = foodDataArr.filter(function(element){
  let name = element.name
    return(
      name.includes(input)
    )
  })
  this.setState({foodArr : modifiedArr})
}

  return(
    <div className="Container">
      <h3> Search</h3>
      <input type="text" placeholder="Search food" onChange={handleInput}/>
      {

        foodDataArr.map(function(element,index){
        let img = element.img
        let name = element.name
        let calorie = element.cal

      return (
        <div key={index}>
          <FoodBox image={img} name={name} Calorie={calorie} Index={index}/>
        </div>
      )
        })
      }
    </div>
  )
}


}

export default App