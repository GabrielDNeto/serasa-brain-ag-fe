interface IRouteGuard {
  children: React.ReactNode;
}

export default function RouteGuard({ children }: IRouteGuard) {
  return children;
}
