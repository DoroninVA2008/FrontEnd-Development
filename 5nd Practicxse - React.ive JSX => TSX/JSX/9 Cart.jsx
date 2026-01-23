function Cart() {
  const [cart, setCart] = React.useState({
    items: [],
    discountCode: '',
    taxRate: 20
  });
  
  const addItem = (product) => {
    setCart(prev => ({
      ...prev,
      items: [...prev.items, { ...product, quantity: 1 }]
    }));
  };
  
  const removeItem = (itemId) => {
    setCart(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== itemId)
    }));
  };
  
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(itemId);
      return;
    }
    
    setCart(prev => ({
      ...prev,
      items: prev.items.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    }));
  };
  
  const applyDiscount = (code) => {
    const validCodes = ['SUMMER10', 'WINTER20'];
    const discount = validCodes.includes(code) ? 
      (code === 'SUMMER10' ? 10 : 20) : 0;
    
    setCart(prev => ({ ...prev, discountCode: code }));
    return discount;
  };
  
  const subtotal = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = cart.discountCode === 'SUMMER10' ? 10 : 
                   cart.discountCode === 'WINTER20' ? 20 : 0;
  const discountAmount = subtotal * (discount / 100);
  const taxAmount = (subtotal - discountAmount) * (cart.taxRate / 100);
  const total = subtotal - discountAmount + taxAmount;
  
  return (
    <div>
      <h2>Корзина покупок</h2>
      
      <div>
        <input
          placeholder="Введите промокод"
          value={cart.discountCode}
          onChange={(e) => applyDiscount(e.target.value)}
        />
      </div>
      
      <ul>
        {cart.items.map(item => (
          <li key={item.id}>
            {item.name} - {item.price} руб. × {item.quantity}
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
            <button onClick={() => removeItem(item.id)}>Удалить</button>
          </li>
        ))}
      </ul>
      
      <div>
        <p>Товары: {subtotal.toFixed(2)} руб.</p>
        <p>Скидка ({discount}%): -{discountAmount.toFixed(2)} руб.</p>
        <p>Налог ({cart.taxRate}%): {taxAmount.toFixed(2)} руб.</p>
        <h3>Итого: {total.toFixed(2)} руб.</h3>
      </div>
    </div>
  );
}