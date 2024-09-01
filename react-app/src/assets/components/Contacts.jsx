import React, { useState } from 'react'
import {v4} from "uuid"
import ContactsList from './ContactsList';
import inputs from '../../constants/inputs';
import styles from './contacts.module.css';
function Contacts() {
  // const [formData,setFormData]=useState({
  //   username:""
  //   email
  // })
  const [contacts,setContacts]= useState([])
  const [alert,setAlert]=useState("")
  const [contact,setContact]= useState({
    id:"",
    name:"",
    lastName:"",
    email:"",
    phoneNumber:""
  });

  const changeHandler= event=>{
    const name=event.target.name
    const value=event.target.value
    setContact((contact)=>({...contact,[name]: value}))
  };
  const addHandeler= ()=>{
    
    if(!contact.name||!contact.lastName||!contact.email||!contact.phoneNumber){
      setAlert("Please enter valid data!")
      return

    }
    setAlert("")
    const newContact={...contact, id: v4()}

    setContacts((contacts)=>[...contacts,newContact])
    setContact({
      name:"",
      lastName:"",
      email:"",
      phoneNumber:""

    })
  }
  const deleteHandeler= id=>{
    const newContacts=contacts.filter((contact)=>contact.id !== id);
    setContacts(newContacts)
  }

  
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {inputs.map((input,index)=>(
        <input 
        key={index}
        type={input.type} 
        placeholder={input.placeholder} 
        name={input.name} 
        value={contact[input.name]} 
        onChange={changeHandler}
        />       
        ))}

        <button onClick={addHandeler}>Add Contact</button>
      </div>
      <div className={styles.alert}>{alert&& <p> {alert}</p>}</div>
      <ContactsList contacts={contacts} deleteHandeler={deleteHandeler}/>
    </div>
  )
}

export default Contacts