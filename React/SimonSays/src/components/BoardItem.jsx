function BoardItem({ item, handleClick }) {
  return (
    <div
      id={item.id}
      className={`pad ${item.name}`}
      onClick={handleClick}
    ></div>
  );
}

export default BoardItem;
