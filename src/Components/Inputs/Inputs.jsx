import './inputs.css';

function Input() {

  return (
    <>
  {/* General info section */}
  <section id="General_sec" className="input_sec">
    <h2>General Info</h2>
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" placeholder="Name" />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="Email" />

      <label htmlFor="phone">Phone Number:</label>
      <input type="tel" id="phone" name="phone" placeholder="Phone Number" />
    </form>
  </section>

  {/* Education section */}
  <section id="education_sec" className="input_sec">
    <h2>Education Experience</h2>
    <form>
      <label htmlFor="school">School Name:</label>
      <input type="text" id="school" name="school" placeholder="School Name" />

      <label htmlFor="studyTitle">Title of Study:</label>
      <input type="text" id="studyTitle" name="studyTitle" placeholder="Title of Study" />

      <label htmlFor="studyDate">Date of Study:</label>
      <input type="date" id="studyDate" name="studyDate" />
    </form>
  </section>

  {/* Work Experience */}
  <section id="work_sec" className="input_sec">
    <h2>Work Experience</h2>
    <form>
      <label htmlFor="company">Company Name:</label>
      <input type="text" id="company" name="company" placeholder="Company Name" />

      <label htmlFor="position">Position Title:</label>
      <input type="text" id="position" name="position" placeholder="Position Title" />

      <label htmlFor="fromDate">From Date:</label>
      <input type="date" id="fromDate" name="fromDate" />

      <label htmlFor="untilDate">Until Date:</label>
      <input type="date" id="untilDate" name="untilDate" />

      <label htmlFor="responsibilities">Main Responsibilities:</label>
      <textarea
        id="responsibilities"
        name="responsibilities"
        placeholder="Main Responsibilities"
      ></textarea>
    </form>
  </section>
</>

  )
}

export default Input