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
      <h3 className='font-medium text-gray-600 text-md py-7 '>Comments</h3>
      <div className='flex flex-col w-full pb-8 '>{renderComments()}</div>

      {/* new comment form */}
      <div className='p-4 mb-8 bg-white rounded-xl '>
        <h3 className='text-lg font-medium text-gray-700'>
          Leave a new comment
        </h3>
        <Form value={value} setValue={setValue} onSubmit={onSubmitHandler} />
      </div>
    </div>
  );
};

export default PostComments;
