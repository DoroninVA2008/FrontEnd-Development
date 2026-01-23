import React from 'react';

interface CartItem {
    name: string;
    description: string;
    id: string | number;
    price: number;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    discountCode: string;
    taxRate: number;
}

interface CartProps {
    Item?: CartItem; 
}

function Cart({ Item }: CartProps) {
  const [cart, setCart] = React.useState<CartState>({
    items: Item ? [Item] : [],
    discountCode: '',
    taxRate: 20
  });
  
  const addItem = (product: Omit<CartItem, 'quantity'>) => {
    const newItem: CartItem = {
      ...product,
      quantity: 1
    };
    
    setCart(prev => ({
      ...prev,
      items: [...prev.items, newItem]
    }));
  };
  
  const removeItem = (itemId: string | number) => {
    setCart(prev => ({
      ...prev,
      items: prev.items.filter(cartItem => cartItem.id !== itemId)
    }));
  };
  
  const updateQuantity = (itemId: string | number, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(itemId);
      return;
    }
    
    setCart(prev => ({
      ...prev,
      items: prev.items.map(cartItem => 
        cartItem.id === itemId ? { ...cartItem, quantity: newQuantity } : cartItem
      )
    }));
  };
  
  const applyDiscount = (code: string) => {
    const validCodes = ['SUMMER10', 'WINTER20'];
    const discount = validCodes.includes(code) ? 
      (code === 'SUMMER10' ? 10 : 20) : 0;
    
    setCart(prev => ({ ...prev, discountCode: code }));
    return discount;
  };
  
  const subtotal = cart.items.reduce((sum: number, cartItem: CartItem) => 
    sum + (cartItem.price * cartItem.quantity), 0);
  
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
        {cart.items.map(cartItem => (
          <li key={cartItem.id}>
            {cartItem.name} - {cartItem.price} руб. × {cartItem.quantity}
            <button onClick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}>+</button>
            <button onClick={() => updateQuantity(cartItem.id, cartItem.quantity - 1)}>-</button>
            <button onClick={() => removeItem(cartItem.id)}>Удалить</button>
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