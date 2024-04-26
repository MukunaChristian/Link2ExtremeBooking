import user1 from "../assets/Rectangle 4573.png";
import img2 from "../assets/Vector1.png";
import img3 from "../assets/Ellipse 22.png";
import img4 from "../assets/Group1.png";
import img5 from "../assets/kid.png";
import location from "../assets/location.png";
import cart from "../assets/cart.png";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    async function fetchSitesAndActivities(operatorId) {
      try {
        const siteRes = await fetch(
          `https://staging.link2extreme.com/api/booking/${operatorId}/sites`
        );
        const siteData = await siteRes.json();

        const sitesWithActivities = await Promise.all(
          siteData.sites.map(async (site) => {
            const activityRes = await fetch(
              `https://staging.link2extreme.com/api/booking/${operatorId}/activities/per_site/${site.id}`
            );
            const activityData = await activityRes.json();
            return { ...site, activities: activityData.activities };
          })
        );

        setSites(sitesWithActivities);
      } catch (error) {
        console.error("Failed to fetch sites and activities:", error);
      }
    }

    fetchSitesAndActivities(1); // replace `1` with the actual operator ID
  }, []);
  return (
    <main id="home1">
      {sites.map((site, siteIndex) => (
        <div className="site-section" key={siteIndex}>
          <div className="title-flex">
            <h1 className="align">
              {site.site_name} - {site.site_location}
            </h1>
            <div className="cart-flex">
              <img src={cart} alt="Cart" />
              <h3>Cart</h3>
            </div>
          </div>
          <div className="activities-container">
            {site.activities.map((activity, activityIndex) => (
              <div className="parent1" key={activityIndex}>
                <div className="item1">
                  <img src={user1} alt={activity.activity_name} />
                </div>
                <div className="item2">
                  <h1>{activity.activity_name}</h1>
                  <div className="flex-img">
                    <img src={location} alt="Location" />
                    <p>{activity.activity_location}</p>
                  </div>
                  <p>{activity.activity_description}</p>
                  <h1 className="down">
                    R{activity.activity_price.toFixed(2)} per person
                  </h1>
                </div>
                <div className="item4">
                  <div className="color1">
                    <h3>Discounts Available</h3>
                    <div className="flex1">
                      <div className=" box">
                        <img src={img2} alt="" />
                        <h3>I’m Local</h3>
                      </div>
                      <div className=" box">
                        <img src={img4} alt="" />
                        <h3>Pensioner</h3>
                      </div>
                    </div>
                    <div className="flex1">
                      <div className=" box">
                        <img src={img3} alt="" />
                        <h3>Children U12 </h3>
                      </div>
                      <div className=" box">
                        <img src={img5} alt="" />
                        <h3>Specials</h3>
                      </div>
                    </div>
                  </div>
                  <div className="book-flex1">
                    <button className="btn-book">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
