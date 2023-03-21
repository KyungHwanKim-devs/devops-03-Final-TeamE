import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export default function ConfirmUser() {
  const auth = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const executeConfirm = async (event) => {
    event.preventDefault();
    try {
      const res = await auth.confirmSignUp(email, code);
      console.log("Confirm 성공", res);
    } catch (error) {
      console.log("Confirm 실패", error);
    } finally {
      alert("회원가입이 성공했습니다. 로그인해 주세요");
      router.push("/");
    }
  };
  return (
    <div>
      <form noValidate onSubmit={executeConfirm}>
        <input
          type="text"
          placeholder="UserID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
