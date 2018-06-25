import React, { Component } from 'react';
// import { GoogleMap, GoogleMapLoader } from 'react-google-maps';

export default class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return (
      <div ref="map"></div>
    )
  }
}

// export default(propts) => {
//   return (
//     <GoogleMapLoader
//       containerElement={ <div style={{height: '100%'}}></div> }
//       googleMapElement={
//         <GoogleMap defaultZoom={12} defaultCenter={{ lat:props.lat, lon:props.lon}} />
//       }
//     />
//   );
// }
