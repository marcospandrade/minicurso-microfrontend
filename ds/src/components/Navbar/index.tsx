import "./styles.css";

interface MapRoute {
  nomeRota: string;
  pathRota: string;
  onClickAction: () => void;
}

interface NavbarProps {
  mapRoutes: MapRoute[];
}

export function Navbar({ mapRoutes }: NavbarProps) {
  return (
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        {mapRoutes.map((route) => (
          <li key={route.pathRota} className="nav-item">
            <a
              onClick={route.onClickAction}
              className={
                window.location.pathname === route.pathRota
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              {route.nomeRota}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
