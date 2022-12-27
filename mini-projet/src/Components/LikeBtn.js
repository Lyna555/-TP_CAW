import React, { useState } from "react"

export default function LikeBtn() {
  const [likes, setLikes] = useState(0)

  return <button className="like" onClick={() => setLikes(likes + 1)}>{likes===0 ? null : likes}♥ </button>
}