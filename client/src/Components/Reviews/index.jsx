import React, { useState } from 'react';
import Box from './css/container';
import RenderLeft from './renderLeft';
import RenderRight from './renderRight';

const Reviews = function Reviews() {
  // const { currentProd } = useContext(currentProducts);
  // to know what chatacteristics are being used to judge the current product
  const [characteristics, setCharacteristics] = useState({});
  // to know the amount of reviews
  const [ratingCount, setRatingCount] = useState(0);
  return (
    <Box.Main>
      <Box.Container>
        <Box.InnerCol>
          <Box.ReviewSum>
            <RenderLeft
              ratingCount={ratingCount}
              setRatingCount={(e) => setRatingCount(e)}
              characteristics={characteristics}
              setCharacteristics={(e) => setCharacteristics(e)}
            />
          </Box.ReviewSum>
        </Box.InnerCol>
        <Box.InnerCol>
          <RenderRight
            ratingCount={ratingCount}
            characteristics={characteristics}
          />
        </Box.InnerCol>
      </Box.Container>
    </Box.Main>

  );
};

export default Reviews;
