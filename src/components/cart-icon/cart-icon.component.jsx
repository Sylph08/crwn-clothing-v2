import './cart-icon.styles.jsx';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles.jsx';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    const { cartCount } = useContext(CartContext)

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;