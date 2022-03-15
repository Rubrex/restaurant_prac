import React from "react";
// import dateFormat from "dateFormat";

const LoadComments = (props) => {
  return props.comments.map((comment) => {
    console.log('from loadcommnets', comment);
    return (

      <div key={comment.id} className="load_commnets_parent">
        <div>
          <h5>{comment.author}</h5>
          <p>{comment.comment}</p>
          <p>{comment.date}</p>
        </div>
        <div className="load_commnets_rating">
          <h2>{Math.round(comment.rating)}</h2>
        </div>
      </div>
    );
  });
};

export default LoadComments;
