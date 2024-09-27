import React from 'react'
import "./ModalDeleteStyle.css"


function ModalConfirm({setShowModal,deleteHandeler,id}) {

  
  return (
    <div>
        <div className='Modal-backdrop'>

            <div className='Modal'>                           
              <button  className='Close-Btn' onClick={()=>setShowModal(false)}>❌</button>
              <h3 className='Text-Modal'>Are You Sure to Delete This User???</h3>
              <button  className='Remove-Btn' onClick={()=> deleteHandeler(id)}>Remove Contact</button>
            </div>
        </div>
    </div>
  )
}

export default ModalConfirm