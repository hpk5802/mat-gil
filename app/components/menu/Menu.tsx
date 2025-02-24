import IconArrowRight from '@/app/components/icons/IconArrowRight';

function Menu({ menu }: { menu: string[] }) {
  return (
    <div>
      <h3>영상 속 소개 메뉴</h3>
      <ul>
        {menu.map((food) => (
          <li key={food} className="flex items-center gap-1">
            <IconArrowRight className="h-4 w-4" />
            <span tabIndex={0}>{food}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
