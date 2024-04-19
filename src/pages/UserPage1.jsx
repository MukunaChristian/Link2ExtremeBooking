import user1 from "../assets/Rectangle 4573.png";
import img2 from "../assets/Vector1.png";
import img3 from "../assets/Ellipse 22.png";
import img4 from "../assets/Group1.png";
import img5 from "../assets/kid.png";
import location from "../assets/location.png";
import cart from "../assets/cart.png";

export default function Home() {
  return (
    <main id="home1">
      <div className="title-flex">
        <h1 className="align">Bloukraans Site - Plettenberg Bay </h1>
        <div className="cart-flex">
          <img src={cart} alt="" />
          <h3>Cart</h3>
        </div>
      </div>

      <div className="parent1">
        <div className="item1">
          <img src={user1} alt="" />
        </div>
        <div className="item2">
          <h1>Bloukrans Bungee</h1>
          <div className="flex-img">
            <img src={location} alt="" />
            <p>Bloukrans River Bridge, Tsitsikamma</p>
          </div>
          <p>
            Hey there, thrill-seekers! Are you ready to take your bravery to new
            heights? Look no further than Bloukrans Bungee - the most epic
            bungee jump experience on the planet!
          </p>

          <h1 className="down">R1600.00 per person</h1>
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
                <h3>I’m Local</h3>
              </div>
            </div>
            <div className="flex1">
              <div className=" box">
                <img src={img3} alt="" />
                <h3>I’m Local</h3>
              </div>
              <div className=" box">
                <img src={img5} alt="" />
                <h3>I’m Local</h3>
              </div>
            </div>
          </div>

          <div className="book-flex1">
            <button className="btn-book">Book Now</button>
          </div>
        </div>
      </div>
      <div className="parent11">
        <div className="item1">
          <img src={user1} alt="" />
        </div>
        <div className="item2">
          <h1>Sky Walk Tour</h1>
          <div className="flex-img">
            <img src={location} alt="" />
            <p>Bloukrans River Bridge, Tsitsikamma</p>
          </div>
          <p>
            Hey there, thrill-seekers! Are you ready to take your bravery to new
            heights? Look no further than Bloukrans Bungee - the most epic
            bungee jump experience on the planet!
          </p>

          <h1 className="down">R1600.00 per person</h1>
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
                <h3>I’m Local</h3>
              </div>
            </div>
            <div className="flex1">
              <div className=" box">
                <img src={img3} alt="" />
                <h3>I’m Local</h3>
              </div>
              <div className=" box">
                <img src={img5} alt="" />
                <h3>I’m Local</h3>
              </div>
            </div>
          </div>

          <div className="book-flex1">
            <button className="btn-book">Book Now</button>
          </div>
        </div>
      </div>

      
    </main>
  );
}
