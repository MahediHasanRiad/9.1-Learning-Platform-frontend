import { useState } from "react"

export const useCoachingDashboard = () => {

  const [openTab, setOpenTab] = useState('updateProfile')

  const updateProfileHandler = () => setOpenTab('updateProfile')
  const adminProfileHandler = () => setOpenTab('updateAdminProfile')
  const updateBatchInfoHandler = () => setOpenTab('updateBatchInfo')
  const createBatchHandler = () => setOpenTab('createBatch')
  const addNewStaffHandler = () => setOpenTab('addNewStaff')
  const updateStaffRoleHandler = () => setOpenTab('updateStaffRole')
  const resetPasswordHandler = () => setOpenTab('resetPassword')

  return {

    updateProfile: openTab === 'updateProfile',
    updateAdminProfile: openTab === 'updateAdminProfile',
    updateBatchInfo: openTab === 'updateBatchInfo',
    createBatch: openTab === 'createBatch',
    addNewStaff: openTab === 'addNewStaff',
    updateStaffRole: openTab === 'updateStaffRole',
    resetPassword: openTab === 'resetPassword',

    updateProfileHandler,
    adminProfileHandler,
    updateBatchInfoHandler,
    createBatchHandler,
    addNewStaffHandler,
    updateStaffRoleHandler,
    resetPasswordHandler

  }
}