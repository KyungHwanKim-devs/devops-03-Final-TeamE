import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { GetUser } from "../../api/user_api";
import { useGetOrdersByCompany } from "../../query/order";

const DashBoardContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 40px;
  background-color: #0f3479;
  height: 100px;
`;

const MenuName = styled.div`
  color: #fbfeff;
  margin-left: 60px;
  font-size: larger;
  font-weight: bold;
`;

const UserName = styled.div`
  color: #fbfeff;
  font-weight: bold;
  margin-right: 60px;
  font-size: larger;
`;

const FirstContainer = styled.div`
  margin: -50px 40px 10px;
  display: flex;
`;

const StatTitle = styled.div`
  color: gray;
`;

const First1 = styled.div`
  flex: 0.2;
  background-color: #fbfeff;
  border-radius: 10px;
  padding: 10px;
  margin-right: 10px;
  height: 18vh;
`;
const First2 = styled.div`
  flex: 0.2;
  background-color: #fbfeff;
  border-radius: 10px;
  padding: 10px;
  margin-right: 10px;
`;
const First3 = styled.div`
  flex: 0.2;
  background-color: #fbfeff;
  border-radius: 10px;
  padding: 10px;
  margin-right: 10px;
`;
const First4 = styled.div`
  flex: 0.2;
  background-color: #fbfeff;
  border-radius: 10px;
  padding: 10px;
  margin-right: 10px;
`;
const First5 = styled.div`
  flex: 0.2;
  background-color: #fbfeff;
  border-radius: 10px;
  padding: 10px;
`;

const SecondContainer = styled.div`
  display: flex;
  height: 70vh;
  margin: 0px 40px 20px;
`;

const SecondLeft = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin-right: 10px;
`;

const SecondTopLeft = styled.div`
  flex: 0.5;
  background-color: #fbfeff;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;
const SecondSecondLeft = styled.div`
  flex: 0.5;
  background-color: #fbfeff;
  border-radius: 10px;
  padding: 10px;
`;

const SecondRight = styled.div`
  flex: 0.5;
  background-color: #fbfeff;
  border-radius: 10px;
  padding: 10px;
`;

export default function DashBoard() {
  const { data: userData } = useQuery(["user"], () => GetUser(22));
  const user = useMemo(() => userData || [], [userData]);

  const { data: ordersData, isLoading } = useGetOrdersByCompany(user.companyId);
  const orders = useMemo(() => ordersData || [], [ordersData]);

  return (
    <DashBoardContainer>
      <TopContainer>
        <MenuName>대시보드</MenuName>
        <UserName>유저이름</UserName>
      </TopContainer>
      <FirstContainer>
        {isLoading || (
          <First1>
            <StatTitle>각종 주문량</StatTitle>
            <div>전체 주문량 : {orders.length}</div>
          </First1>
        )}

        <First2>
          <StatTitle>일별 판매량</StatTitle>
          <div>전체 주문량 : {orders.length}</div>
        </First2>
        <First3>
          <StatTitle>카테고리별 판매량</StatTitle>
          <div>전체 주문량 : {orders.length}</div>
        </First3>
        <First4>
          <StatTitle>카테고리별 판매량</StatTitle>
          <div>전체 주문량 : {orders.length}</div>
        </First4>
        <First5>
          <StatTitle>카테고리별 판매량</StatTitle>
          <div>전체 주문량 : {orders.length}</div>
        </First5>
      </FirstContainer>
      <SecondContainer>
        <SecondLeft>
          <SecondTopLeft>
            <StatTitle>가장 많이 주문한 손님</StatTitle>
            <div>그래프</div>
          </SecondTopLeft>
          <SecondSecondLeft>
            <StatTitle>가장 많이 주문한 손님</StatTitle>
            <div>그래프</div>
          </SecondSecondLeft>
        </SecondLeft>
        <SecondRight>
          <StatTitle>가장 많이 주문된 상품</StatTitle>
          <div>1~5순위</div>
        </SecondRight>
      </SecondContainer>
    </DashBoardContainer>
  );
}
