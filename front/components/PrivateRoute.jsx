import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/navigation";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  return isAuthenticated ? <>{children}</> : router.push("signin");
};

export default PrivateRoute;
