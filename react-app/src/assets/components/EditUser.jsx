import React from 'react'
// import styles from './contacts.module.css';
import styles from './EditUser.module.css';



function EditUser({setShowEdit,id,name,lastName,email,phoneNumber,contact,setContact,contacts,setContacts}) {
   
    console.log(contact)


    const changeHandeler = (event) => {
      const { name, value } = event.target;
      setContact((contact) => ({...contact,[name]: value}));
    };
  return (
    <>
     <div className={styles.form}>
     <input type="text" placeholder='First Name' name='name'value={name} onChange={changeHandeler}/>
     <input type="text" placeholder='Last Name' name='lastName' value={lastName} onChange={changeHandeler}/>
     <input type="email" placeholder='Email' name='email' value={email} onChange={changeHandeler}/>
     <input type="number" placeholder='phone Number'  name='phoneNumber' value={phoneNumber} onChange={changeHandeler}/>
     <button onClick={()=>setShowEdit(false)}>Confirm</button>
     </div>
    </>
  )
}

export default EditUser

