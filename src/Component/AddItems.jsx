import React from 'react'
import { FaPlus } from 'react-icons/fa';

const AddItems = ({handleSubmit,newItem,setNewItem,inputRef}) => {
  return (
    <div className='formdiv' >
        <form className='inputform'  onSubmit={handleSubmit}>
            <input 
                type="text" 
                ref={inputRef}
               
                placeholder='Add Item'
                required
                value={newItem}
                onChange={(e)=>setNewItem(e.target.value)}
                autoFocus

                
            />
            <button type='submit'
                   onClick={handleSubmit}><FaPlus /></button>
        </form>
    </div>
  )
}

export default AddItems