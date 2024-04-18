import arrow from "../assets/arrow-left.png";
import cart from "../assets/cart.png";
import user1 from "../assets/Rectangle 4573.png";
import email from "../assets/email.png";
import whatsapp from "../assets/whatsapp.png";
import vector3 from "../assets/Vector3.png";
import img2 from "../assets/Vector1.png";
import img3 from "../assets/Ellipse 22.png";
import img4 from "../assets/Group1.png";
import img5 from "../assets/kid.png";

export default function Requirement() {
  // Define days and timeslots
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const timeslots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  // Sample data for selected slots (You can replace it with actual data)
  const selectedSlots = {
    Tuesday: ["10:00 AM", "1:00 PM"],
  };
  return (
    <main id="home2">
      <div className="booking-title-flex">
        <img className="arrow" src={arrow} alt="" />

        <div className="booking-cart-flex">
          <img src={cart} alt="" />
          <h3>Cart</h3>
        </div>
      </div>
      <div className="parent2">
        <div className="item8">
          <img src={user1} alt="" />
        </div>
        <div className="item3">
          <h1>Bloukrans Bungee</h1>
          <p>
            Hey there, thrill-seekers! Are you ready to take your bravery to new
            heights? Look no further than Bloukrans Bungee - the most epic
            bungee jump experience on the planet!
          </p>
          <p>
            Picture this: You're standing on the edge of the world-famous
            Bloukrans Bridge, heart racing, butterflies fluttering in your
            stomach. The wind whistles in your ears as you gaze down at the
            stunning scenery below. You can feel the excitement building with
            each passing second.
          </p>
        </div>
        <div className="item10">
          <img src={user1} alt="" />
        </div>
        <div className="item9">
          <h1>Additional Add on </h1>
          <p>
            his activity offers a personalized media bundle for purchase. It
            consists of a certificate, your images, and a video of you jumping
            off of a 216m high bridge.
          </p>
          <p>
            This is available for purchase on-site or online via an emailed link
            sent to you once you have completed the activity. Check spelling
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
            <button className="button">Arrangements</button>
            <button className="button">Requirements</button>
            <button className="button">Gallery</button>
            <button className="button">Reviews</button>
          </div>

          <div className="border2">
            <div className="flex-p">
              <div className="use-flex">
                <h3>Minimum Age </h3>
              </div>

              <p>0 years</p>
            </div>
            <div className="flex-p">
              <div className="use-flex">
                <h3>Minimum Height </h3>
              </div>

              <p>0 years</p>
            </div>
            <div className="flex-p">
              <div className="use-flex">
                <h3>Maximum Height </h3>
              </div>

              <p>0.0 m</p>
            </div>
            <div className="flex-p">
              <div className="use-flex">
                <h3>Fitness Level </h3>
              </div>

              <p>No Fitness Requirement</p>
            </div>
            <div className="flex-p">
              <div className="use-flex">
                <h3>Qualifications </h3>
              </div>

              <p>Not Applicable</p>
            </div>
            <div className="flex-p">
              <div className="use-flex">
                <h3>Certification </h3>
              </div>

              <p>None Required</p>
            </div>
            <div className="flex-p">
              <div className="use-flex">
                <h3>Experience Level </h3>
              </div>

              <p>No Experience Requirement</p>
            </div>
          </div>
        </div>

        <div className="item6">
          <h1>Find Availability For</h1>
          <div className="show-flex">
            <div className="page-icon-flex">
              <span className="child-number">1</span> Adult
            </div>
            <h3>and</h3>
            <div className="page-icon-flex">
              <span className="child-number">0</span>Children
            </div>
            <h3>on</h3>
            <div className="pickup-date">
              <input type="date" id="pickupDate" name="pickupDate" />
            </div>
          </div>

          <div className="time-slot">
            <h3>Time Slots</h3>
            <div className="time-slot-table">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    {days.map((day) => (
                      <th key={day}>{day}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {timeslots.map((time) => (
                    <tr key={time}>
                      <td>{time}</td>
                      {days.map((day) => (
                        <td
                          key={day}
                          className={
                            selectedSlots[day] &&
                            selectedSlots[day].includes(time)
                              ? "selected"
                              : selectedSlots[day]
                              ? "full"
                              : "space"
                          }
                        >
                          {selectedSlots[day] &&
                          selectedSlots[day].includes(time)
                            ? "SELECTED"
                            : selectedSlots[day]
                            ? "FULL"
                            : "SPACE"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="total">
            <h1>R1,600 in total</h1>
            <div className="text-flex">
              For <h3>1 Adult </h3> and <h3>0 Children</h3>
            </div>
            <div className="text-flex">
              at <h3>09:00</h3> on<h3>2024-04-03</h3>
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
