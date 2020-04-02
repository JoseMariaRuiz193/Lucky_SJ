import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function MapSimple (props) {

    const mapStyles = { width: '100%', height: '100%'};

      // Podremos buscar veterinarios, protectoras y peluquerías caninas.


    return( 

    <Map google={props.google} zoom={12} style={mapStyles} initialCenter={{ lat: 	40.4165000, lng: -3.7025600}}>
      <Marker position={{ lat: 40.4165000, lng: -3.7025600}}/>
    </Map>
)
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDlkz9VhQYBz5pXVADIa2J9oC1j73g14_Y'
  })(MapSimple);