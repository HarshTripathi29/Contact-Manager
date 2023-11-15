import React,{useState} from 'react';
import './App.css';

const App = () => {
  const[formData, setFormData] = useState({
    name : "",
    email : ""
  })
  const[contact, setContact] = useState([])

  const handleChangeInput=(e)=>{
    const{name, value }= e.target;
    setFormData((prevData)=>({
      ...prevData,
      [name] : value,
    }))
  }

  const handleSubmit =(event)=>{
    event.preventDefault();
    setContact((oldContacts)=>{
      return [...oldContacts, formData]
    })
    setFormData({
      name : "",
      email : ""
    })
  } 

  const deleteContact=(id)=>{
    setContact((oldContacts)=>{
      return contact.filter((arrElement, index)=>{
        return index!=id;
      })
    })
  }
  return (
    <div>
      <h1 className='heading'>Contact Manager</h1>

      <div className='inputField'>
        <form onSubmit={handleSubmit}>
        <div className='name'>
          <label>Enter name</label>
          <input
           type='text' 
           name='name'
           value={formData.name}
           onChange={handleChangeInput}
           />
        </div>
        <div className='email'>
          <label>Enter email</label>
          <input 
          type='text'
          name='email'
          value={formData.email} 
          onChange={handleChangeInput}/>
        </div>
        <button type="submit">Add Contact</button>
        </form>
      </div>

      <h1>Contact List</h1>
      <div className='outputField'>
        {
          contact.map((element, index)=>{
            return(
              <ul>
                <li>
                {element.name} : {element.email}
                <button className='delete' onClick={()=>{deleteContact(index)}}>-</button>
                </li>
              </ul>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
