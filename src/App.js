import React, { Component } from 'react';
import './App.css';
import {Button,Image,Pager} from 'react-bootstrap'

class App extends Component {
  
  state = {showPlaceList:true,
           noOfSpots:100,
           bookingConfirmed:false
          }
  
  
  handleChildClick(e){
    this.setState({showPlaceList:false})
    e.preventDefault();
  }
  handleChildParkingClick(){
    var spotsavail = this.state.noOfSpots;
    spotsavail = spotsavail - 1 ;
    this.setState({showPlaceList:true,noOfSpots:spotsavail,bookingConfirmed:true},function(){
    });
  }

  loadHomescreen(){
    this.setState(
      {
        bookingConfirmed:false
      }
    )
  }
  
      render() {
        var style = {color:"white", fontFamily:'FontAwesome'};
          if (!this.state.showPlaceList || this.state.bookingConfirmed) {
            style.display = 'none'
          }
        
          const stylefooter = { };
          if(!this.state.bookingConfirmed){
            stylefooter.display = 'none'
          }

        return (
      <div>
          <h2 style={style}> Select the area where you are searching for a space:</h2>
          {this.state.showPlaceList && !this.state.bookingConfirmed? <PlacesList handleClick={this.handleChildClick.bind(this)}/>:null}
          {(!this.state.showPlaceList && !this.state.bookingConfirmed)? <ParkingSpot   updatedprops = {this.state.noOfSpots} handleParkingClick={this.handleChildParkingClick.bind(this)}></ParkingSpot>:null}
          {this.state.bookingConfirmed ? <ParkingSuccess loadScreen={this.loadHomescreen.bind(this)}/> : null}
        </div>
    );
  }
}

class PlacesList extends React.Component{
  
  render(){ 

  return(    
    <div>
           <div className="well" >
                      <Button bsStyle="primary" onClick={(e) => this.props.handleClick(e)} bsSize="large" block>
                        Anna Nagar
                      </Button>
                      <Button bsSize="large" block>
                        T Nagar
                        </Button>
                      <Button bsSize="large" block>
                          Adayar
                      </Button>
                    </div>
      </div>
  );
}
}

class ParkingSpot extends React.Component{
  
  render(){
    var style = {color:"white", fontFamily:'FontAwesome', marginBottom:'100px'};
    return(
      <div>
        <h2 style={style}> No of Parking spots available:{this.props.updatedprops}</h2>
        <Button bsStyle="primary"  bsSize="large" active onClick= {() => this.props.handleParkingClick()}>
        Book a spot
        </Button>
     </div>
     
    );
  }
}

class ParkingSuccess extends React.Component{
  
  render(){
    
    var imgclass = {class:"center"};
    return(
      
      <div>
      <h2 className="heading2" style={{color:"white", marginBottom:'100px', fontStyle:'bold'}}> Thanks your booking is confirmed</h2>
      <p style={{color:"white",marginBottom:'50px'}}> 
        Please scan the below barcode in the reader while entering
      </p>
      <Image src="./images/barcode.jpg" responsive alt="barcode.jpg" bsClass="imgclass" /> 
      <Pager>
        <Pager.Item href="#" onClick={()=> this.props.loadScreen()}>Make another booking</Pager.Item>{' '}
      </Pager>;
      </div> 
    );
  }
}
export default App;
