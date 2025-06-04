import './submitBtn.css';

function Submitbtn({ onClick }) {
    return (
    <button onClick={onClick} id='submitBtn'>
      Submit
    </button>
  );
}

export default Submitbtn;