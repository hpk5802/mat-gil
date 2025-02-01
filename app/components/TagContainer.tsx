import { PropsWithChildren } from 'react';

function TagContainer({ children }: PropsWithChildren) {
  return (
    <div className="">
      <div className="hide-scroll flex flex-nowrap touch-pan-x gap-x-2 overflow-x-scroll scroll-">
        {children}
      </div>
    </div>
  );
}

export default TagContainer;
