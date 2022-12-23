import React from 'react'
import logo from '../Images/blogger.png'
import blog from '../Images/blog.png'
import contact from '../Images/contact.png'
import { Routes, Route, Link } from 'react-router-dom'
import Contacts from './Contacts'
import Blogs from './Blogs'
import Main from './Main'
import "./style.css"

export default function Home() {
    return (
        <div>
            <nav>
                <div className='heady'>
                    <div className='head1'>
                        <img src={logo} alt="logo" />
                        <Link id='logo' style={{color:"#ff5050",textDecoration: 'none',fontSize: 30, fontWeight: "bold"}} to='/'>MyBlogger</Link>
                    </div>
                    <div className='head2'>
                        <Link className='link' style={{color:"black",textDecoration: 'none',fontSize: 23, fontWeight: "bold"}} to='/Contacts'><img src={contact} alt="blogger" /> Contacts</Link>
                        <Link className='link' style={{color:"black",textDecoration: 'none',fontSize: 23, fontWeight: "bold"}} to='/Blogs'><img src={blog} alt="blogger" /> Blogs</Link>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path='/' element={<Main/>}></Route>
                <Route path='/Contacts' element={<Contacts />}></Route>
                <Route path='/Blogs' element={<Blogs />}></Route>
            </Routes>
        </div>
    )
}
