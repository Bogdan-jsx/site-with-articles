import React from "react";
import CommentContainer from "../comment/commentContainer";

export default function AllComments({comments}) {
  return (
    <div>
        {comments && comments.map(item => 
            <CommentContainer comment={item} key={item._id}/>
        )}
    </div>
  );
}