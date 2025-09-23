import React from "react";
import { useRouter } from "next/navigation";

const AdminRoute = ({ children }) => {
  const router = useRouter();
  const isAuthenticated = false; // Replace with actual auth logic

  React.useEffect(() => {
    if (!isAuthenticated) {
      router.push("/admin/frontend/Login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null; // or a loading spinner
  }

  return <>{children}</>;
};

export default AdminRoute;
