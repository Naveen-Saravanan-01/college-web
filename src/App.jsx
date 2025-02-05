import React, { useRef } from 'react'
import Header from './Component/Header'
import Content from './Component/Content'
import Footer from './Component/Footer'
import { useState } from 'react';
import AddItems from './Component/AddItems';


const App = () => {

  const [items,setItems]=useState(JSON.parse(localStorage.getItem('todo_list')))

const handleCheck=(id)=>{

    const listItems=items.map((item)=>(item.id===id? {...item,checked:!item.checked} : item))

    setItems(listItems)

    localStorage.setItem("todo_list",JSON.stringify(listItems))
}

const handleDelete=(id)=>{
    const listItems=items.filter((item)=>(item.id!=id))
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
}

const addItem=(newItem)=>{
  const id=items.length?items[items.length-1].id+1:1;

  const addNewList={id,item:newItem,checked:false}

  const listItems=[...items,addNewList]

  setItems(listItems)

  localStorage.setItem("todo_list",JSON.stringify(listItems))

}

const [newItem,setNewItem]=useState('')

const inputRef=useRef(null)

const handleSubmit=(e)=>{

  e.preventDefault();

if(!newItem)
  return;

  

  addItem(newItem);

  setNewItem('')

  inputRef.current.focus();



}




  return (
    <div className='app'>
      
      <Header />
      <AddItems 

          
          handleSubmit={handleSubmit}
          newItem={newItem}
          setNewItem={setNewItem}
          addItem={addItem}
          inputRef={inputRef}
      
      />

      <Content 

        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      
      />

      <Footer />
      


      
    </div>
  )
}

export default App