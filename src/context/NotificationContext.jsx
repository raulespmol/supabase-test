import { createContext, useState, useContext } from 'react'
import Notification from '../components/Notification'

const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {
  const [notification, setNotification] = useState({
    open: false,
    severity: 'success',
    message: ''
  })

  const openNotification = (message, severity = 'success') => {
    setNotification({
      open: true,
      severity,
      message
    })
  }

  const closeNotification = () => {
    setNotification({
      ...notification,
      open: false
    })
  }

  return (
    <NotificationContext.Provider value={openNotification}>
      {children}
      <Notification 
        {...notification}
        onClose={closeNotification}
      />
    </NotificationContext.Provider>
  )
}

export const useNotification = () => {
  return useContext(NotificationContext)
}