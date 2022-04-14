import styled from 'styled-components';

const Box = {
  Main: styled.div`
  display: flex;
  justify-content: center;
  font-size: 150%;
  `,
  Container: styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  `,
  InnerCol: styled.div`
  flexDirection: column;
  `,
  ReviewSum: styled.div`
  display: flex;
  flex-grow: 1;
  height: 0px;
  margin: 1em;
  border: 0px solid rgb(75, 21, 163);
  `,
  Star: styled.img`
  height: 10px;
  width: 10px
  `,
  Rating: styled.h1`
  padding: 0px;
  margin: 0px;
  padding-right: 10px;
  color: rgb(75, 21, 163);
  `,
  Bar: styled.div`
  width: 90%;
  background-image: url(./assets/bar.webp);
  background-repeat: no-repeat;
  background-size: 100% 50%;
  `,
  Triangle: styled.img`
  height: 15px;
  width: 15px;
  `,
  CharText: styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding-bottom: 15px;
  margin: 0px;
  `,
  Review: styled.div`
  flexDirection: column;
  border-bottom: double;
  padding-bottom: 2%;
  padding-top: 1%;
  width: 100%;
  `,
  ReviewHeader: styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  `,
  BottomButton: styled.div`
  width: 50px;
  height: 10px;
  border: 2px;
  `,
  Modal: styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0,0,0,0.25);
  z-index: 90;
  `,
  ModalContent: styled.div`
  position: fixed;
  background: white;
  width: 50vw;
  height: 80vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1%;
  z-index: 100;
  overflow-y: scroll
  `,
  Close: styled.div`
  display: flex;
  justify-content: flex-end;
  width: 48vw;
  `,
  CenterInfo: styled.div`
  display: flex;
  justify-content: center;
  width: 50vw;
  `,
  Info: styled.div`
  flexDirection: column;
  height: 40vh
  overflow-y: scroll
  `,
  StarRating: styled.img`
  height: 30px;
  width: 30px;
  `,
  StarCheck: styled.img`
  height: 15px;
  width: 15px;
  padding-left: 1%;
  vertical-align: middle;
  `,
  Progress: styled.progress`
  background-color: #ECECEC;
  `,
  ReviewSort: styled.div`
  padding-bottom: 4%;
  border-bottom: double;
  `,
  MainButtons: styled.button`
  width: 40%;
  margin-top: 5%;
  margin-right: 30px;
  border-radius: 4px;
  justify-content: center;
  padding: 18px;
  box-shadow: 0 5px 5px rgba(17, 16, 62, 0.1);
  font-size: 20px;
  font-weight: 300;
  color: black;
  background-color: #fff;
  border: 2px solid #4b15a3;
  border-radius: 3px;
  cursor: pointer;
  transition-duration: 0.4s;

  &:hover {
  box-shadow: 0 0 5px 5px rgba(17, 16, 62, 0.15);
  background: #4b15a3;
  color: white;
  }

  &:focus {
  background: #fff;
  color: #4b15a3;
  }`,
  Clicked: styled.b`
  color: #9c82b2;
  font-size: 80%;
  `,
  NotClicked: styled.div`
  color: #595858;
  font-size: 80%;
  `,
};

export default Box;
