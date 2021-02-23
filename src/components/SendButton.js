import React, { useState } from 'react'
import styles from './SendButton.module.css'

export default function SendButton({ sendButton, phoneNumber, callback }) {
  const [message, setMessage] = useState('')

  const handleSend = () => {
    if (!phoneNumber) {
      window.alert('Invalid Phone Number')
      return false
    }
    if (typeof callback === 'function') callback()
    window.open(`https://wa.me/${phoneNumber}?text=${message}`)
    setMessage('')
  }

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  return (
    <div className={styles.root}>
      <input
        placeholder='Type a message'
        className={styles.input}
        onChange={handleChange}
        value={message}
      />
      <button className={styles.button} onClick={handleSend}>
        {sendButton}
      </button>
    </div>
  )
}
