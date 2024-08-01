// MapComponent.js
import { useMediaQuery } from 'react-responsive';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Image from 'next/image';

const markers = [
  {
    position: [6.5244, 3.3792], // Coordinates for Lagos, Nigeria
    title: 'Location 1',
    subtle: 'lorem ipsum dolor sit amet, consectetur adipising wlit.',
    image: '/1.png'
  },
  {
    position: [9.0820, 8.6753], // Coordinates for Abuja, Nigeria
    title: 'Location 2',
    subtle: 'lorem ipsum dolor sit amet, consectetur adipising wlit.',
    image: '/2.png'
  },
  {
    position: [7.3775, 3.9470], // Coordinates for Ibadan, Nigeria
    title: 'Location 3',
    subtle: 'lorem ipsum dolor sit amet, consectetur adipising wlit.',
    image: '/3.png'
  },
];

const customIcon = new Icon({
  iconUrl: '/pin-solid.svg',
  iconSize: [40, 40],
});

const MapComponent = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <MapContainer
      center={[34.052235, -118.243683]}
      zoom={isMobile ? 10 : 12}
      className={`${isMobile ? 'h-[200px]' : 'h-[500px]'} border z-10`}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position as [number, number]} icon={customIcon}>
          <Popup>
            <div className='flex gap-x-[30px]'>
              <div className='flex-1'>
                <h3>{marker.title}</h3>
                <p className='leading-snug'>{marker.subtle}</p>
              </div>
              <div className='flex-1'>
                <Image src={marker.image} width={130} height={160} alt='' />
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
