import { useState } from "react";
import Comment from "./comment";
import { commentsData } from "./commentsData";

import useTraverseTree from "./useTraverseTree";

import "./App.css";

export default function App() {
  const [commentTree, setCommentTree] = useState(commentsData);
  const [commentText, setCommentText] = useState("");
  const { addComment } = useTraverseTree();

  const handleAddComment = (parentId, text) => {
    const newTree = addComment(commentTree, null, parentId, text);
    setCommentTree(structuredClone(newTree));
    setCommentText("");
  };

  return (
    <div className="App">
      <h3>Comment Section</h3>
      <div className="input_comment">
        <input
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button
          onClick={() => {
            if (commentText !== null) {
              handleAddComment(null, commentText);
            }
          }}
        >
          comment
        </button>
      </div>
      <div>
        {commentTree.map((comment) => {
          return (
            <Comment
              items={comment.items}
              handleAddComment={handleAddComment}
              text={comment.text}
              id={comment.id}
              key={comment.id}
            />
          );
        })}
      </div>
    </div>
  );
}
