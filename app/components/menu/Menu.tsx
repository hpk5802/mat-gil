import IconArrowRight from '@/app/components/icons/IconArrowRight';

function Menu({ menu }: { menu: string | string[] }) {
  return (
    <div>
      <h3>영상 속 소개 메뉴</h3>
      <ul>
        {menu instanceof Array ? (
          menu.map((food) => (
            <li key={food} className="flex items-center gap-1">
              <IconArrowRight className="h-4 w-4" />
              <span tabIndex={0}>{food}</span>
            </li>
          ))
        ) : (
          <li className="flex items-center gap-1">
            <IconArrowRight className="h-4 w-4" />
            <span tabIndex={0}>{menu}</span>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Menu;
