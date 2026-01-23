function ProductList({ products }) {
  const [filter, setFilter] = React.useState('all');
  
  const filteredProducts = filter === 'inStock' 
    ? products.filter(p => p.inStock)
    : products;
  
  const totalPrice = filteredProducts
    .filter(p => p.inStock)
    .reduce((sum, product) => sum + product.price, 0);
  
  const inStockCount = products.filter(p => p.inStock).length;
  
  return (
    <div>
      <h2>Список товаров</h2>
      
      <div>
        <button onClick={() => setFilter('all')}>Все ({products.length})</button>
        <button onClick={() => setFilter('inStock')}>В наличии ({inStockCount})</button>
      </div>
      
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id} style={{ color: product.inStock ? 'black' : 'gray' }}>
            {product.name} - {product.price} руб.
            {!product.inStock && ' (нет в наличии)'}
          </li>
        ))}
      </ul>
      
      <p><strong>Общая стоимость товаров в наличии:</strong> {totalPrice} руб.</p>
    </div>
  );
}