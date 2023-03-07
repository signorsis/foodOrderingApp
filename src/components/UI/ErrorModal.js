import classes from './ErrorModal.module.css'
import Card from './Card/Card'
import Button from './Button/Button'
import React from 'react'
import ReactDOM from 'react-dom'

const Backdrop=(props)=>{
  return <div className={classes.backdrop} onClick={props.onClick}> </div>
};
const Modal=(props)=>{
  return(<Card className={classes.modal}>
    <header className={classes.header}>
    <h2 >
      {props.title}
    </h2>
    </header>
    <div className={classes.content}>
      {props.message}
    </div>
    <footer className={classes.actions}>
     <Button onClick={props.showForm}>Okay</Button>
    </footer>
</Card>)
}
const ErrorModal =(props)=>{
  return( <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.accessFormHandler}/>, document.getElementById('backdrop')
      )}
       {ReactDOM.createPortal(
        <Modal title="AN AUTHORIZED USER" message="password is not correct"  showForm={props.accessFormHandler}/>, document.getElementById('modal')
      )}
</React.Fragment>
  )

}

export default ErrorModal