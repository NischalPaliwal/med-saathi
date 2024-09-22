import Sidebar from "../src/SideBarNav/Sidebar"
import { useState, useEffect } from 'react';
import BeforeIntroPage from "../src/Onboarding/BeforeIntroPage";
import Auth from '../src/Auth/auth_page'

function App() {
  const [currentPage, setCurrentPage] = useState('beforeIntro');

  useEffect(() => {
    setTimeout(() => {
      setCurrentPage('auth');
    }, 3000);
  }, []);

  useEffect(() => {
    if (currentPage === 'auth') {
      setTimeout(() => {
        setCurrentPage('sidebar');
      }, 3000);
    }
  }, [currentPage]);

  return (
    <div className="full-screen-sidebar">
      {currentPage === 'beforeIntro' && <BeforeIntroPage />}
      {currentPage === 'auth' && <Auth />}
      {currentPage === 'sidebar' && (
        <>
          <Sidebar />
        </>
      )}
    </div>
  )
}

export default App