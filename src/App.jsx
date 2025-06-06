import { useState } from 'react'
import './App.css'
import Header from './Components/Header/header.jsx'
import Input from './Components/Inputs/Inputs.jsx'
import Footer from './Components/footer/footer.jsx'
import Editbtn from './Components/editBtn/editBtn.jsx'
import Submitbtn from './Components/submitBtn/submitBtn.jsx'
import Display from './Components/display/display.jsx'

function App() {
  //use states too track editing and hold variables
  const [isEditing, setIsEditing] = useState(true);
  const [general, setGeneral] = useState({ name: "", email: "", phone: "" });
  const [education, setEducation] = useState({ school: "", studyTitle: "", studyDate: "" });
  const [work, setWork] = useState({ company: "", position: "", fromDate: "", untilDate: "", responsibilities: "" });
  const [fadeKey, setFadeKey] = useState(0);

  //handling the toggle between the buttons
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    // force remount to retrigger animation
    setFadeKey(prev => prev + 1); 
  };

  //handle change function to change state
  function handleChange(e) {
  const { name, value } = e.target;

  //if sttement to automatically update the values.
  if (name in general) {
    setGeneral(prev => ({ ...prev, [name]: value }));
  } else if (name in education) {
    setEducation(prev => ({ ...prev, [name]: value }));
  } else if (name in work) {
    setWork(prev => ({ ...prev, [name]: value }));
  }
}

  return (
    <>
    <Header />
    {isEditing ? (
      <div key={fadeKey} className='fade-in'>
        <Input 
          general={general}
          education={education}
          work={work}
          handleChange={handleChange}
        />
        </div>
      ) : (
      <div key={fadeKey} className='fade-in'>
        <Display 
          general={general}
          education={education}
          work={work}
        />
        </div>
      )}
    <div className="button-container">
      {!isEditing && <Editbtn onClick={handleEditToggle} />}
      {isEditing && <Submitbtn onClick={handleEditToggle} />}
    </div>
    <Footer />
    </>
  )
}

export default App
