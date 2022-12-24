import React from 'react'
import { useState } from 'react'

export default function Contacts() {
  const [myContacts, setMyContacts] = useState([
    {
      id: 1,
      name: "Douaa",
      phone_number: "0779678196",
      email: "douaa@gmain.com"
    },

    {
      id: 2,
      name: "Batoul",
      phone_number: "0779678196",
      email: "batoul@gmain.com"
    },
  ])

  const [show, setShow] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <div className='tab'>
      <div className='row'>
        <h1>Contacts</h1>
        <button className='add' onClick={() => setShow(!show)}>Add Contact</button> 
      </div>

      {!show ? null : <div>
        <form action={onSubmit}>
          <label>Name</label>
          <input type="text" placeholder="Enter Contact's Name" />
          <br />
          <label>Phone Number</label>
          <input type="text" placeholder="Enter Contact's Phone Number" />
          <br />
          <label>Email</label>
          <input type="text" placeholder="Enter Contact's Email" />
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