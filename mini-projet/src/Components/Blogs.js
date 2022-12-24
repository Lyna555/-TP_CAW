import React, { useState } from 'react'

export default function Blogs() {
  const [myBlogs, setMyBlogs] = useState([
    {
      id: 1,
      subject: "Football",
      description: "FIFA 2022 Championships held in Qatar",
      date: "2022-12-23"
    },

    {
      id: 2,
      subject: "Gym",
      description: "I went to the gym",
      date: "2022-11-20"
    },
  ])

  const [inputs, setInputs] = useState({
    id: 0,
    subject: "",
    description: "",
    date: ""
  })

  const [show, setShow] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setMyBlogs([...myBlogs, inputs])
  }

  return (
    <div className='tab'>
      <div className='row'>
        <h1>Blogs</h1>
        {!show ? <button className='add' onClick={() => setShow(!show)}>Add Blog</button> : <button className='hide' onClick={() => setShow(!show)}>Hide Add Blog</button>} 
      </div>

      {!show ? null : <div>
        <form onSubmit={handleSubmit}>
          <label>Subject</label>
          <input type="text" placeholder='Enter subject' onChange={(e) => {setInputs({id: myBlogs[myBlogs.length - 1].id + 1}); setInputs(prevState => ({ ...prevState, subject: e.target.value })) }} />
          <br />
          <label>Description</label>
          <input type="text" placeholder='Enter description' onChange={(e) => {setInputs(prevState => ({ ...prevState, description: e.target.value })) }}/>
          <br />
          <label>Date</label>
          <input type="date" placeholder='Enter date' onChange={(e) => {setInputs(prevState => ({ ...prevState, date: e.target.value })) }}/>
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
