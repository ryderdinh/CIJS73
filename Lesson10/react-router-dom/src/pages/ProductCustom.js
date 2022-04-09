import { useParams } from 'react-router-dom';

function ProductCustom() {
  const param = useParams();
  console.log(param);
  return <div>ProductCustom {param.productId}</div>;
}

export default ProductCustom;
