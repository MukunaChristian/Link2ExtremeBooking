import arrow from "../assets/arrow-circle.png";
import user1 from "../assets/Rectangle 4573.png";
import email from "../assets/email.png";
import whatsapp from "../assets/whatsapp.png";
import vector3 from "../assets/Vector3.png";
import img2 from "../assets/Vector1.png";
import img3 from "../assets/Ellipse 22.png";
import img4 from "../assets/Group1.png";
import img5 from "../assets/kid.png";
import time1 from "../assets/time-svgrepo-com.png";
import location from "../assets/location.png";
import weather from "../assets/weather-symbol-8-svgrepo-com.png";
import shirt from "../assets/shirt-svgrepo-com.png";
import shop from "../assets/shopping-bag-3-svgrepo-com.png";
import user from "../assets/user-svgrepo-com.png";
import left from "../assets/left.png"
import right from "../assets/right.png"

import axios from "axios";
import { addDays, format } from "date-fns";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

const views = ["arrangements", "requirements", "gallery", "reviews"];

export default function UserPage2() {
  const [currentView, setCurrentView] = useState("arrangements");
  const [activityDetails, setActivityDetails] = useState(null);
  const [adults, setAdults] = useState(1); // Starting with 1 adult
  const [children, setChildren] = useState(0); // Starting with 0 children
  const [operatorId, setOperatorId] = useState(1);
  const [activityId, setActivityId] = useState(1);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [hasNextDate, setHasNextDate] = useState(false);
  const [hasPreviousDate, setHasPreviousDate] = useState(false);
  const [isDataAvailable, setIsDataAvailable] = useState(true);
  const navigate = useNavigate();

  // Assume data is available initially

  const [date, setDate] = useState("");
  const checkDateAvailability = async (date) => {
    try {
      const response = await axios.get(
        `https://staging.link2extreme.com/api/booking/${operatorId}/activities/${activityId}/schedule/${format(
          date,
          "yyyy-MM-dd"
        )}`
      );
      return response.data.activity_schedule.length > 0;
    } catch (error) {
      console.error("Error checking date availability:", error);
      return false; // Assume date is unavailable in case of error
    }
  };

  const fetchActivitySchedule = async (selectedDate) => {
    setIsLoading(true);
    const endpoint = `https://staging.link2extreme.com/api/booking/${operatorId}/activities/${activityId}/schedule/${selectedDate}`;

    try {
      const response = await axios.get(endpoint);
      if (response.data.activity_schedule.length > 0) {
        formatScheduleData(response.data.activity_schedule);
        setIsDataAvailable(true);

        // Check availability for next and previous dates
        const today = new Date(selectedDate);
        setHasNextDate(await checkDateAvailability(addDays(today, 1)));
        setHasPreviousDate(await checkDateAvailability(addDays(today, -1)));
      } else {
        setIsDataAvailable(false);
        setHasNextDate(false);
        setHasPreviousDate(false);
      }
    } catch (error) {
      console.error("Error fetching activity schedule:", error);
      setIsDataAvailable(false);
      setHasNextDate(false);
      setHasPreviousDate(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchActivitySchedule(date);
  }, [date]); // Refetch whenever the date changes

  useEffect(() => {
    setSelectedTime("");
    setSelectedDate("");
    fetchActivitySchedule(date); // Trigger fetch when date changes
  }, [date, activityId, operatorId]); // Add activityId and operatorId to dependency array

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

  const nextView = () => {
    const currentIndex = views.indexOf(currentView);
    const nextIndex = (currentIndex + 1) % views.length; // wrap around using modulo
    setCurrentView(views[nextIndex]);
  };

  const previousView = () => {
    const currentIndex = views.indexOf(currentView);
    const prevIndex = (currentIndex - 1 + views.length) % views.length; // wrap around using modulo
    setCurrentView(views[prevIndex]);
  };

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
    if (!schedule || !Array.isArray(schedule)) {
      console.error("Invalid or empty schedule data:", schedule);
      return;
    }

    const allTimes = new Set();
    schedule.forEach((day) => {
      if (day.time_slots && typeof day.time_slots === "object") {
        Object.keys(day.time_slots).forEach((time) => {
          allTimes.add(time);
        });
      }
    });

    const sortedTimes = Array.from(allTimes).sort();
    const rowData = sortedTimes.map((time) => {
      const row = { time };
      schedule.forEach((day) => {
        row[day.day] =
          day.time_slots && day.time_slots[time] === 1 ? "Available" : "Full";
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
    console.log("Date change event fired");
    e.preventDefault();
    setDate(e.target.value);
    console.log("New Date Set: ", e.target.value);
  };
  const handleTimeSlotSelection = (time, day) => {
    setSelectedTime(time);
    setSelectedDate(day); // You might need to map the 'day' back to a specific date
  };
  const handleNextDay = () => {
    if (!hasNextDate) return;
    const newDate = addDays(new Date(date), 1);
    setDate(format(newDate, "yyyy-MM-dd"));
  };

  const handlePreviousDay = () => {
    if (!hasPreviousDate) return;
    const newDate = addDays(new Date(date), -1);
    setDate(format(newDate, "yyyy-MM-dd"));
  };

  console.log("Has Next Date:", hasNextDate);
  console.log("Has Previous Date:", hasPreviousDate);

  const totalPrice = adults * adultPrice + children * childPrice;

  const goTCart = () => {
    navigate("/Cart"); // Use the path as defined in your <Route> configuration
  };

  const goBack = () => {
    navigate(-1); // This navigates back to the previous page
  };
  return (
    <main id="home2">
      <div className="booking-title-flex">
        <img className="arrow1" onClick={goBack} src={arrow} alt="" />

        <div className="booking-cart-flex"></div>
      </div>
      <div className="parent2">
        <div className="item8">
          <img src={user1} alt="" />
        </div>
        <div className="item3">
          {activityDetails ? (
            <>
              <h1>{activityDetails.activity_name}</h1>
              <p>{activityDetails.activity_description}</p>
            </>
          ) : (
            <p>Loading activity details...</p>
          )}
        </div>
        <div className="item10">
          <video
            className="video"
            controls
            src={activityDetails && activityDetails.aditional_info[2].link}
          ></video>
        </div>
        <div className="item9">
          <h1>Additional Add On </h1>
          <p>
            {activityDetails && activityDetails.aditional_info[1].discrption}
          </p>

          <div className="share">
            <p>Share this:</p>
            <img src={whatsapp} alt="" />
            <img src={email} alt="" />
            <button className="btn-copy">
              <img className="copy" src={vector3} alt="" width={1} />
              Copy Link
            </button>
          </div>
        </div>

        <div className="item5">
          <div className="button-container">
            <button
              className={`button ${
                currentView === "arrangements" ? "active" : ""
              }`}
              onClick={() => setCurrentView("arrangements")}
            >
              Arrangements
            </button>
            <button
              className={`button ${
                currentView === "requirements" ? "active" : ""
              }`}
              onClick={() => setCurrentView("requirements")}
            >
              Requirements
            </button>
            <button
              className={`button ${currentView === "gallery" ? "active" : ""}`}
              onClick={() => setCurrentView("gallery")}
            >
              Gallery
            </button>
            <button
              className={`button ${currentView === "reviews" ? "active" : ""}`}
              onClick={() => setCurrentView("reviews")}
            >
              Reviews
            </button>
          </div>
          <div className="button-container-view">
            <button className="position" onClick={previousView}>
              Previous
            </button>
            <button className="button1 active">
              {currentView.charAt(0).toUpperCase() + currentView.slice(1)}{" "}
            </button>
            <button className="position2" onClick={nextView}>
              Previous
            </button>
          </div>
          <div className="border">
            {currentView === "arrangements" && (
              <>
                <div className="flex-p">
                  <div className="use-flex">
                    <img src={time1} alt="" />
                    <h3>When </h3>
                  </div>
                  <p>
                    {activityDetails && activityDetails.arrangements[1].where}
                  </p>
                </div>
                <div className="flex-p">
                  <div className="use-flex">
                    <img src={location} alt="" />
                    <h3>Where </h3>
                  </div>

                  <p>
                    {activityDetails && activityDetails.arrangements[1].where}
                  </p>
                </div>
                <div className="flex-p">
                  <div className="use-flex">
                    <img src={weather} alt="" />
                    <h3>Weather </h3>
                  </div>

                  <p>
                    {activityDetails && activityDetails.arrangements[2].weather}
                  </p>
                </div>
                <div className="flex-p">
                  <div className="use-flex">
                    <img src={shirt} alt="" />
                    <h3>What To Wear </h3>
                  </div>

                  <p>
                    {activityDetails &&
                      activityDetails.arrangements[3].what_to_wear}
                  </p>
                </div>
                <div className="flex-p">
                  <div className="use-flex">
                    <img src={shop} alt="" />
                    <h3>Things to Bring </h3>
                  </div>

                  <p>
                    {activityDetails &&
                      activityDetails.arrangements[4].what_to_bring}
                  </p>
                </div>
                <div className="flex-p">
                  <div className="use-flex">
                    <img src={user} alt="" />
                    <h3>Guests or Spectators </h3>
                  </div>

                  <p>
                    {activityDetails &&
                      activityDetails.arrangements[5].guest_or_spectators}
                  </p>
                </div>
              </>
            )}
            {currentView === "requirements" && (
              <>
                <div className="flex-p">
                  <div className="use-flex">
                    <h3>Minimum Age </h3>
                  </div>

                  <p> {activityDetails.requirements[0].minimum_age} years</p>
                </div>
                <div className="flex-p">
                  <div className="use-flex">
                    <h3>Minimum Height </h3>
                  </div>

                  <p> {activityDetails.requirements[1].minimum_height}</p>
                </div>
                <div className="flex-p">
                  <div className="use-flex">
                    <h3>Maximum Height </h3>
                  </div>

                  <p> {activityDetails.requirements[2].weight_limit}</p>
                </div>
                <div className="flex-p">
                  <div className="use-flex">
                    <h3>Fitness Level </h3>
                  </div>

                  <p> {activityDetails.requirements[3].fitness_level}</p>
                </div>
                <div className="flex-p">
                  <div className="use-flex">
                    <h3>Qualifications </h3>
                  </div>

                  <p> {activityDetails.requirements[4].qualification}</p>
                </div>
                <div className="flex-p">
                  <div className="use-flex">
                    <h3>Certification </h3>
                  </div>

                  <p> {activityDetails.requirements[5].certification}</p>
                </div>
                <div className="flex-p">
                  <div className="use-flex">
                    <h3>Experience Level </h3>
                  </div>

                  <p> {activityDetails.requirements[6].experience}</p>
                </div>
              </>
            )}
            {currentView === "gallery" && (
              <div className="gallery">
                {activityDetails.gallery &&
                activityDetails.gallery.length > 0 ? (
                  activityDetails.gallery.map((image, id) => (
                    <img
                      onContextMenu={(e) => e.preventDefault()}
                      key={id}
                      className="image1-home"
                      src={image}
                      alt="gallery image"
                    />
                  ))
                ) : (
                  <p>Currently, no images available to display.</p>
                )}
              </div>
            )}
            {currentView === "reviews" && (
              <div className="reviews-container">
                <div className="flex-review">
                  <span className="stars">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </span>
                  <h3>20 Reviews</h3>
                  <div className="sort-by">
                    <label>Sort By:</label>
                    <select>
                      <option value="popular">Popular</option>
                    </select>
                  </div>
                </div>

                <div className="review-list">
                  <div className="review">
                    <h3>Jacob</h3>
                    <div className="flex-start">
                      <span className="stars">
                        &#9733;&#9733;&#9733;&#9733;&#9733;
                      </span>
                      <p className="stars">4.5 Stars</p>
                      <p className="date">1 Week Ago</p>
                    </div>

                    <p>
                      We loved our experience at Bloukrans Bungee. It was a
                      really busy, loud, true Bungee atmosphere. The team was
                      excellent, the rope is absolutely fantastic, and the fall
                      felt really good. And oh my word, don`&apos;`teven get me
                      started on their locale.
                    </p>
                  </div>
                  <div className="gray-line"></div>
                  <div className="review">
                    <h3>Jacob</h3>
                    <div className="flex-start">
                      <span className="stars">
                        &#9733;&#9733;&#9733;&#9733;&#9733;
                      </span>
                      <p className="stars">4.5 Stars</p>
                      <p className="date">1 Week Ago</p>
                    </div>

                    <p>
                      We loved our experience at Bloukrans Bungee. It was a
                      really busy, loud, true Bungee atmosphere. The team was
                      excellent, the rope is absolutely fantastic, and the fall
                      felt really good. And oh my word, don`&apos;`t even get me
                      started on their locale.
                    </p>
                  </div>
                  <div className="review">
                    <h3>Jacob</h3>
                    <div className="flex-start">
                      <span className="stars">
                        &#9733;&#9733;&#9733;&#9733;&#9733;
                      </span>
                      <p className="stars">4.5 Stars</p>
                      <p className="date">1 Week Ago</p>
                    </div>

                    <p>
                      We loved our experience at Bloukrans Bungee. It was a
                      really busy, loud, true Bungee atmosphere. The team was
                      excellent, the rope is absolutely fantastic, and the fall
                      felt really good. And oh my word, don`&apos;`t even get me
                      started on their locale.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="parent-btn">
          <button className="view-btn">view availability</button>
        </div>

        <div className="item6">
          <h1>Find Availability For</h1>
          <div className="show-flex">
            <div className="page-icon-flex">
              <input
                className="input-fl"
                type="number"
                value={adults}
                onChange={handleAdultChange}
              />{" "}
              Adult
            </div>

            <div className="page-icon-flex">
              <input
                className="input-fl"
                type="number"
                value={children}
                onChange={handleChildrenChange}
              />{" "}
              Children
            </div>
            <h3>Date</h3>
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
            <div className="navigation-buttons">
              <button onClick={handlePreviousDay} disabled={!hasPreviousDate}>
              <img className="left-size" src={left} alt="" />{" "}
              </button>
              <button onClick={handleNextDay} disabled={!hasNextDate}>
              <img className="left-size" src={right} alt="" />{" "}

              </button>
            </div>

            <div className="time-slot-table">
              <table>
                <thead>
                  <tr>
                    <th>Time/Day</th>
                    {scheduleData.length > 0 &&
                      Object.keys(scheduleData[0])
                        .filter((key) => key !== "time")
                        .map((day) => <th key={day}>{day}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {isDataAvailable ? (
                    scheduleData.map((row, index) => (
                      <tr key={index}>
                        <td>{row.time}</td>
                        {Object.keys(row)
                          .filter((key) => key !== "time")
                          .map((day) => (
                            <td
                              key={day}
                              className={
                                row[day] === "Full"
                                  ? "slot-unavailable"
                                  : row[day] === "Available" &&
                                    row.time === selectedTime &&
                                    day === selectedDate
                                  ? "slot-selected"
                                  : "slot-available"
                              }
                              onClick={() =>
                                row[day] === "Available" &&
                                handleTimeSlotSelection(row.time, day)
                              }
                            >
                              {row[day]}
                            </td>
                          ))}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={
                          scheduleData.length > 0
                            ? Object.keys(scheduleData[0]).length
                            : 1
                        }
                      >
                        No activities scheduled for this date. Please select
                        another date.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="total">
            <h1>R{totalPrice} in total</h1>
            <div className="text-flex">
              For{" "}
              <h3>
                {adults} Adult{adults !== 1 && "s"}
              </h3>{" "}
              and <h3>{children} Children</h3>
            </div>
            <div className="text-flex">
              at <h3>{selectedTime}</h3> on<h3>{selectedDate}</h3>
            </div>

            <div className="total-flex">
              <img src={img2} alt="" />
              <img src={img4} alt="" />
              <img src={img5} alt="" />
              <img src={img3} alt="" />
            </div>
            <div className="now-btn">
              <button onClick={goTCart} className="btn-now">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="parent-btn"></div>
      </div>
    </main>
  );
}
