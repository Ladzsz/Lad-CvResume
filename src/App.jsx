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

  //handle change function to change state
  function handleChange(e) {
  const { name, value } = e.target;

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
        <Input 
          general={general}
          education={education}
          work={work}
          handleChange={handleChange}
        />
      ) : (
        <Display 
          general={general}
          education={education}
          work={work}
        />
      )}
    <div className="button-container">
      {!isEditing && <Editbtn onClick={() => setIsEditing(!isEditing)} />}
      {isEditing && <Submitbtn onClick={() => setIsEditing(false)} />}
    </div>
    <Footer />
    </>
  )
}

export default App
