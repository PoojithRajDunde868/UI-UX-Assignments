import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const current = location.pathname;

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/dashboard', label: 'Dashboard', matchStart: true },
    { path: '/login', label: 'Login' }
  ];

  return (
    <nav>
      {links.map(({ path, label, matchStart }, i) => (
        <span key={i}>
          <Link
            to={path}
            style={{
              fontWeight: matchStart
                ? current.startsWith(path)
                  ? 'bold'
                  : 'normal'
                : current === path
                ? 'bold'
                : 'normal'
            }}
          >
            {label}
          </Link>
          {i < links.length - 1 && ' | '}
        </span>
      ))}
    </nav>
  );
};

export default Navbar;
