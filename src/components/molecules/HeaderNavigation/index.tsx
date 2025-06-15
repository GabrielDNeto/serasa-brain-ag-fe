import { APP_ROUTES } from "@/config/routes/constants";
import { Link, useLocation } from "react-router";
import { StyledNav } from "./styles";

const navItems = [
  {
    label: "Dashboard",
    href: APP_ROUTES.private.dashboard,
  },
  {
    label: "Produtores",
    href: APP_ROUTES.private.producers.root,
  },
];

export default function HeaderNavigation() {
  const { pathname } = useLocation();

  return (
    <StyledNav>
      <ul>
        {navItems.map((item) => (
          <li
            key={item.label}
            className={pathname.includes(item.href) ? "active" : ""}
          >
            <Link to={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
}
