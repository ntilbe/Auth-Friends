import React, { useState } from 'react'
import {addFriend} from '../utils/actions'
import {connect} from 'react-redux'

const initialformValues = {
    name: '',
    age: '',
    email: '',
    id: Math.floor(Math.random()* 5000) + 10
}

const AddFriendForm = props => {
    const [formValues, setFormValues] = useState(initialformValues)

    const handleFormChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
    
        props.addFriend(formValues)
        
        setFormValues(initialformValues)
    }

    return (
        <div className={props.isLoading ? "hidden" : 'friend-card'}>
            <h2>Add New Friend</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='nameInput'>
                    <input
                    value={formValues.name}
                    placeholder='Name'
                    onChange={handleFormChange}
                    name='name'
                    id='nameInput'
                    />
                </label>
                <label htmlFor='ageInput'>
                    <input
                    value={formValues.age}
                    placeholder='Age'
                    onChange={handleFormChange}
                    name='age'
                    id='ageInput'
                    type='number'
                    className='numberInput'
                    />
                </label>
                <label htmlFor='emailInput'>
                    <input
                    value={formValues.email}
                    placeholder='Email'
                    onChange={handleFormChange}
                    name='email'
                    id='emailInput'
                    />
                </label>
                <button>Add</button>
            </form>
        </div>
    )
}

export default connect(null, {addFriend})(AddFriendForm)