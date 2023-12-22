import React, { useState } from 'react'
import UserJoin from './UserJoin'
import UserLogin from './UserLogin'
import { IoMdClose } from "react-icons/io";

const UserArea = () => {
    const [activeTab, setActiveTab] = useState('join');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    }

    return (
        <div className='user__cont'>
            <div className="modal__close">
                <IoMdClose className='modal__icon' />
            </div>
            {activeTab === 'join' ? <UserJoin handleTabChange={handleTabChange} /> : <UserLogin handleTabChange={handleTabChange} />}
        </div>
    )
}

export default UserArea
