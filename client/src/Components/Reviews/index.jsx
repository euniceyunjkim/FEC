import React from 'react';
import styled from 'styled-components';

let Reviews = ({}) => {
  const Container = styled.div`
  display: flex;
  background: lime
`;
  const InnerCol = styled.div`
  flexDirection: column;

  `;
  const ReviewSum = styled.h1`
  flex-grow: 1;
  height: 100px;
  margin: 1em;
  border: 2px solid palevioletred;
  color: palevioletred;
  `;
//display: 'inline-flex';
//flexDirection: 'row';

  return (
    <div>Reviews
      <Container>
        <InnerCol>
          <ReviewSum>review summary
            <p>*****</p>
          </ReviewSum>
          <p>some other thing</p>
          <ul>
            <ol>5stars</ol>
            <ol>4stars</ol>
            <ol>3stars</ol>
            <ol>2stars</ol>
            <ol>1stars</ol>
          </ul>
          <h3>characteristics</h3>
        </InnerCol>
    <InnerCol>
    <h2>amount of reviews and how you want to sort</h2>
        <InnerCol>
          <h1>big boi box for reviews</h1>
          <p>Container for each review</p>
          <p>Container for each review</p>
        </InnerCol>


    <InnerCol>
      <button onClick={() => alert('shtoop it its not ready yet')}>more reviews</button>
      <button onClick={() => alert('shtoop it its not ready yet')}>add reviews +</button>
    </InnerCol>


    </InnerCol>
      </Container>
    </div>

  )

}

export default Reviews;
