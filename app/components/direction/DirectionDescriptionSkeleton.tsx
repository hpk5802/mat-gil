function DirectionDescriptionSkeleton() {
  return (
    <div className="group mb-2 mt-2 grid grid-cols-2 gap-2" aria-hidden="true">
      <div className="flex flex-col">
        <div className="flex items-center gap-0.5 text-md text-gray-300">
          <div className="skeleton-rounded h-3 w-3" />
          <div className="skeleton-rounded h-4 w-14" />
        </div>
        <div className="skeleton-rounded mt-1 h-5 w-full" />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-0.5 text-md text-gray-300">
          <div className="skeleton-rounded h-3 w-3" />
          <div className="skeleton-rounded h-4 w-14" />
        </div>
        <div className="skeleton-rounded mt-1 h-5 w-full" />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-0.5 text-md text-gray-300">
          <div className="skeleton-rounded h-3 w-3" />
          <div className="skeleton-rounded h-4 w-14" />
        </div>
        <div className="skeleton-rounded mt-1 h-5 w-full" />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-0.5 text-md text-gray-300">
          <div className="skeleton-rounded h-3 w-3" />
          <div className="skeleton-rounded h-4 w-14" />
        </div>
        <div className="skeleton-rounded mt-1 h-5 w-full" />
      </div>
    </div>
  );
}

export default DirectionDescriptionSkeleton;
