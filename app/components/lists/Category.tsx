function Category({
  keyValue,
  category,
}: {
  keyValue: string;
  category: string | string[];
}) {
  return (
    <div
      className="mb-1 flex gap-1 overflow-hidden text-xs text-gray-300 md:text-sm"
      aria-label={`음식 카테고리: ${
        category instanceof Array ? category.join(', ') : category
      }`}
    >
      {category instanceof Array ? (
        category.map((item) => (
          <span
            key={`${keyValue}_${item}`}
            className="flex-shrink-0"
            role="presentation" // 보조 기기에 읽히지 않도록 설정
          >
            #{item}
          </span>
        ))
      ) : (
        <span role="presentation">#{category}</span>
      )}
    </div>
  );
}

export default Category;
