import React,{ useState } from 'react'
import logo from "../../images/Reservations/Ellipse 4.png";
import logo2 from "../../images/Reservations/Logo.png";


function ReservationForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState();
  const [textarea, setTextarea] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <>
      <div>
        <img className="logo-img" src={logo} alt="logo" />
      </div>

      <div className="form-title">
        <h3> Reserve a table </h3>
        <p>
          We take bookings for groups up to 6. We get busy on weekends so best
          to book early to avoid disappointment!
        </p>
      </div>

      <div className="form">
        <form onSubmit={handleSubmit} className="form-container">
          <label className="label1">Date</label>
          <input
            className="input1"
            type="number"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label className="label2">Time</label>
          <input
            className="input2"
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <label className="label3">Group size</label>
          <input
            className="input3"
            type="number"
            value={groupSize}
            onChange={(e) => setGroupSize(e.target.value)}
          />
          <label className="label4">Name</label>
          <input
            className="input4"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="label5">Contact number</label>
          <input
            className="input5"
            type="number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <label className="label6">Comments/requests</label>
          <textarea
            className="textarea"
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
          />
        </form>
      </div>

      <div className="checkbox">
        <input type="checkbox" value="tandc" />
        <label>
          By requesting this booking, I am accepting Tiny Leaf's Terms and
          Conditions.
        </label>
        <button className="btn-submit">Reserve</button>
      </div>

      <div>
        <img className="logo-img2" src={logo2} alt="logo" />
      </div>
    </>
  );
}

export default ReservationForm