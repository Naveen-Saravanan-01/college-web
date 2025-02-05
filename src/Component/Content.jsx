import { FaTrashAlt } from 'react-icons/fa';

const Content = ({items,handleCheck,handleDelete}) => {

    
   

    return (
        <main className='content' >

            {items.length ? (

            <ul >
                {
                    items.map((item)=>(
                        <li  className='item' key={item.id}>
                            <input type="checkbox"
                            checked={item.checked} 
                            onChange={()=>handleCheck(item.id)}/>

                            <label htmlFor="">{item.item}</label>

                            <FaTrashAlt onClick={()=>handleDelete(item.id)}/>

                        </li>
                    ))
                }

            </ul>

             ) : ( <p >Your list is empty</p>)}

            
        </main>
    )
}

export default Content