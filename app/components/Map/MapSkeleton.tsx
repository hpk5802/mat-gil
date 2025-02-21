function MapSkeleton() {
  return (
    <div className="absolute inset-0 h-full w-full animate-pulse bg-card-background">
      <span className="absolute bottom-[0.4375rem] left-[0.625rem] z-10 h-3 w-[4.875rem] rounded-sm bg-zinc-500" />
      <span className="absolute bottom-[0.4375rem] right-[0.625rem] z-10 h-3 w-[4.875rem] rounded-sm bg-zinc-500" />
    </div>
  );
}

export default MapSkeleton;
