import React from 'react';

function Answers({ answer }) {
  return (
    <div>
      <div>A: {answer.body}</div>
      <div>
        <span>by user, date |</span>
        <span> Helpful? Yes (2) |</span>
        <span> Report</span>
      </div>
    </div>
  );
}
export default Answers;
