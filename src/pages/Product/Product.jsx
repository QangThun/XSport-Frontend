import { useParams } from 'react-router-dom';

export default function Product() {
  const { id } = useParams();

  return (
    <div className="product-page">
      <h1>Product Page</h1>
      <p>Product ID: {id}</p>
    </div>
  );
}
