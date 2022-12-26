import React from 'react'
import { useState } from 'react'
import {myContact} from './myContacts'

export default function Contacts() {
  const [myContacts, setMyContacts] = useState(myContact)

  const [inputs, setInputs] = useState({
    id: 0,
    name: "",
    phone_number: "",
    email: ""
  })

  const [show, setShow] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setMyContacts([...myContacts, inputs])
  }

  return (
    <div className='tab'>
      <div className='row'>
        <h1>Contacts</h1>
        {!show ? <button className='add' onClick={() => setShow(!show)}>Add Contact</button> : <button className='hide' onClick={() => setShow(!show)}>Hide Add Contact</button>}
      </div>

      {!show ? null : <div>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" placeholder="Enter Contact's Name" onChange={(e) => {setInputs({id: myContacts[myContacts.length - 1].id + 1}); setInputs(prevState => ({ ...prevState, name: e.target.value })) }} />
          <br />
          <label>Phone Number</label>
          <input type="text" placeholder="Enter Contact's Phone Number" onChange={(e) => { setInputs(prevState => ({ ...prevState, phone_number: e.target.value })) }} />
          <br />
          <label>Email</label>
          <input type="text" placeholder="Enter Contact's Email" onChange={(e) => { setInputs(prevState => ({ ...prevState, email: e.target.value })) }} />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>}
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
          {myContacts.map(contact => {
            return (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.phone_number}</td>
                <td>{contact.email}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}