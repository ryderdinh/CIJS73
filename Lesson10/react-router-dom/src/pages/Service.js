import { Link, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Test from '../components/Test';

const Service = () => {
  return (
    <div>
      <Layout>
        Service
        <Link to={'test'}>Switch to Test</Link>
        
        <Routes>
          <Route path='/test' element={<Test />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default Service;
