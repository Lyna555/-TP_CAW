import React from 'react'

export default function Contacts() {
  return (
    <div className='tab'>
      <h1>Contacts</h1>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
          <tr>
            <td>Ali</td>
            <td>0558061851</td>
            <td>ali@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}