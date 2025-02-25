const handleGeolocationError = (error: GeolocationPositionError) => {
  if (error.code === 1) {
    alert(
      '위치 조회 실패: 위치 권한이 거부되었습니다. 설정에서 권한을 허용해주세요.',
    );
  } else if (error.code === 2) {
    alert('위치 조회 실패: 위치 정보를 사용할 수 없습니다.');
  } else if (error.code === 3) {
    alert('위치 조회 실패: 위치 정보를 가져오는 데 시간이 초과되었습니다.');
  }
};

export default handleGeolocationError;
