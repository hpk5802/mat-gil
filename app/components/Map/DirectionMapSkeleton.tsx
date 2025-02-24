function DirectionMapSkeleton() {
  return (
    <div
      className="skeleton h-[350px] w-full"
      aria-live="polite"
      aria-busy="true"
      aria-label="경로 로딩 중"
    />
  );
}

export default DirectionMapSkeleton;
