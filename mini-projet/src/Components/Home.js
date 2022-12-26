import React from 'react'
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
                        <Link id='logo' style={{}} to='/'>DouLy</Link>
                    </div>
                    <div className='head2'>
                        <Link className='link' to='/Contacts'><img src={contact} alt="blogger" /> Contacts</Link>
                        <Link className='link' to='/Blogs'><img src={blog} alt="blogger" /> Blogs</Link>
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
