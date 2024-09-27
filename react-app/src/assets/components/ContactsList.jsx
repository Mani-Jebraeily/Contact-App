import { useState } from "react"
import ContactItem from "./ContactItem"
import styles from "./ContactsList.module.css"
function ContactsList({contacts, deleteHandeler ,setContacts ,contact,setContact,contacts2,setContacts2,ShowEdit,setShowEdit}) {
 const [select,setSelect]=useState(false)
 const [search,setSearch]=useState("")
 const searchHandeler=()=>{
  for (let i = 0; i < contacts.length; i++) {
    if(search ){
      const newContact=contacts.filter(contacts=>contacts.phoneNumber.toLowerCase().includes(search))
      setContacts(newContact)
    }else{
      setSearch(" ")
      setContacts(contacts2)
    }
  }
 }

  return (  
    <div className={styles.container}>
      <h3>Contacts List</h3>
      {contacts.length ?(
        <ul className={styles.contacts} key={96}>
          {!ShowEdit&&<>
              {/* <button className={styles.deletIcon} onClick={deleteContactHandeler} key="deleteGButton" >❌</button> */}
              <button className={styles.searchtIcon} onClick={searchHandeler} key="deleteGButton2">🔍</button>
              <input type="number"  className={styles.search} placeholder="Search Contacts Phone Number" key="deleteGButton4" value={search} onChange={(event)=>setSearch(event.target.value.toLowerCase().trim())}/>
              </>
          }
  
        {contacts.map((contact)=>(
          <>
        <ContactItem key={contact.id} data={contact} deleteHandeler={deleteHandeler} select={select} setSelect={setSelect} setContacts={setContacts} contacts={contacts} ShowEdit={ShowEdit} setShowEdit={setShowEdit} contact={contact} setContact={setContact}/>
        </>
        ))}
      </ul>)
      :
      <p className={styles.message}> No Contacts Yet! </p> }

      </div>
  )
}

export default ContactsList