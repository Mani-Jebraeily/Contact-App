import React, { useState } from 'react'
import {v4} from "uuid"
import ContactsList from './ContactsList';
import inputs from '../../constants/inputs';
import styles from './contacts.module.css';
function Contacts() {
  const [contacts,setContacts]= useState([
    {
      id:1,
      name:"Mani",
      lastName:"Jebraeily",
      email:"mani.jebraeily1382@gmail.com",
      phoneNumber:"09195595961",
      select:false,

    },
    {
      id:2,
      name:"ali",
      lastName:"karimi",
      email:"alikarimi1393@gmail.com",
      phoneNumber:"09105876568",
      select:false,

    },
    {
      id:3,
      name:"reza",
      lastName:"farhadi",
      email:"reza.farhadi9@gmail.com",
      phoneNumber:"09359501234",
      select:false,

    }
  ])
  const [contacts2,setContacts2]= useState([])
  const [alert,setAlert]=useState("")
 const [ShowEdit,setShowEdit]=useState(false)
  const [contact,setContact]= useState({
    id:"",
    name:"",
    lastName:"",
    email:"",
    phoneNumber:"",
    select:false,
  });


  const changeHandler= event=>{
    const name=event.target.name
    const value=event.target.value
    setContact((contact)=>({...contact,[name]: value}))
  };
  const addHandeler= ()=>{

    if(!contact.email.includes("@gmail.com")){
      setAlert("Please Enter Valid Email ")
      return
    }
    

    if(contact.phoneNumber.length!==11){
      setAlert("Please enter valid phone Number!")
      return
    }


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
      phoneNumber:"",
     select:"false",


    })

    setContacts2((contacts2)=>[...contacts2,newContact])
    setContact2({
      name:"",
      lastName:"",
      email:"",
      phoneNumber:"",
      select:"false",


    })
  }
  const deleteHandeler= (id)=>{
    const newContacts=contacts.filter((contact)=>contact.id !== id);
    setContacts(newContacts)
  }


  
  return (
 <>

  {!ShowEdit&&
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
 
    </div>
  
  }
       <ContactsList contacts={contacts} deleteHandeler={deleteHandeler} setContacts={setContacts} 
        contact={contact}
        setContacts2={setContacts2} 
        contacts2={contacts2}
        setShowEdit={setShowEdit}
        setContact={setContact}
        ShowEdit={ShowEdit}
      />

  </>


  )
}

export default Contacts