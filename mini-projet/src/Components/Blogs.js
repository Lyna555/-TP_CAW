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
  const [option, setOption] = useState("None")
  const [date1, setDate1] = useState("")
  const [date2, setDate2] = useState("")

  let d1
  let d2
  let d

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs)
    setMyBlogs([...myBlogs, inputs])
    setShowAdd(false)
    setShowTable(true)
  }

  return (
    <div className='tab'>
      <div className='row'>
        <h1>Blogs</h1>

        {!showTable ? null :
          <form className='search'>
            <label>Filter Date:</label>
            <select onChange={(e) => { setOption(e.target.value) }}>
              <option>None</option>
              <option>Before</option>
              <option>After</option>
              <option>Between</option>
            </select>
            {option === "Between" ?
              <div className='between'>
                <input required type="date" onChange={(e) => { setDate1(e.target.value) }} />
                <input required type="date" onChange={(e) => { setDate2(e.target.value) }} />
              </div> :
              <input required className='blog-date' type="date" onChange={(e) => { setDate1(e.target.value) }} />
            }
          </form>
        }

        <div className='buttons'>
          {!showTable ? <button className='add' onClick={() => { setShowTable(!showTable); setShowAdd(false) }}>Display Blogs</button> : <button className='hide' onClick={() => setShowTable(!showTable)}>Hide Display Blogs</button>}
          {!showAdd ? <button className='add' onClick={() => { setShowAdd(!showAdd); setShowTable(false) }}>Create Blog</button> : <button className='hide' onClick={() => setShowAdd(!showAdd)}>Hide Create Blog</button>}
        </div>
      </div>

      {showAdd || showTable ? null :
        <div className='cloud'>
          <p className='main2'>Click on Display Blogs to see your blogs<br></br>or click on Create Blog to add a new blog</p>
        </div>
      }

      {!showAdd ? null :
        <div>
          <form onSubmit={handleSubmit}>
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
              myBlogs.map((blog) => {
                d = new Date(blog.date)
                if (option === "None" || date1 === "") {
                  return (
                    <tr key={blog.id}>
                      <td>{blog.subject}</td>
                      <td>{blog.description}</td>
                      <td>{blog.date}</td>
                      <td><LikeBtn /></td>
                      <td><Comments /></td>
                    </tr>
                  )
                } else if (option === "Before") {
                  d1 = new Date(date1)
                  if (d < d1) {
                    return (
                      <tr key={blog.id}>
                        <td>{blog.subject}</td>
                        <td>{blog.description}</td>
                        <td>{blog.date}</td>
                        <td><LikeBtn /></td>
                        <td><Comments /></td>
                      </tr>
                    )
                  }
                } else if (option === "After") {
                  d1 = new Date(date1)
                  if (d > d1) {
                    return (
                      <tr key={blog.id}>
                        <td>{blog.subject}</td>
                        <td>{blog.description}</td>
                        <td>{blog.date}</td>
                        <td><LikeBtn /></td>
                        <td><Comments /></td>
                      </tr>
                    )
                  }
                } else if (option === "Between") {
                  d1 = new Date(date1)
                  d2 = new Date(date2)
                  if (d > d1 && d < d2) {
                    return (
                      <tr key={blog.id}>
                        <td>{blog.subject}</td>
                        <td>{blog.description}</td>
                        <td>{blog.date}</td>
                        <td><LikeBtn /></td>
                        <td><Comments /></td>
                      </tr>
                    )
                  }
                }
                return null
              })
            }
          </tbody>
        </table>
      }
    </div>
  )
}
