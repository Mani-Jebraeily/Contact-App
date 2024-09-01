import React from 'react'
import styles from "./ContactItem.module.css"
function ContactItem({data:{id,name,lastName,email,phoneNumber},
 deleteHandeler,
}) {
  return (
        <li className={styles.item}>
            <p>
            {name} {lastName} 
            </p>
            <p>
              <span>📭</span> {email}
              </p>

              <p>
                <span>📞</span> {phoneNumber}
              </p>

              <button onClick={()=> deleteHandeler(id)}>🗑️</button>
            </li>
  )
}

export default ContactItem