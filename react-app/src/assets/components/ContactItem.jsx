import React, { useState } from 'react'
import styles from "./ContactItem.module.css"
import ModalConfirm from './ModalConfirm'
import EditUser from './EditUser'

function ContactItem({data:{id,name,lastName,email,phoneNumber}, deleteHandeler,select,setSelect,setContacts,contacts,ShowEdit,setShowEdit,contact,setContact}) {
  const [showModal,setShowModal]=useState(false)
  // const [ShowEdit,setShowEdit]=useState(false)
  const selectHandeler=(event)=>{
    setSelect((select)=>!select)
    console.log(event.target.value)
  }
  const selectHandeler2=()=>{
    setSelect((select)=>!select)

    if(select){
      for (let i = 0; i < contacts.length; i++){
        console.log(contacts.id)
      }

    }
    


  }

   
  return (
    <>
    {ShowEdit?

    <EditUser  setShowEdit={setShowEdit} id={id} name={name} lastName={lastName} email={email} phoneNumber={phoneNumber} contacts={contacts} setContacts={setContacts} contact={contact} setContact={setContact}/>
    
    :

           <li className={styles.item}>
           <input type="checkbox"  value={select} onClick={selectHandeler2}/ >
             <p>
             {name} {lastName} 
             </p>
             <p>
               <span>📭</span> {email}
               </p>
 
               <p>
                 <span>📞</span> {phoneNumber}
               </p>
 
               <button onClick={()=>setShowModal(true)}>🗑️</button>
               <button onClick={()=>setShowEdit(true)}>✏️</button>
             </li>
    }
 
            {showModal&& <ModalConfirm setShowModal={setShowModal} showModal={showModal} deleteHandeler={deleteHandeler} id={id}/>}
      </>
  )
}

export default ContactItem

{/* 
<li className={styles.item}>
          <input type="checkbox"  value={select} onClick={selectHandeler2}/ >
            <p>
            {name} {lastName} 
            </p>
            <p>
              <span>📭</span> {email}
              </p>

              <p>
                <span>📞</span> {phoneNumber}
              </p>

              <button onClick={()=>setShowModal(true)}>🗑️</button>
              <button onClick={()=>setShowEdit(true)}>✏️</button>
              {console.log(contacts)}
            </li> */}

