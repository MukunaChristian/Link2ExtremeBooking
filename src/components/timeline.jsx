import img2 from "../assets/Vector1.png";
import img3 from "../assets/Ellipse 22.png";
import img4 from "../assets/Group1.png";
import img5 from "../assets/kid.png";
import axios from "axios";
import { useEffect, useState } from "react";

export default function UserPage2() {
  const [activityDetails, setActivityDetails] = useState(null);

  const [adults, setAdults] = useState(1); // Starting with 1 adult
  const [children, setChildren] = useState(0); // Starting with 0 children
  const [date, setDate] = useState("");

  console.log;

  useEffect(() => {
    const fetchActivityDetails = async () => {
      try {
        const response = await axios.get(
          `https://staging.link2extreme.com/api/booking/2/activities/2`
        );
        setActivityDetails(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching activity details:", error);
      }
    };

    fetchActivityDetails();
  }, []);

  const [scheduleData, setScheduleData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchActivitySchedule = async () => {
      try {
        const response = await axios.get(
          "https://staging.link2extreme.com/api/booking/1/activities/1/schedule"
        );
        formatScheduleData(response.data.activity_schedule);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching activity schedule:", error);
        setIsLoading(false);
      }
    };

    fetchActivitySchedule();
  }, []);

  const formatScheduleData = (schedule) => {
    // Extract all unique time slots from the schedule
    const allTimes = new Set();
    schedule.forEach((day) => {
      Object.keys(day.Time_Slots).forEach((time) => {
        allTimes.add(time);
      });
    });

    // Sort times for consistent ordering
    const sortedTimes = Array.from(allTimes).sort();

    // Map each time to each day to create rows for the table
    const rowData = sortedTimes.map((time) => {
      const row = { time };
      schedule.forEach((day) => {
        row[day.Day] = day.Time_Slots[time] || "-";
      });
      return row;
    });

    setScheduleData(rowData);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  // Default time, adjust as necessary

  const adultPrice = 1600; // Price per adult
  const childPrice = 800; // Price per child, adjust as necessary

  // Function to handle number input changes
  const handleAdultChange = (e) => {
    setAdults(Number(e.target.value));
  };

  const handleChildrenChange = (e) => {
    setChildren(Number(e.target.value));
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const totalPrice = adults * adultPrice + children * childPrice;

  return (
    <main id="home4">
      <div className="parent4">
      <div className="timeline-child">
  <h1>Find Availability For</h1>
  <div className="show-flex">
    <div className="page-icon-flex">
      <input
        className="input-fl"
        type="number"
        value={adults}
        onChange={handleAdultChange}
      /> Adult
    </div>
    <h3>and</h3>
    <div className="page-icon-flex">
      <input
        className="input-fl"
        type="number"
        value={children}
        onChange={handleChildrenChange}
      /> Children
    </div>
    <h3>on</h3>
    <div className="pickup-date">
      <input
        type="date"
        id="pickupDate"
        name="pickupDate"
        value={date}
        onChange={handleDateChange}
      />
    </div>
  </div>

  <div className="time-slot">
    <h3>Time Slots</h3>
    <div className="time-slot-table">
      <table>
        <thead>
          <tr>
            <th>Time/Day</th>
            {scheduleData.length > 0 &&
              Object.keys(scheduleData[0]).filter(key => key !== "time").map(day => <th key={day}>{day}</th>)}
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((row, index) => (
            <tr key={index}>
              <td>{row.time}</td>
              {Object.keys(row).filter(key => key !== "time").map(day => (
                <td key={day} className={row[day] === "-" ? "slot-unavailable" : "slot-available"}>
                  {row[day]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

  <div className="total">
    <h1>R{totalPrice} in total</h1>
    <div className="text-flex">
      For <h3>{adults} Adult{adults !== 1 && "s"}</h3> and <h3>{children} Children</h3>
    </div>
    <div className="text-flex">
      at <h3>09:00</h3> on <h3>2024-04-03</h3>
    </div>
    <div className="total-flex">
      <img src={img2} alt="" />
      <img src={img4} alt="" />
      <img src={img5} alt="" />
      <img src={img3} alt="" />
    </div>
    <div className="now-btn">
      <button className="btn-now">Add to Cart</button>
    </div>
  </div>
</div>

        </div>
      
    </main>
  );
}
