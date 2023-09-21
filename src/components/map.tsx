import { useState } from 'react';
import GoogleMapReact from 'google-map-react'
import { FireLocationMarker } from './icons/FireLocationMarker';
import { IcebergLocationMarker } from './icons/IcebergLocationMarker';
import { SevereStormLocationMarker } from './icons/SevereStormLocationMarker';
import { VolcanoLocationMarker } from './icons/VolcanoLocationMarker';


type Center  = {
  lat: number
  lng: number
};


interface Props {
    eventData: any
    centerPoint: Center
    zoom: number

}

export default function map({eventData}: Props) {
  const [locationInfo, setLocationInfo] = useState(null);
    // Set default location
    const center  = {
         lat: 37.774,
         lng: -122.4351,
    };

const zoom =  1;

const centerPoint: Center =  {
  lat: 37.774,
  lng: -122.4351,
};

const markers = eventData.map((ev: any) => {
    // Wildfire markers
    if (ev.categories[0].id === 8) {
      return (
        <FireLocationMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
      );
     // Severe Storm markers
     } else if (ev.categories[0].id === 10) {
       return (
         <SevereStormLocationMarker
           lat={ev.geometries[0].coordinates[1]}
           lng={ev.geometries[0].coordinates[0]}
           onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
         />
       );
     // Iceberg markers
     } else if (ev.categories[0].id === 15) {
       return (
         <IcebergLocationMarker
           lat={ev.geometries[0].coordinates[1]}
           lng={ev.geometries[0].coordinates[0]}
           onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
         />
       );
      // Volcano Marker (Note 'Dukono Volcanoes throw an error from API)
       } else if (
         ev.categories[0].id === 12 &&
       ev.title !== "Dukono Volcano, Indonesia"
     ) {
       return (
         <VolcanoLocationMarker
           lat={ev.geometries[0].coordinates[1]}
           lng={ev.geometries[0].coordinates[0]}
           onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
         />
       );
     } else {
       return null;
     }
  });
  
  return (
    <div className="map">
       <GoogleMapReact
          bootstrapURLKeys={{
            key: "", //API_KEY
          }}
          defaultCenter={ centerPoint }
          defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
    </div>
  )
}
