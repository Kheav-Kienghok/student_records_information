import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../css/CreateStudent.css';

function CreateStudent() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");
  
  const navigate = useNavigate();
  const [validation, setValidation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = {id, name, place, phone};

    fetch("http://localhost:8000/students", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(studentData)
    })
    .then((res) => {
      alert("Student Data saved successfully!");
      navigate("/");
    })
    .catch((err) => {
      console.error(err.message);
      alert("Error saving data. Please try again.");
    });
  }

  return (
    <div className="container">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>

        <label htmlFor="id">ID:</label>
        <input type="text" id="id" name="id" required value={id} onChange={e => setId(e.target.value)} onMouseDown={() => setValidation(true)} />
        {id.length === 0 && validation && <span className="errorMsg">Please Enter your ID</span>}

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required value={name} onChange={e => setName(e.target.value)} onMouseDown={() => setValidation(true)} />
        {name.length === 0 && validation && <span className="errorMsg">Please Enter your name</span>}

        <label htmlFor="place">Place:</label>
        <input type="text" id="place" name="place" required value={place} onChange={e => setPlace(e.target.value)} onMouseDown={() => setValidation(true)} />
        {place.length === 0 && validation && <span className="errorMsg">Please Enter your Location</span>}

        <label htmlFor="phone">Phone:</label>
        <input type="text" id="phone" name="phone" required value={phone} onChange={e => setPhone(e.target.value)} onMouseDown={() => setValidation(true)} />
        {phone.length === 0 && validation && <span className="errorMsg">Please Enter your Phone Number</span>}

        <div>
          <button className="btn btn-save">Save</button>
          <Link to="/" className="btn btn-back">Back</Link>
        </div>

      </form>
    </div>
  );
}

export default CreateStudent;
