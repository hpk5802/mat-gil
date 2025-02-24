function SkeletonImage() {
  return (
    <div
      className="skeleton h-full w-full"
      aria-live="polite"
      aria-busy="true"
      aria-label="이미지 로딩 중"
      role="img"
    />
  );
}

export default SkeletonImage;
