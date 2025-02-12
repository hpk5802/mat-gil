function Category({
  keyValue,
  category,
}: {
  keyValue: string;
  category: string | string[];
}) {
  return (
    <div className="flex gap-1 mb-1 text-xs md:text-sm text-gray-300 overflow-hidden">
      {category instanceof Array ? (
        category.map((item) => (
          <span key={`${keyValue}_${item}`} className="flex-shrink-0">
            #{item}
          </span>
        ))
      ) : (
        <span>#{category}</span>
      )}
    </div>
  );
}

export default Category;
