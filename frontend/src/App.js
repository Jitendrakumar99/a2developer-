import './App.css';
import HeroSection from './HeroSection';
import Navbar from './Navbar';
import TopBar from './TopBar';
import { useState } from 'react';
import FormComponent from './form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ zIndex: 1000 }}
      />
      <div className="topsection">
        <TopBar onToggleForm={toggleForm} />
        <div className="separator-line"></div>
        <Navbar />
      </div>
      <HeroSection />
      {showForm && (
        <>
          <div className={`form-overlay ${showForm ? 'show' : ''}`} onClick={toggleForm} />
          <div className={`form-container ${showForm ? 'show' : ''}`}>
            <FormComponent onClose={toggleForm} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
