import React, { useContext, useState } from 'react'
import classes from './Header.module.css'
import mealsImage from '../../Assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
      

    return (
    <React.Fragment>
    
    <header className={classes.header}> 
      <h2> React meals </h2>
      <HeaderCartButton  onClick={props.setVisiblity}/>
    </header> 
    <div className={classes.img}>
       <img  alt="A Tabel full of delicious food" src={mealsImage}/> 
    </div>
    </React.Fragment>
    )
 }   
 export default Header 