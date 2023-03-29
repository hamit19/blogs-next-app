import React from "react";
import SingleComment from "./SingleComment";

const ReplayedComments = ({ comments, parentCommentId }) => {
  return comments.map((comment) => {
    return (
      parentCommentId === comment.responseTo && (
        <div className='ml-3' key={comment._id}>
          <SingleComment comment={comment} />
          <ReplayedComments comments={comments} parentCommentId={comment._id} />
        </div>
      )
    );
  });
};

export default ReplayedComments;
