import { useState } from "react"

export const useCoachingDashboard = () => {

  const [openTab, setOpenTab] = useState('updateProfile')

  const updateProfileHandler = () => setOpenTab('updateProfile')
  const adminProfileHandler = () => setOpenTab('updateAdminProfile')
  const createBatchHandler = () => setOpenTab('createBatch')
  const addNewStaffHandler = () => setOpenTab('addNewStaff')
  const resetPasswordHandler = () => setOpenTab('resetPassword')
  const addSubjectHandler = () => setOpenTab('addSubject')
  const enrolledHandler = () => setOpenTab('enrolled')

  return {

    updateProfile: openTab === 'updateProfile',
    updateAdminProfile: openTab === 'updateAdminProfile',
    createBatch: openTab === 'createBatch',
    addNewStaff: openTab === 'addNewStaff',
    resetPassword: openTab === 'resetPassword',
    addSubject: openTab === 'addSubject',
    enrolled: openTab === 'enrolled',

    updateProfileHandler,
    adminProfileHandler,
    createBatchHandler,
    addNewStaffHandler,
    resetPasswordHandler,
    addSubjectHandler,
    enrolledHandler,
    
    
  }
}