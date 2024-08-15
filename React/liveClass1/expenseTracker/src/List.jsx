function List({ item }) {
  // const { item } = prop;
  return (
    <li>
      <span>{item.isim} </span>
      <span>{item.tutar} TL</span>
    </li>
  );
}

export default List;
