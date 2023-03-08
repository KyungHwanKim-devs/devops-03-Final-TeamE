import styled from "@emotion/styled";

const TrandContainer = styled.div`
  background-color: #4b4b4b80;
  border: none;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  margin: 20px 40px;
`;

const TrandTitle = styled.div`
  color: #ffffff;
  font-weight: bold;
  font-size: x-large;
`;
const TrandContent = styled.div`
  padding: 20px 0px;
`;
const TopTrandContent = styled.div`
  color: #767676;
  font-size: medium;
  padding: 2px 0px;
`;
const BottomTrandContent = styled.div`
  font-size: larger;
  color: #ffffff;
  font-weight: bold;
  padding: 2px 0px;
`;

export default function Trand() {
  return (
    <TrandContainer>
      <TrandTitle>Trands for you</TrandTitle>
      <TrandContent>
        <TopTrandContent>Tranding in DevOps</TopTrandContent>
        <BottomTrandContent>중꺽마</BottomTrandContent>
      </TrandContent>
    </TrandContainer>
  );
}
