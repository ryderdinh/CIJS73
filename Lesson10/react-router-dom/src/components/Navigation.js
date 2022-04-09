import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to={'/'}>Home </Link>
      <Link to={'/hello'}>Hello </Link>
      <Link to={'/service'}>Service</Link>
      <Link to={'/products'}>Products</Link>
      <Link to={'/abc'}>???</Link>
    </nav>
  );
};

export default Navigation;
