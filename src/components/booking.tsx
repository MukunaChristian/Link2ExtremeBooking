import React, { useState } from "react";

export default function Booking() {
  const [inputs, setInputs] = useState([
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
  ]);

  const handleInputChange = (rowIndex, columnIndex, event) => {
    const newInputs = [...inputs];
    newInputs[rowIndex][columnIndex] = event.target.value;
    setInputs(newInputs);
  };

  const handleDelete = (rowIndex) => {
    const newInputs = [...inputs];
    newInputs[rowIndex] = ["", "", "", ""];
    setInputs(newInputs);
  };

  return (
    <main id="booking">
      <div className="booking-parent">
        <h1>Activity Booking</h1>
        <div className="line2"></div>

        <div className="big-flex">
          <div>
            <div className="flex-booking">
              <h3>1.Bloukrans Bungee Jump</h3>
              <div className="show-flex">
                <div className="page-icon-flex">
                  <input className="adult" type="text" />
                  Adult
                </div>
                <h3>and</h3>
                <div className="page-icon-flex">
                  <input className="adult" type="text" />
                  Children
                </div>
                <h3>on</h3>
                <p>09 March 2024 at 9am</p>
              </div>
            </div>
            <form>
              <div className="form-row">
              <h3>Adult</h3>
                <input
                  type="text"
                  value={inputs[0][0]}
                  onChange={(event) => handleInputChange(0, 0, event)}
                />
                <input
                  type="text"
                  value={inputs[0][1]}
                  onChange={(event) => handleInputChange(0, 1, event)}
                />
                <input
                  type="text"
                  value={inputs[0][2]}
                  onChange={(event) => handleInputChange(0, 2, event)}
                />
                <select
                  className="select-b"
                  value={inputs[0][3]}
                  onChange={(event) => handleInputChange(0, 3, event)}
                >
                  <option value="">Select</option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
                <button type="button" onClick={() => handleDelete(0)}>
                  <img src="app/assets/Vector.png" alt="" />
                </button>
              </div>

              <div className="form-row">
                <input
                  type="text"
                  value={inputs[1][0]}
                  onChange={(event) => handleInputChange(1, 0, event)}
                />
                <input
                  type="text"
                  value={inputs[1][1]}
                  onChange={(event) => handleInputChange(1, 1, event)}
                />
                <input
                  type="text"
                  value={inputs[1][2]}
                  onChange={(event) => handleInputChange(1, 2, event)}
                />
                <select
                  className="select-b"
                  value={inputs[1][3]}
                  onChange={(event) => handleInputChange(1, 3, event)}
                >
                  <option value="">Select</option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
                <button type="button" onClick={() => handleDelete(1)}>
                  <img src="app/assets/Vector.png" alt="" />
                </button>
              </div>

              <div className="form-row">
                <input
                  type="text"
                  value={inputs[2][0]}
                  onChange={(event) => handleInputChange(2, 0, event)}
                />
                <input
                  type="text"
                  value={inputs[2][1]}
                  onChange={(event) => handleInputChange(2, 1, event)}
                />
                <input
                  type="text"
                  value={inputs[2][2]}
                  onChange={(event) => handleInputChange(2, 2, event)}
                />
                <select
                  className="select-b"
                  value={inputs[2][3]}
                  onChange={(event) => handleInputChange(2, 3, event)}
                >
                  <option value="">Select</option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
                <button type="button" onClick={() => handleDelete(2)}>
                  <img src="app/assets/Vector.png" alt="" />
                </button>
              </div>
            </form>
          </div>
          <div className="child2-flex">
            <h3>Prices</h3>
            <h3>Bloukraans bungee jump Total:</h3>
            <h3>R4.800.00</h3>
            <h3 className="green">R4.200.00</h3>

          </div>
        </div>

        <div className="line"></div>

        <div className="big-flex">
          <div>
          <div className="flex-booking">
              <h3>2.Bloukrans Skywalk</h3>
              <div className="show-flex2">
                <div className="page-icon-flex">
                  <input className="adult" type="text" />
                  Adult
                </div>
                <h3>and</h3>
                <div className="page-icon-flex">
                  <input className="adult" type="text" />
                  Children
                </div>
                <h3>on</h3>
                <p>09 March 2024 at 9am</p>
              </div>
            </div>
            <form>
              <div className="form-row">
                <h3>Adult</h3>
                <input
                  type="text"
                  value={inputs[0][0]}
                  onChange={(event) => handleInputChange(0, 0, event)}
                />
                <input
                  type="text"
                  value={inputs[0][1]}
                  onChange={(event) => handleInputChange(0, 1, event)}
                />
                <input
                  type="text"
                  value={inputs[0][2]}
                  onChange={(event) => handleInputChange(0, 2, event)}
                />
                <select
                  className="select-b"
                  value={inputs[0][3]}
                  onChange={(event) => handleInputChange(0, 3, event)}
                >
                  <option value="">Select</option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
                <button type="button" onClick={() => handleDelete(0)}>
                  <img src="app/assets/Vector.png" alt="" />
                </button>
              </div>
              <div className="form-row">
                <input
                  type="text"
                  value={inputs[2][0]}
                  onChange={(event) => handleInputChange(2, 0, event)}
                />
                <input
                  type="text"
                  value={inputs[2][1]}
                  onChange={(event) => handleInputChange(2, 1, event)}
                />

                <button type="button" onClick={() => handleDelete(2)}>
                  <img src="app/assets/Vector.png" alt="" />
                </button>
              </div>
            </form>
          </div>
          <div className="child2-flex">
            <h3>Bloukrans Skywalk:</h3>
            <h3>R4.800.00</h3>
            <h3 className="green">R400.00</h3>
            <div className="booking-border">
                <div className="price-flex">
                    <p>Activities discount</p>
                    <h3 className="right">-R680.00</h3>
                </div>
                <div className="price-flex">
                    <p>Sub-Total (Excluding VAT)</p>
                    <h3 className="green">R4,600.00</h3>
                </div>
                <div className="price-flex">
                    <p>Total Including VAT</p>
                    <h3 className="right">R5,290.00</h3>
                </div>

            </div>
            <div className="flex-b">
                <button className="btn-b">Reset</button>
                <button className="btn-b">Go to Cart</button>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
