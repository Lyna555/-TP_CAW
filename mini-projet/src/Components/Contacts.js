import React from 'react'
import { useState } from 'react'
import { MyContact } from './MyContacts'

export default function Contacts() {
  const [myContacts, setMyContacts] = useState(MyContact)

  const [inputs, setInputs] = useState({
    id: 0,
    name: "",
    phone_number: "",
    email: ""
  })

  const [showAdd, setShowAdd] = useState(false)
  const [showTable, setShowTable] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setMyContacts([...myContacts, inputs])
  }

  return (
    <div className='tab'>
      <div className='row'>
        <h1>Contacts</h1>
        <div className='buttons'>
          {!showAdd ? <button className='add' onClick={() => { setShowAdd(!showAdd); setShowTable(false) }}>Create Contact</button> : <button className='hide' onClick={() => setShowAdd(!showAdd)}>Hide Create Contact</button>}
          {!showTable ? <button className='add' onClick={() => { setShowTable(!showTable); setShowAdd(false) }}>Display Contacts</button> : <button className='hide' onClick={() => setShowTable(!showTable)}>Hide Display Contacts</button>}
        </div>
      </div>

      {!showAdd ? null : <div>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" placeholder="Enter Contact's Name" onChange={(e) => { setInputs({ id: myContacts[myContacts.length - 1].id + 1 }); setInputs(prevState => ({ ...prevState, name: e.target.value })) }} />
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

      {!showTable ? null :
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
      }
    </div>
  )
}