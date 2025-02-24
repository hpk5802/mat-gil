function MapSkeleton() {
  return (
    <div
      className={`skeleton absolute inset-0 h-full w-full`}
      aria-live="polite"
      aria-busy="true"
      aria-label="지도 로딩 중"
    />
  );
}

export default MapSkeleton;
