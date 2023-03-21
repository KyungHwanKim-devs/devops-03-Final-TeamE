import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export default function SignUp() {
  const auth = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  // const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");

  const executeSignUp = async (event) => {
    event.preventDefault();
    try {
      const res = await auth.signUp(username, password, email);
      console.log("res", res);
    } catch (error) {
      alert(result.message);
    } finally {
      alert("회원가입이 성공했습니다. 메일을 확인해 주세요.");
      router.push("/confirmuser");
    }
  };
  return (
    <div>
      <form noValidate onSubmit={executeSignUp}>
        <input
          type="text"
          placeholder="UserID"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <input
          type="text"
          placeholder="phone number"
          value={phonenumber}
          onChange={(e) => setPhonenumber(e.target.value)}
        /> */}
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
