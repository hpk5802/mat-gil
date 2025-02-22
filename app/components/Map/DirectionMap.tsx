'use client';

import { Coordinates } from '@/app/types/directions';
import { useEffect, useRef } from 'react';

interface DirectionMapProps {
  path: Coordinates[];
}

function DirectionMap({ path }: DirectionMapProps) {
  const mapRef = useRef<naver.maps.Map | null>(null);

  const initMap = (path: Coordinates[]) => {
    const map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(path[0][1], path[0][0]),
      zoom: 14,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
        style: naver.maps.ZoomControlStyle.SMALL,
      },
    });

    new naver.maps.Polyline({
      map,
      path: path.map(([lng, lat]) => new naver.maps.LatLng(lat, lng)),
      strokeColor: '#16C47F',
      strokeWeight: 6,
      strokeOpacity: 0.8,
      strokeStyle: 'solid',
    });

    mapRef.current = map;
  };

  useEffect(() => {
    if (path.length > 0) {
      initMap(path);
    }
    return () => {
      if (mapRef.current) {
        mapRef.current.destroy();
      }
    };
  }, [path]);

  return <div id="map" style={{ width: '100%', height: '400px' }} />;
}

export default DirectionMap;
