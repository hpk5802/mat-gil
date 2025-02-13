function MapSkeleton() {
  return (
    <div className="w-full h-full absolute inset-0 bg-card-background animate-pulse">
      <span className="w-[4.875rem] h-3 bg-zinc-500 absolute bottom-[0.4375rem] left-[0.625rem] rounded-sm z-10" />
      <span className="w-[4.875rem] h-3 bg-zinc-500 absolute bottom-[0.4375rem] right-[0.625rem] rounded-sm z-10" />
    </div>
  );
}

export default MapSkeleton;
