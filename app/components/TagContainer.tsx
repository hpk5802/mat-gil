import { PropsWithChildren } from 'react';

function TagContainer({ children }: PropsWithChildren) {
  return (
    <div className="flex gap-2 max-w-[75rem] mx-auto px-3 md:px-5 mt-3">
      {/* <div className=""> */}
      <div className="hide-scroll flex flex-nowrap touch-pan-x gap-x-2 overflow-x-scroll">
        {children}
      </div>
    </div>
  );
}

export default TagContainer;
