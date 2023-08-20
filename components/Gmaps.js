import { Component } from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';



class Gmaps extends Component{
  render(){
    const coords = { lat: 33.785565418811956, lng: -118.2157626815023 };
    const MONMOUTH_COUNTY_BOUNDS = {
      north: 40.29,
      
      west: -74.15,
      
    };
  return (
<section className='h-[50vh] max-h-[50vh] overflow-hidden'>
    <div>
        <Map
        
        google = {this.props.google}
        style={{ width:'100%',height:'50vh', }}
        zoom={14}
        initialCenter={{
          lat: 33.785565418811956,
          lng: -118.2157626815023
        }}
        restriction= {{
          latLngBounds: MONMOUTH_COUNTY_BOUNDS,
          strictBounds: true,
        }}
        >
          <Marker
        
          center={coords}
          onMouseover={() => console.log('mouseover')}
          onClick={() => console.log('click')}
          onMouseout={() => console.log('mouseout')}
          strokeColor='transparent'
          strokeOpacity={0}
          strokeWeight={5}
          fillColor='#FF0000'
          fillOpacity={0.2}
          />
        </Map>
        </div>
        </section>
  )
}
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyADaZ17gHP5P7vFvjUajEcJpbvxxBdCoYY"
})(Gmaps)