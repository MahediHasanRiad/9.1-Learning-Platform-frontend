import { useState } from "react";

export const useTeacherInfo = () => {
  const [activeTab, setActiveTab] = useState("about");

  const handleAbout = () => setActiveTab("about");
  const handleAchivement = () => setActiveTab("achivement");
  const handleDemoClass = () => setActiveTab("demoClass");

  return {
    about: activeTab === "about",
    achivement: activeTab === "achivement",
    demoClass: activeTab === "demoClass",

    handleAbout,
    handleAchivement,
    handleDemoClass,

    setActiveTab,
  };
};
