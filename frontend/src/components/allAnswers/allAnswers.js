import React from "react";
import AnswerContainer from "../commentAnswer/answerContainer";

export default function AllComments({comment}) {
  const {answers, _id} = comment;
  return (
    <div>
        {answers && answers.map(item => 
            <AnswerContainer answer={item} key={item._id} commentId={_id} />
        )}
    </div>
  );
}