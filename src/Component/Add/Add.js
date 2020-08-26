import React from 'react';
import './Add.css';

const Add = (props) => {
    // const {name,  dob, location, phone, email, picture, gender} = props.add;
    console.log(props);
    const added = props.add;
    // for (let i = 0; i < add.length; i++) {
    //     const user = add[i];
  
    // }
    // const name = user.name;
    return (
        <div>
            <h3>Total User: {added.length}</h3>
            
            {
                added.map(user => {

                    return (
                        <div>
                            <h3 className='name'>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
                        </div>
                    )

                })
            }
        </div>
    );
};

export default Add;