import React,{ useState } from 'react'

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
    <div className="reservation-form">
      <form onSubmit={handleSubmit} className="wrapper">
        <h3> Reserve a table </h3>
        <p>
          We take bookings for groups up to 6. We get busy on weekends so best
          to book early to avoid disappointment!
        </p>

        <div className="first-label">
          <label>Date</label>
          <label>Time</label>
          <label>Group size</label>
        </div>

        <div className="first-input">
          <input
            type="number"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <input
            type="number"
            value={groupSize}
            onChange={(e) => setGroupSize(e.target.value)}
          />
        </div>

        <div className="second-label">
          <label>Name</label>
          <label>Contact number</label>
        </div>

        <div className="second-input">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>

        <div>
          <label>Comment / requests</label>
          <textarea
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
          />
        </div>

        <div>
          <input type="checkbox" value="tandc" />
            By requesting this booking, I am accepting Tiny Leaf's Terms and
            Conditions.
      
        </div>

        <button type="submit">Reserve</button>
      </form>
    </div>
  );
}

export default ReservationForm