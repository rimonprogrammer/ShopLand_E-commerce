import React, { useEffect, useState } from 'react';
import user from '../../assets/Img/user.jpg';
import '../../assets/CSS/Common.css';

function UserData() {
    const [userData, setUserData] = useState();
    useEffect(()=>{
        if(localStorage.getItem('UserInfo')){
            const data = JSON.parse(localStorage.getItem('UserInfo'))
            setUserData(data.name);
        }
      }, []);

  return (
    <div className='container'>
        <div className="user-data">
            <img src={user} alt="user image shopLand" />
            <span className='ps-2'>
                {
                    userData ? userData : 'User not login'
                }
            </span>
        </div>
    </div>
  )
}

export default UserData;