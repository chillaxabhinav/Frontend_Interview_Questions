import { useState } from "react";

import "./comment.css";

const Comment = (props) => {
  const { items = [], handleAddComment, text, id } = props;

  const [showInput, setShowInput] = useState(false);
  const [expand, setExpand] = useState(false);

  const handleAddInputComment = (e) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput((prev) => !prev);
  };

  const handleAddCommentComp = (e) => {
    if (e.keyCode !== 13 || !e.target.value) return;
    handleAddComment(id, e.target.value);
    setShowInput(false);
  };

  return (
    <div className="comment_container">
      <div className="comment" onClick={() => setExpand((prev) => !prev)}>
        <div key={id}>{text}</div>
        <div>
          <button onClick={(e) => handleAddInputComment(e)}>Reply</button>
        </div>
      </div>
      <div
        className="comment_replies"
        style={{
          display: expand ? "flex" : "none",
        }}
      >
        {showInput && (
          <input
            className="new_comment"
            onKeyDown={(e) => handleAddCommentComp(e)}
            onBlur={() => setShowInput(false)}
            autoFocus
          />
        )}
        {items.map((item) => {
          return (
            <Comment
              items={item.items}
              handleAddComment={handleAddComment}
              text={item.text}
              id={item.id}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Comment;
