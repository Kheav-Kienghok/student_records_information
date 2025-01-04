import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import '../css/EditStudent.css';


function EditStudent() {

  const { studentid } = useParams();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");
  
  const navigate = useNavigate();
  const [validation, setValidation] = useState(false);


  useEffect(() => {
    fetch("http://localhost:8000/students/" + studentid)
    .then((res) => res.json())
    .then((data) => {
      setId(data.id);
      setName(data.name);
      setPlace(data.place);
      setPhone(data.phone);
    })
    .catch((err) => {
      alert("Error to fetch the Data!");
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    const studentData = { id, name, place, phone };
    
    fetch(`http://localhost:8000/students/${studentid}`,{
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(studentData)
    })
    .then((res) => {
      alert("Student Data Updated successfully!");
      navigate("/");
    })
    .catch((err) => {
      alert("Failed to fetch Data!");
    })
    
  }

  return (
    <div className="container">
      <h2>Edit Student Details</h2>
      <form onSubmit={handleSubmit}>

        <label htmlFor="id">ID:</label>
        <input type="text" id="id" name="id" required value={id} onChange={e => setId(e.target.value)} onMouseDown={() => setValidation(true)} />
        {id.length === 0 && validation && <span className="errorMsg">Please Enter the ID</span>}

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required value={name} onChange={e => setName(e.target.value)} onMouseDown={() => setValidation(true)} />
        {name.length === 0 && validation && <span className="errorMsg">Please Enter the name</span>}

        <label htmlFor="place">Place:</label>
        <input type="text" id="place" name="place" required value={place} onChange={e => setPlace(e.target.value)} onMouseDown={() => setValidation(true)} />
        {place.length === 0 && validation && <span className="errorMsg">Please Enter the Location</span>}

        <label htmlFor="phone">Phone:</label>
        <input type="text" id="phone" name="phone" required value={phone} onChange={e => setPhone(e.target.value)} onMouseDown={() => setValidation(true)} />
        {phone.length === 0 && validation && <span className="errorMsg">Please Enter the Phone Number</span>}

        <div>
          <button className="btn btn-save">Update</button>
          <Link to="/" className="btn btn-back">Back</Link>
        </div>

      </form>
    </div>
  );
}

export default EditStudent;
