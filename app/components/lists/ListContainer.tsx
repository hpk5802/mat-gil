import Card from './Card';

function ListContainer({ lists }) {
  return (
    <div>
      <div className="flex flex-wrap gap-[3%] gap-y-4 w-[640px] mx-auto">
        <Card lists={lists} />
      </div>
    </div>
  );
}

export default ListContainer;
