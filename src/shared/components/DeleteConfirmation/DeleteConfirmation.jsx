import React from 'react'
import deletImg from "../../../assets/images/delet.png"
export default function DeleteConfirmation({deleteItem,name}) {
  return (
    <div className='text-center p-3'>
      <img src={deletImg} alt=''></img>
      <h4 className='my-2'>Delete This{name}{deleteItem}?</h4>
      <h6>are you sure you want to delete this item ? if you are sure just click on delete it</h6>
      
    </div>
  )
}
