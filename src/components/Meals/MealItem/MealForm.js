import { useContext, useState } from "react";
import CartContext from "../../../Store/cart-context";
import Input from "../../UI/Input";
import classes from "./MealForm.module.css";

const MealForm = (props) => {
   const ctx=useContext(CartContext);
   ctx.totalAmount=2;
   const [amount, setAmount]=useState(1);
   const [idd,setIdd]=useState();
  const formSubmitHandler = (event) => {
    event.preventDefault();
    
    console.log(ctx.totalAmount);

    //on submit we will pass amount and id
  };

  const onAmountChangeHandler=(event)=>{
  
    setAmount(event.target.value);
   
  }
  console.log(amount);

  return (
    <div className={classes.form}>
      <form onSubmit={formSubmitHandler}>
        <Input
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: 1,
            max: 5,
            step: 1,
            defaultValue: 1,
            onChange: onAmountChangeHandler
          }}
          label="Amount"
        />
        <button type="submit" > +Add </button>
      </form>
    </div>
  );
};

export default MealForm;
