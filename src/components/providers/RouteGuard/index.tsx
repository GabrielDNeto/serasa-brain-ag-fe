import { AuthStatusEnum } from "@/@types/auth";
import { APP_ROUTES } from "@/config/routes/constants";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";

export default function RouteGuard() {
  const { authStatus } = useAuth();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (authStatus === AuthStatusEnum.UNNAUTHORIZED) {
      navigate(APP_ROUTES.public.signin);
    } else if (authStatus === AuthStatusEnum.AUTHORIZED) {
      if (pathname.includes(APP_ROUTES.public.signin)) {
        navigate(APP_ROUTES.private.dashboard);
      }
    }
  }, [authStatus, navigate, pathname]);

  return <Outlet />;
}
