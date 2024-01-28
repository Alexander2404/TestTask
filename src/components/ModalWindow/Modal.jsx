import style from '../ModalWindow/Modal.module.css';
export default function Modal({isOpen, onClose, user}){
    return(<>
    {isOpen&&(
        <div className={style.modal}>
          
            <div className={style.modalContent}>
            <div className={style.modalHeader}>
                  <h3>Information</h3>
                  <div className={style.close} onClick={()=> onClose()}>×</div>
            </div>
            <div className={style.userInfo}>
                <p><span className={style.userInfoHeaders}>FIO: </span> {user.firstName} {user.lastName} {user.maidenName}</p>
                <p><span className={style.userInfoHeaders}>Age: </span> {user.age}</p>
                <p><span className={style.userInfoHeaders}>Address: </span> {user.address.city} {user.address.address}   </p>
                <p><span className={style.userInfoHeaders}>Height: </span> {user.height}</p>
                <p><span className={style.userInfoHeaders}>Weight: </span> {user.weight} </p>
                <p><span className={style.userInfoHeaders}>Phone: </span>{user.phone} </p>
                <p><span className={style.userInfoHeaders}>Email: </span> {user.email} </p>
            </div>
            </div>
        </div>) }</>
    )
}