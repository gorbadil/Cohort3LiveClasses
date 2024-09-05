import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [doctors, setDoctors] = useState([]);
  const [update, setUpdate] = useState(false);
  const [newDoctor, setNewDoctor] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
  });
  const [updateDoctor, setUpdateDoctor] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/doctors").then((res) => {
      setDoctors(res.data.content);
      setLoading(false);
      setUpdate(true);
    });
  }, [update]);

  if (loading) return <div>Loading...</div>;

  const handleAddDoctor = () => {
    axios
      .post("http://localhost:8080/api/v1/doctors", newDoctor)
      .then(() => {
        setUpdate(false);
        setNewDoctor({
          name: "",
          phone: "",
          email: "",
          address: "",
          city: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleNewDoctorInputChange = (e) => {
    const { name, value } = e.target;
    setNewDoctor((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateDoctorInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateDoctor((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDeleteDoctor = (e) => {
    axios
      .delete("http://localhost:8080/api/v1/doctors/" + e.target.id)
      .then(() => {
        setUpdate(false);
      });
  };

  const handleUpdateDoctorBtn = (doc) => {
    setUpdateDoctor(doc);
  };

  const handleUpdateDoctor = () => {
    axios
      .put(
        "http://localhost:8080/api/v1/doctors/" + updateDoctor.id,
        updateDoctor
      )
      .then(() => {
        setUpdate(false);
        setUpdateDoctor({
          id: "",
          name: "",
          phone: "",
          email: "",
          address: "",
          city: "",
        });
      });
  };

  return (
    <>
      <div className="doctorAdd">
        <div>
          <h3>New Doctor</h3>
          <input
            type="text"
            placeholder="Name"
            onChange={handleNewDoctorInputChange}
            name="name"
            value={newDoctor.name}
            autoComplete="off"
          />
          <br />
          <input
            type="text"
            placeholder="Phone"
            onChange={handleNewDoctorInputChange}
            name="phone"
            value={newDoctor.phone}
            autoComplete="off"
          />
          <br />
          <input
            type="text"
            placeholder="E-Mail"
            onChange={handleNewDoctorInputChange}
            name="email"
            value={newDoctor.email}
            autoComplete="off"
          />
          <br />
          <input
            type="text"
            placeholder="Address"
            onChange={handleNewDoctorInputChange}
            name="address"
            value={newDoctor.address}
            autoComplete="off"
          />
          <br />
          <input
            type="text"
            placeholder="City"
            onChange={handleNewDoctorInputChange}
            name="city"
            value={newDoctor.city}
            autoComplete="off"
          />
          <br />
          <button onClick={handleAddDoctor}>Gönder</button>
        </div>
        <div>
          <h3>Update Doctor</h3>
          <input
            type="text"
            placeholder="Name"
            onChange={handleUpdateDoctorInputChange}
            name="name"
            value={updateDoctor.name}
            autoComplete="off"
          />
          <br />
          <input
            type="text"
            placeholder="Phone"
            onChange={handleUpdateDoctorInputChange}
            name="phone"
            value={updateDoctor.phone}
            autoComplete="off"
          />
          <br />
          <input
            type="text"
            placeholder="E-Mail"
            onChange={handleUpdateDoctorInputChange}
            name="email"
            value={updateDoctor.email}
            autoComplete="off"
          />
          <br />
          <input
            type="text"
            placeholder="Address"
            onChange={handleUpdateDoctorInputChange}
            name="address"
            value={updateDoctor.address}
            autoComplete="off"
          />
          <br />
          <input
            type="text"
            placeholder="City"
            onChange={handleUpdateDoctorInputChange}
            name="city"
            value={updateDoctor.city}
            autoComplete="off"
          />
          <br />
          <button onClick={handleUpdateDoctor}>Gönder</button>
        </div>
      </div>
      <h1>Doctors</h1>
      {doctors.map((doctor, index) => (
        <div key={index}>
          <p>
            {index + 1} - {doctor.name} {doctor.email} -
            <span id={doctor.id} onClick={handleDeleteDoctor}>
              X
            </span>
            -<span onClick={() => handleUpdateDoctorBtn(doctor)}>U</span>
          </p>
        </div>
      ))}
    </>
  );
}

export default App;
