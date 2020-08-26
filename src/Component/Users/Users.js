import React from 'react';
import './Users.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Users = (props) => {
    const {name,  dob, location, phone, email, picture, gender} = props.users;
    // console.log(props);
    const handleAddUser = props.handleAddUser;
    return (
        <div className='user-container d-flex align-items-center'>
            <div className="user-img">
                <img src={picture.large} alt=""/>
            </div>
            <div className="user-details">
                <h2 className='name'>{name.title} {name.first} {name.last}</h2>
                <p>Gender : {gender}</p>
                <p>Age : {dob.age}</p> <br/>
                <button onClick={() => handleAddUser(props.users)} className='user-btn'><FontAwesomeIcon icon={faPlus} /> add user</button>
            </div>

            <div className="contact-details">
                <p>Location : {location.city}, <br/> {location.street.name}, <br/> {location.country}</p>
                <p>Phone : {phone}</p>
                <p>Email : {email}</p>
            </div> 
        </div>
    );
};

export default Users;