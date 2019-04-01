import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      currentIndex: 0
    }
  }
  componentDidMount(){
    this.setState({
      images: carouselData
    })
  }

  leftClick = () => {
    let newIndex = this.state.currentIndex > 0 
      ? this.state.currentIndex - 1
      : this.state.images.length - 1
    
    this.setState({currentIndex: newIndex})
  }

  rightClick = () => {
    let newIndex = this.state.currentIndex < this.state.images.length - 1
      ? this.state.currentIndex + 1
      : 0
    
    this.setState({currentIndex: newIndex})
  }

  selectedImage = () => {
    return <img alt="majestic view" src={this.state.images[this.state.currentIndex]} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}