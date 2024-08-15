import "./List.css";

function List({ item }) {
  // const { item } = prop;
  return (
    <li className="list-item">
      <span>{item.isim} </span>
      <span>{item.tutar} TL</span>
    </li>
  );
}

export default List;
