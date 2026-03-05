import { useState } from "react"

export const useTeacherDashboard = () => {

  const [openTab, setOpenTab] = useState('updateProfile')

  const handleUpdateProfile = () => setOpenTab('updateProfile')
  const handleDemoClass = () => setOpenTab('demoClass')
  const handleAddSubject = () => setOpenTab('addSubject')
  const handleResetPassword = () => setOpenTab('resetPassword')

  return {
    updateProfile: openTab === 'updateProfile',
    demoClass: openTab === 'demoClass',
    addSubject: openTab === 'addSubject',
    resetPassword: openTab === 'resetPassword',

    handleUpdateProfile,
    handleDemoClass,
    handleAddSubject,
    handleResetPassword
  }
}