import React, { SetStateAction } from 'react'
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
  width: 70%;
  height: 40em;
  margin: auto;
  margin-bottom:4vh;
`;

const Map = () =>{
  const centre = {  
    lat: -37.419793,
    lng: 145.112841
  };
  const zoom = 10;
  
  const [map, setMap] = React.useState<any>();
  const [maps, setMaps] = React.useState<any>();
  
  const handleApiLoaded = (maps: { map: any; maps: any; ref: Element | null; }) => {
    // console.log()
    setMap(maps.map);
    setMaps(maps.maps);
  }
  React.useEffect(() => {
    if(map && maps){
      // const _map = new maps.Map(document.getElementById("map"), {
      //   center: { lat: 20.773, lng: -156.01 },
      //   zoom: 12,
      //   mapId: 'a3384a239780ae94',
      // });
    
      // Add a feature layer for localities.
//       var heatmap = new maps.visualization.HeatmapLayer({
//         data: getPoints(),
//         map: map,
//       });
    
// //       function getPoints() {
// //       return [
// //         new maps.LatLng(-37.419793, 145.112841),
// //       ];};
// // heatmap.setMap(map);
      // const featureLayer = map.getFeatureLayer("LOCALITY");
      // const featureStyleOptions: any = {
      //   strokeColor: '#810FCB',
      //   strokeOpacity: 1.0,
      //   strokeWeight: 3.0,
      //   fillColor: '#810FCB',
      //   fillOpacity: 0.5
      // };
      
      // // Apply the style to a single boundary.
      // featureLayer.style = (options: any) => {
      //   if (options.feature.displayName === "Hana") {
      //     return featureStyleOptions;
      //   }
      // };
    }
  }, [map, maps]);
  
  return(
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY ?? ''}}
        defaultCenter={centre}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={handleApiLoaded}
        mapId='a3384a239780ae94'
      >
        
      </GoogleMapReact>
    </Wrapper>
  )
}

export default Map;
