function Category({
  keyValue,
  category,
}: {
  keyValue: string;
  category: string | string[];
}) {
  return (
    <div
      className="flex gap-1 mb-1 text-xs md:text-sm text-gray-300 overflow-hidden"
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
