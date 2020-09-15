import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import FriendCard from './FriendCard'

import {fetchFriends} from '../utils/actions'
import AddFriendForm from './AddFriendForm'

const Friends = (props) => {
    
    useEffect(() => {
        props.fetchFriends()
    },[])
    
    
    return ( 
    
    <div className='friend-container'>        
        <div className={props.isLoading ? "" : 'hidden'}>
                <h1>Loading Friends Data...</h1>
              </div>
    
        {props.friends.map((item) => {
            return <FriendCard key = {item.id} friend = {item}/>
        })}
        <AddFriendForm isLoading = {props.isLoading}/>
        </div>
    )

}

const mapStateToProps = state => {
    console.log(state)

    return {
        friends: state.friends,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchFriends })(Friends)