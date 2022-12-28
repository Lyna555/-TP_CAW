import React, { useState } from 'react'
import { MyBlog } from './MyBlogs'
import LikeBtn from './LikeBtn'
import Comments from './Comments'

export default function Blogs() {
  const [myBlogs, setMyBlogs] = useState(MyBlog)

  const [inputs, setInputs] = useState({
    id: 0,
    subject: "",
    description: "",
    date: "",
  })

  const [showAdd, setShowAdd] = useState(false)
  const [showTable, setShowTable] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputs.subject === "" || inputs.description === "" || inputs.date === "") {
      setError(true)
    } else {
      console.log(inputs);
      setMyBlogs([...myBlogs, inputs])
      setShowAdd(false)
      setShowTable(true)
    }
  }

  return (
    <div className='tab'>
      <div className='row'>
        <h1>Blogs</h1>
        <div className='buttons'>
          {!showTable ? <button className='add' onClick={() => { setShowTable(!showTable); setShowAdd(false) }}>Display Blogs</button> : <button className='hide' onClick={() => setShowTable(!showTable)}>Hide Display Blogs</button>}
          {!showAdd ? <button className='add' onClick={() => { setShowAdd(!showAdd); setShowTable(false) }}>Create Blog</button> : <button className='hide' onClick={() => setShowAdd(!showAdd)}>Hide Create Blog</button>}
        </div>
      </div>

      {showAdd || showTable ? null :
        <div className='cloud'>
          <p className='main2'>You can click on Display Blogs to see all your blogss<br></br>or on Create Blog to add a new Blog</p>
        </div>
      }

      {!showAdd ? null :
        <div>
          <form onSubmit={handleSubmit}>
            {!error ? null : <p className='error'>Empty Fields!</p>}
            <label>Subject</label>
            <input required type="text" placeholder='Enter subject' onChange={(e) => { setInputs({ id: myBlogs[myBlogs.length - 1].id + 1 }); setInputs(prevState => ({ ...prevState, subject: e.target.value, description: "", date: "" })) }} />
            <br />
            <label>Description</label>
            <input required type="text" placeholder='Enter description' onChange={(e) => { setInputs(prevState => ({ ...prevState, description: e.target.value, date: "" })) }} />
            <br />
            <label>Date</label>
            <input required type="date" defaultValue="Enter Date" onChange={(e) => { setInputs(prevState => ({ ...prevState, date: e.target.value })) }} />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      }

      {!showTable ? null :
        <table>
          <tbody>
            <tr>
              <th>Subject</th>
              <th>Description</th>
              <th>Date</th>
              <th>Likes</th>
              <th>Comments</th>
            </tr>
            {
              myBlogs.map((blog, i) => {
                return (
                  <tr key={blog.id}>
                    <td>{blog.subject}</td>
                    <td>{blog.description}</td>
                    <td>{blog.date}</td>
                    <td><LikeBtn /></td>
                    <td><Comments /></td>
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
