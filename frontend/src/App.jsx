import Sidebar from "../src/SideBarNav/Sidebar"
import { useState, useEffect } from 'react';
import BeforeIntroPage from "../src/Onboarding/BeforeIntroPage";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowSidebar(true);
    }, 3000);
  }, []);

  return (
    <div className="full-screen-sidebar">
      {showSidebar == true ? <Sidebar/> : <BeforeIntroPage/>}
    </div>
  )
}

export default App
