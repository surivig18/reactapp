import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button,PageHeader,Image,Pager} from 'react-bootstrap'
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
        var style = {color:"white"};
          if (!this.state.showPlaceList || this.state.bookingConfirmed) {
            style.display = 'none'
          }
        
          const stylefooter = { };
          if(!this.state.bookingConfirmed){
            stylefooter.display = 'none'
          }

        return (
      <div className="App">
        <div className="App-header">
          <h1>
          Welcome to your parking app
        </h1>  
        </div >
          <h3 style={style}> Select the area where you are searching for a space:</h3>
          {this.state.showPlaceList && !this.state.bookingConfirmed? <PlacesList handleClick={this.handleChildClick.bind(this)}/>:null}
          {(!this.state.showPlaceList && !this.state.bookingConfirmed)? <ParkingSpot   updatedprops = {this.state.noOfSpots} handleParkingClick={this.handleChildParkingClick.bind(this)}></ParkingSpot>:null}
          {this.state.bookingConfirmed ? <ParkingSuccess loadScreen={this.loadHomescreen.bind(this)}/> : null}
        </div>
    );
  }
}

class PlacesList extends App{
  
  render(){ 
    const wellStyles = { maxWidth: 400, margin: '100px 100px 100px 450px' };

  return(    
    <div>
           <div className="well" style={wellStyles}>
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

class ParkingSpot extends App{
  constructor(props){
    super(props);
    }

  render(){
    const headingstyle = {color:"white", marginBottom:'100px'}

    return(
      <div>
        <h3 style={headingstyle}>No of Parking spots available:{this.props.updatedprops}</h3>
        <Button bsStyle="primary"  bsSize="large" active onClick= {() => this.props.handleParkingClick()}>
        Book a spot
        </Button>
     </div>
     
    );
  }
}

class ParkingSuccess extends App{
  
  render(){
    
    return(
      <div>
      <h2 className="heading2" style={{color:"white", marginBottom:'100px', fontStyle:'bold'}}> Thanks your booking is confirmed</h2>
      <p style={{color:"white",marginBottom:'50px'}}> 
        Please scan the below barcode in the reader while entering
      </p>
      <Image src="https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=100x100" alt="barcode.png"/> 
      <Pager>
        <Pager.Item href="#" onClick={()=> this.props.loadScreen()}>Make another booking</Pager.Item>{' '}
      </Pager>;
      </div> 
    );
  }
}
export default App;
