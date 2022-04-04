import React from 'react';

function Answers({ answer }) {
  return (
    <div>
      <div>A: {answer.body}</div>
      <div>by user, data | Helpful? Yes (2) | Report</div>
    </div>
  );
}
export default Answers;
