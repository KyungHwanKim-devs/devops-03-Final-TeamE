import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Home from "../icons/Home";
import HashTag from "../icons/HashTag";
import { useAuth } from "../../hooks/useAuth";

const SidebarContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MenuButton = styled.div`
  color: #ffffff;
  font-size: xx-large;
  margin: 25px 50px;
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const TweetButton = styled.button`
  border: none;
  font-size: xx-large;
  width: 90%;
  padding: 20px 60px;
  border-radius: 50px;
  margin: 10px auto;
  background-color: rgb(29, 155, 240);
  color: #ffffff;
  cursor: pointer;
`;

export default function Sidebar() {
  const router = useRouter();
  const auth = useAuth();

  return (
    <SidebarContainer>
      <Link href="/" style={{ textDecoration: "none" }}>
        <MenuButton>
          <Image src="/Twitter-logo.png" width={50} height={40} alt="Logo" />
        </MenuButton>
      </Link>
      <Link href="/" style={{ textDecoration: "none" }}>
        <MenuButton>
          <Home /> <div style={{ marginLeft: "15px" }}>HOME </div>
        </MenuButton>
      </Link>
      <Link href="/" style={{ textDecoration: "none" }}>
        <MenuButton>
          <HashTag /> <div style={{ marginLeft: "15px" }}>EXPLORE </div>
        </MenuButton>
      </Link>
      <Link
        href="/"
        style={{
          textDecoration: "none",
          display: "flex",
          justifyContent: "center",
        }}
      ></Link>
      {auth.isAuthenticated && <TweetButton>Tweet</TweetButton>}
      {auth.isAuthenticated && (
        <TweetButton onClick={() => auth.signOut()}>Logout</TweetButton>
      )}
      {!auth.isAuthenticated &&
        router.asPath !== "/signin" &&
        router.asPath !== "/signup" && (
          <TweetButton onClick={() => router.push("/signin")}>
            Login
          </TweetButton>
        )}
      {!auth.isAuthenticated &&
        router.asPath !== "/signin" &&
        router.asPath !== "/signup" && (
          <TweetButton onClick={() => router.push("/signup")}>
            SignUp
          </TweetButton>
        )}
    </SidebarContainer>
  );
}
