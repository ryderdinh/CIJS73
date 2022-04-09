import React from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import Layout from '../components/Layout';

function Product() {
  const [search, setSearch] = useSearchParams();
  console.log(search.get('productId'));

  return (
    <div>
      {
        <Layout>
          <ul>
            <li>
              <Link to={'product1'}>Product1</Link>
            </li>
          </ul>
          Products
          <br />
          {'search: ' + search.get('productId')}
          <Outlet />
        </Layout>
      }
    </div>
  );
}

export default Product;
