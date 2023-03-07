import Modal from "../UI/Modal"
import classes from './Cart.module.css'
const Cart=props=>{

    const cartItems=  (<ul  className={classes['cart-items']}> {    [{id:'c1', name: "sushi", amount: 2, price: "20.11"}].map( item=> <li >{item.name}</li>)
} </ul>);
return (
    <Modal onClick={props.setVisiblity}>
        {cartItems}
        <div className={classes.total}>

            <span>Total Amount</span>
            <span>32.11</span>
        </div>

        <div className={classes.actions}> 
            <button className={classes.button} onClick={props.setVisiblity}>Close</button>
            <button  className={classes['button--alt']}>Order</button>
        </div>
    </Modal>
)

}
export default Cart