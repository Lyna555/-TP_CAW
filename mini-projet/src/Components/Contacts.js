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
  const [search, setSearch] = useState("")
  const [option, setOption] = useState("Alphabetical Order")
  const alphabet_letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  function handleSubmit(e) {
    e.preventDefault()
    setMyContacts([...myContacts, inputs])
    setShowAdd(false)
    setShowTable(true)
  }

  return (
    <div className='tab'>
      <div className='row'>
        <h1>Contacts</h1>
        {!showTable ? null :
          <form className='search'>
            <label>Filter with:</label>
            <select onChange={(e) => { setOption(e.target.value) }}>
              <option>Alphabetical Order</option>
              <option>Name</option>
              <option>Phone Number</option>
              <option>Email</option>
            </select>
            {option === "Name" || option === "Phone Number" || option === "Email" ?
              <input type="search" placeholder='Search...' onChange={(e) => setSearch(e.target.value)} /> :
              <select onChange={(e) => { setSearch(e.target.value) }}>
                <option>Choose a letter</option>
                {alphabet_letter.map(alphabet => <option>{alphabet}</option>)}
              </select>
            }
          </form>
        }
        <div className='buttons'>
          {!showTable ? <button className='add' onClick={() => { setShowTable(!showTable); setShowAdd(false) }}>Display Contacts</button> : <button className='hide' onClick={() => setShowTable(!showTable)}>Hide Display Contacts</button>}
          {!showAdd ? <button className='add' onClick={() => { setShowAdd(!showAdd); setShowTable(false) }}>Create Contact</button> : <button className='hide' onClick={() => setShowAdd(!showAdd)}>Hide Create Contact</button>}
        </div>
      </div>

      {showAdd || showTable ? null :
        <div className='cloud'>
          <p className='main2'>Click on Display Contacts to see your contacts<br></br>or click on Create Contact to add a new contact</p>
        </div>
      }

      {!showAdd ? null :
        <div>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input required type="text" placeholder="Enter Contact's Name" onChange={(e) => { setInputs({ id: myContacts[myContacts.length - 1].id + 1 }); setInputs(prevState => ({ ...prevState, name: e.target.value, phone_number: "", email: "" })) }} />
            <br />
            <label>Phone Number</label>
            <input required type="text" placeholder="Enter Contact's Phone Number" onChange={(e) => { setInputs(prevState => ({ ...prevState, phone_number: e.target.value, email: "" })) }} />
            <br />
            <label>Email</label>
            <input required type="text" placeholder="Enter Contact's Email" onChange={(e) => { setInputs(prevState => ({ ...prevState, email: e.target.value })) }} />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      }

      {
        !showTable ? null :
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
              </tr>
              {myContacts.map(contact => {
                if (search === "" || search === "Choose a letter") {
                  return (
                    <tr key={contact.id}>
                      <td>{contact.name}</td>
                      <td>{contact.phone_number}</td>
                      <td>{contact.email}</td>
                    </tr>
                  )
                } else {
                  if (option === "Name") {
                    if (contact.name.toUpperCase().startsWith(search.toUpperCase())) {
                      return (
                        <tr key={contact.id}>
                          <td>{contact.name}</td>
                          <td>{contact.phone_number}</td>
                          <td>{contact.email}</td>
                        </tr>
                      )
                    }
                  } else if (option === "Phone Number") {
                    if (contact.phone_number.startsWith(search)) {
                      return (
                        <tr key={contact.id}>
                          <td>{contact.name}</td>
                          <td>{contact.phone_number}</td>
                          <td>{contact.email}</td>
                        </tr>
                      )
                    }
                  } else if (option === "Email") {
                    if (contact.email.match(search)) {
                      return (
                        <tr key={contact.id}>
                          <td>{contact.name}</td>
                          <td>{contact.phone_number}</td>
                          <td>{contact.email}</td>
                        </tr>
                      )
                    }
                  } else {
                    if (contact.name.toUpperCase().startsWith(search)) {
                      return (
                        <tr key={contact.id}>
                          <td>{contact.name}</td>
                          <td>{contact.phone_number}</td>
                          <td>{contact.email}</td>
                        </tr>
                      )
                    }
                  }
                }
                return ""
              })
              }
            </tbody>
          </table>
      }
    </div >
  )
}