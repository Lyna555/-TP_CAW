import React, { useState } from "react";

export default function Comments() {
    const [comments, setComments] = useState([])
    const [input, setInput] = useState({
        name: "",
        comment: ""
    })
    const [show, setShow] = useState(false)

    function handle(e) {
        e.preventDefault()
        setShow(false)
        setComments([...comments, input])
    }

    return (
        <div>
            <button className="comment" onClick={() => { setShow(!show) }}>Comment</button>
            {
                !show ? null :
                    <form className="comment-form" onSubmit={handle}>
                        <label>Name</label>
                        <input required type="text" placeholder="Enter your name" onChange={(e) => { setInput(prevState => ({ ...prevState, name: e.target.value, comment:"" })) }} />
                        <label>Comment</label>
                        <input required type="text" placeholder="Enter your comment" onChange={(e) => { setInput(prevState => ({ ...prevState, comment: e.target.value })) }} />
                        <input type="submit" value="Submit" />
                    </form>
            }
            {
                comments.map((comment, i) => {
                    return (
                        <div className="com" key={i}>
                            <p><strong>{comment.name}</strong><br></br>{comment.comment}</p>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}