import './inputs.css';

function Input(props) {

  return (
    <>
  {/* General info section */}
  <section id="General_sec" className="input_sec">
    <h2>General Info</h2>
    <form>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        value={props.general.name}
        onChange={props.handleChange}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        value={props.general.email}
        onChange={props.handleChange}
      />

      <label htmlFor="phone">Phone Number:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Phone Number"
        value={props.general.phone}
        onChange={props.handleChange}
      />
    </form>
  </section>

  {/* Education Section */}
  <section id="education_sec" className="input_sec">
    <h2>Education Experience</h2>
    <form>
      <label htmlFor="school">School Name:</label>
      <input
        type="text"
        id="school"
        name="school"
        placeholder="School Name"
        value={props.education.school}
        onChange={props.handleChange}
      />

      <label htmlFor="studyTitle">Title of Study:</label>
      <input
        type="text"
        id="studyTitle"
        name="studyTitle"
        placeholder="Title of Study"
        value={props.education.studyTitle}
        onChange={props.handleChange}
      />

      <label htmlFor="studyDate">Date of Study:</label>
      <input
        type="date"
        id="studyDate"
        name="studyDate"
        value={props.education.studyDate}
        onChange={props.handleChange}
      />
    </form>
  </section>

  {/* Work Experience Section */}
  <section id="work_sec" className="input_sec">
    <h2>Work Experience</h2>
    <form>
      <label htmlFor="company">Company Name:</label>
      <input
        type="text"
        id="company"
        name="company"
        placeholder="Company Name"
        value={props.work.company}
        onChange={props.handleChange}
      />

      <label htmlFor="position">Position Title:</label>
      <input
        type="text"
        id="position"
        name="position"
        placeholder="Position Title"
        value={props.work.position}
        onChange={props.handleChange}
      />

      <label htmlFor="fromDate">From Date:</label>
      <input
        type="date"
        id="fromDate"
        name="fromDate"
        value={props.work.fromDate}
        onChange={props.handleChange}
      />

      <label htmlFor="untilDate">Until Date:</label>
      <input
        type="date"
        id="untilDate"
        name="untilDate"
        value={props.work.untilDate}
        onChange={props.handleChange}
      />

      <label htmlFor="responsibilities">Main Responsibilities:</label>
      <textarea
        rows="10" cols="20"
        id="responsibilities"
        name="responsibilities"
        placeholder="Main Responsibilities"
        value={props.work.responsibilities}
        onChange={props.handleChange}
      />
    </form>
  </section>
</>

  )
}

export default Input