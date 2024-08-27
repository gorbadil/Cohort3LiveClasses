import BoardItem from "./BoardItem";
import { boardItem } from "../data/boardData.js";

function Playing({ handleClick }) {
  return (
    <div className="board">
      <div className="pads">
        {boardItem.map((item) => (
          <BoardItem key={item.name} item={item} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default Playing;
