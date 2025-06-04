import './editBtn.css';

function Editbtn({ onClick }) {
    return (
    <button onClick={onClick} id='editBtn'>
      Edit
    </button>
  );
}

export default Editbtn;