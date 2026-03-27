import { useState } from "react"

export const useCoachingInfo = () => {
  
  const [activeTab, setActiveTab] = useState('about');

  const handleAbout = () => setActiveTab('about');
  const handleBatch = () => setActiveTab('batch');
  const handleTeacher = () => setActiveTab('teacher');
  const handleAdmin = () => setActiveTab('admin');

  return {
    about: activeTab === 'about',
    batch: activeTab === 'batch',
    teacher: activeTab === 'teacher',
    admin: activeTab === 'admin',
    
    handleAbout,
    handleBatch,
    handleTeacher,
    handleAdmin,
    
    setActiveTab 
  };
}