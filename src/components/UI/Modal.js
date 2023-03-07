
import { Fragment } from 'react'
import { createPortal } from 'react-dom'
import Card from './Card'
import classes from './ErrorModal.module.css'

const Backdrop=props=>{
   return <div onClick={props.onClick} className={classes.backdrop}></div>
}
const ModalOverlay=props=>{
   return <Card className={classes.modal}> {props.children}</Card>
}
const Modal=props=>{
const rootPorted=document.getElementById('modalRevenue')
return (
    <Fragment>
        {createPortal(<Backdrop onClick={props.onClick}></Backdrop>, rootPorted)}
        {createPortal(<ModalOverlay> {props.children} </ModalOverlay>, rootPorted)}
    </Fragment>
)

}

export default Modal