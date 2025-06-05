import './display.css';

function Display(props) {

    const { general, education, work } = props;
    return (
    <>
        {/* General Info */}
            <section id="general_display" className="display_sec">
                <h2>General Information</h2>
                <p><strong>Name:</strong> {general.name}</p>
                <p><strong>Email:</strong> {general.email}</p>
                <p><strong>Phone:</strong> {general.phone}</p>
            </section>

        {/* Education */}
            <section id="education_display" className="display_sec">
                <h2>Education</h2>
                <p><strong>School:</strong> {education.school}</p>
                <p><strong>Title of Study:</strong> {education.studyTitle}</p>
                <p><strong>Date of Study:</strong> {education.studyDate}</p>
            </section>

        {/* Work Experience */}
            <section id="work_display" className="display_sec">
                <h2>Work Experience</h2>
                <p><strong>Company:</strong> {work.company}</p>
                <p><strong>Position:</strong> {work.position}</p>
                <p><strong>From:</strong> {work.fromDate}</p>
                <p><strong>Until:</strong> {work.untilDate}</p>
                <p><strong>Responsibilities:</strong> {work.responsibilities}</p>
            </section>
    </>
    )
    
}

export default Display;