import React, { useState } from 'react'
import { MyBlog } from './MyBlogs'

export default function Blogs() {
  const [myBlogs, setMyBlogs] = useState(MyBlog)

  const [inputs, setInputs] = useState({
    id: 0,
    subject: "",
    description: "",
    date: ""
  })

  const [showAdd, setShowAdd] = useState(false)
  const [showTable, setShowTable] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setMyBlogs([...myBlogs, inputs])
  }

  return (
    <div className='tab'>
      <div className='row'>
        <h1>Blogs</h1>
        <div className='buttons'>
          {!showAdd ? <button className='add' onClick={() => { setShowAdd(!showAdd); setShowTable(false) }}>Create Blog</button> : <button className='hide' onClick={() => setShowAdd(!showAdd)}>Hide Create Blog</button>}
          {!showTable ? <button className='add' onClick={() => { setShowTable(!showTable); setShowAdd(false) }}>Display Blogs</button> : <button className='hide' onClick={() => setShowTable(!showTable)}>Hide Display Blogs</button>}
        </div>
      </div>

      {!showAdd ? null : <div>
        <form onSubmit={handleSubmit}>
          <label>Subject</label>
          <input type="text" placeholder='Enter subject' onChange={(e) => { setInputs({ id: myBlogs[myBlogs.length - 1].id + 1 }); setInputs(prevState => ({ ...prevState, subject: e.target.value })) }} />
          <br />
          <label>Description</label>
          <input type="text" placeholder='Enter description' onChange={(e) => { setInputs(prevState => ({ ...prevState, description: e.target.value })) }} />
          <br />
          <label>Date</label>
          <input type="date" placeholder='Enter date' onChange={(e) => { setInputs(prevState => ({ ...prevState, date: e.target.value })) }} />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>}

      {!showTable ? null :
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
      }
    </div>
  )
}
