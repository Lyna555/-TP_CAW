import React, { useState } from 'react'

export default function Blogs() {
  const [myBlogs, setMyBlogs] = useState([
    {
      id: 1,
      subject: "Football",
      description: "FIFA 2022 Championships held in Qatar",
      date: "21-dec-2022"
    },

    {
      id: 2,
      subject: "Gym",
      description: "I went to the gym",
      date: "20-nov-2022"
    },
  ])

  const [show, setShow] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <div className='tab'>
      <div className='row'>
        <h1>Blogs</h1>
        <button className='add' onClick={() => setShow(!show)}>Add Blog</button> 
      </div>

      {!show ? null : <div>
        <form action={onSubmit}>
          <label>Subject</label>
          <input type="text" placeholder='Enter subject' />
          <br />
          <label>Description</label>
          <input type="text" placeholder='Enter description' />
          <br />
          <label>Date</label>
          <input type="date" placeholder='Enter date' />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>}

      <table>
        <tbody>
          <tr>
            <th>Subject</th>
            <th>Description</th>
            <th>Date</th>
          </tr>
          {
            myBlogs.map(blog => {
              return (
                <tr key={blog.id}>
                  <td>{blog.subject}</td>
                  <td>{blog.description}</td>
                  <td>{blog.date}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
