import React from 'react'

const SettingsPassword = () => {
  return (
    <main className='settings'>

      <header>
        <h4>Password</h4>
        <p>Update your account password below</p>
      </header>

      <form action="">
        <span>
            <label htmlFor="" >Current Password</label>
            <input type="password" placeholder='Enter your current password' />
        </span>
        <span>
            <label htmlFor="">New Password</label>
            <input type="password" placeholder='Enter a new password'/>
        </span>
        <span>
            <label htmlFor="">Confirm Password</label>
            <input type="password" placeholder='Enter a new password'/>
        </span>
      </form>
    </main>
  )
}

export default SettingsPassword