const CartWidget =  (items) => {
    items = 1;
    return  (
        <li className="contenedorCarrito"><img src="https://img.icons8.com/ios/50/shopping-cart--v1.png" alt="icono carrito de compras" className="cartIcon"/><span className='items'>{items}</span></li>
    )
}
export default CartWidget 