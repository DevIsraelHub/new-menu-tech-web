// MapComponent.js
import { useMediaQuery } from 'react-responsive';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Image from 'next/image';

const markers = [
  {
    position: [34.052235, -118.243683],
    title: 'Location 1',
    subtle: 'lorem ipsum dolor sit amet, consectetur adipising wlit.',
    image: '/1.png'
  },
  {
    position: [33.9748, -118.3356],
    title: 'Location 2',
    subtle: 'lorem ipsum dolor sit amet, consectetur adipising wlit.',
    image: '/2.png'
  },
  {
    position: [34.0211, -118.3965],
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
      className={`${isMobile ? 'h-[200px]' : 'h-[500px]'} border-4 border-body z-10`}
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
