import React from 'react'

const FriendCard = (props) => {

    return (
        <div className='friend-card'>
            <h2>{props.friend.name}</h2>
            <p><strong>Age:</strong> {props.friend.age}</p>
            <p><strong>Email:</strong>  {props.friend.email}</p>
            <button>Unfriend</button>
        </div>
    )

}

export default FriendCard