'use client';

import { useEffect, useRef, useState } from 'react';
import MapSkeleton from './MapSkeleton';
import useDestinationStore from '@/app/stores/useDestinationStore';

interface MapProps {
  address: string;
}

function Map({ address }: MapProps) {
  const mapRef = useRef<naver.maps.Map | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const setDestinationData = useDestinationStore(
    (state) => state.setDestinationData,
  );

  const initMap = (lat: number, lng: number) => {
    const map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(lat, lng),
      zoom: 20,
      draggable: false,
      pinchZoom: false,
      scrollWheel: false,
      keyboardShortcuts: false,
      disableDoubleTapZoom: true,
      disableDoubleClickZoom: true,
      disableTwoFingerTapZoom: true,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
        style: naver.maps.ZoomControlStyle.SMALL,
        legendDisabled: true,
      },
      minZoom: 14,
      maxZoom: 22,
    });

    new naver.maps.Marker({
      position: new naver.maps.LatLng(lat, lng),
      map: map,
    });

    mapRef.current = map;
  };

  useEffect(() => {
    naver.maps.Service.geocode(
      {
        query: address,
      },
      function (status, response) {
        if (status === naver.maps.Service.Status.ERROR) {
          console.error('지도 정보를 불러오는 중 에러가 발생했습니다.');
        }

        const result = response.v2.addresses[0];
        const lng = Number(result.x);
        const lat = Number(result.y);

        setDestinationData({ longitude: lng, latitude: lat });

        initMap(lat, lng);
        setIsLoading(false);
      },
    );

    return () => {
      if (mapRef.current) {
        mapRef.current.destroy();
      }
    };
  }, [address, setDestinationData]);

  return (
    <div className="relative h-[20rem] w-full overflow-hidden rounded-lg md:h-[25rem]">
      {isLoading && <MapSkeleton />}
      <div
        id="map"
        style={{ width: '100%', height: '400px' }}
        aria-label={`가게 위치: ${address}`}
        aria-hidden={isLoading ? 'true' : 'false'}
      />
    </div>
  );
}

export default Map;
