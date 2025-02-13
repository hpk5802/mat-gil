'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import MapSkeleton from './MapSkeleton';

interface MapProps {
  address: string;
}

function Map({ address }: MapProps) {
  const mapRef = useRef<naver.maps.Map | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const initMap = (lat: number, lng: number) => {
    const map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(lat, lng),
      zoom: 20,
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

        initMap(lat, lng);
      },
    );

    return () => {
      if (mapRef.current) {
        mapRef.current.destroy();
      }
    };
  }, [address]);

  return (
    <>
      <Script
        strategy="beforeInteractive"
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&submodules=geocoder`}
        onReady={() => setIsLoading(false)}
      />
      <div className="relative w-full h-[20rem] md:h-[25rem] rounded-lg overflow-hidden">
        {isLoading && <MapSkeleton />}
        <div id="map" style={{ width: '100%', height: '400px' }} />
      </div>
    </>
  );
}

export default Map;
