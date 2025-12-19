import React from 'react'
import noData from "../../../assets/images/noData.png"
export default function DeleteConfirmation({deleteItem,name}) {
  return (
    <div className='text-center p-3'>
      <img src={noData} alt=''></img>
      <h4 className='my-2'>Delete This{name}{deleteItem}?</h4>
      <h6>are you sure you want to delete this item ? if you are sure just click on delete it</h6>
      
    </div>
  )
}
