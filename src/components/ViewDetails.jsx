import { Link, useParams } from "react-router-dom";
import '../css/ViewDetails.css';
import { useEffect, useState } from "react";


function ViewDetails() {

  const { studentid } = useParams();
  const [studentData, setStudentData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8000/students/${studentid}`) 
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch student details");
        }
        return res.json();
      })
      .then((data) => setStudentData(data))
      .catch(() => {
        alert("Data fetch failed!");
      });
  }, [studentid]); 

  return (
    <div className="container">
      <h1>Student Details</h1>

    { studentData && 
          <div className="details">
            <div className="detail-row">
              <span className="label">ID:</span>
              <span className="value">{studentData.id}</span>
            </div>
            <div className="detail-row">
              <span className="label">Name:</span>
              <span className="value">{studentData.name}</span>
            </div>
            <div className="detail-row">
              <span className="label">Place:</span>
              <span className="value">{studentData.place}</span>
            </div>
            <div className="detail-row">
              <span className="label">Phone:</span>
              <span className="value">{studentData.phone}</span>
            </div>
          </div>
      }

      <Link to="/" className="btn btn-back">Back</Link>
    </div>
  );
}

export default ViewDetails;
