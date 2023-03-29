import React, { useState } from "react";
import Form from "../form";
import ReplayedComments from "./ReplayedComments";
import SingleComment from "./SingleComment";

const PostComments = ({ post }) => {
  const [value, setValue] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(value);
    setValue("");
  };

  const renderComments = () => {
    return post.comments.map((comment) => {
      return (
        !comment.responseTo &&
        comment.status === 2 && (
          <React.Fragment key={comment._id}>
            <SingleComment comment={comment} />
            <ReplayedComments
              comments={post.comments}
              parentCommentId={comment._id}
            />
          </React.Fragment>
        )
      );
    });
  };

  return (
    <div>
      <h3 className='font-medium text-md text-gray-600 py-7 '>Comments</h3>
      <div className='w-full flex flex-col pb-8 '>{renderComments()}</div>

      {/* new comment form */}
      <div>
        <h3 className='font-medium text-lg text-gray-700'>
          Leave a new comment
        </h3>
        <Form value={value} setValue={setValue} onSubmit={onSubmitHandler} />
      </div>
    </div>
  );
};

export default PostComments;
