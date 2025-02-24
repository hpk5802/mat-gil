'use client';

import IconArrowRight from '@/app/components/icons/IconArrowRight';
import { useState } from 'react';

function Menu({ menu }: { menu: string[] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleMenu = isExpanded ? menu : menu.slice(0, 3);

  const toggleMenuVisibility = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div>
      <h3 className="text-lg" aria-label="영상에서 소개된 메뉴 목록">
        영상에서 소개된 메뉴
      </h3>
      <ul className="mt-2 flex flex-col gap-1">
        {visibleMenu.map((menu) => (
          <li key={menu} className="flex items-center gap-1">
            <IconArrowRight className="h-4 w-4" />
            <span className="text-md" tabIndex={0}>
              {menu}
            </span>
          </li>
        ))}
      </ul>
      {menu.length > 3 && (
        <button
          type="button"
          className="mt-3 rounded-md bg-emerald-600 px-3 py-1 font-medium"
          onClick={toggleMenuVisibility}
          aria-expanded={isExpanded}
        >
          {isExpanded ? '간략히 보기' : '더 보기'}
        </button>
      )}
    </div>
  );
}

export default Menu;
