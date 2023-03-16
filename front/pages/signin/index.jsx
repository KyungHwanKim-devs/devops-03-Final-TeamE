import { input } from "aws-amplify";
import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useRouter } from "next/navigation";

export default function Signin() {
  const auth = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const executeSignIn = async (event) => {
    event.preventDefault();
    console.log("로그인 실행");
    const result = await auth.signIn(username, password);
    if (result.success) {
      router.push("/");
    } else {
      alert(result.message);
    }
  };
  return (
    <div>
      <form noValidate onSubmit={executeSignIn}>
        <input
          type="text"
          placeholder="UserID"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
