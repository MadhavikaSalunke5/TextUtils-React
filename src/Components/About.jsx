import React, { useState } from 'react';

function About() {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    transition: 'all 0.5s ease-in-out'
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode"); 
  const [btnClass, setBtnClass] = useState("btn btn-dark");

  const toggleStyle = () => {
    if (myStyle.color === 'white') {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
        border: '1px solid #ccc',
        transition: 'all 0.5s ease-in-out'
      });
      setBtnText("Enable Dark Mode");
      setBtnClass("btn btn-dark");
    } else {
      setMyStyle({
        color: 'white',
        backgroundColor: '#121212',
        border: '1px solid #444',
        transition: 'all 0.5s ease-in-out'
      });
      setBtnText("Enable Light Mode");
      setBtnClass("btn btn-light");
    }
  };

  return (
    <div className="container p-4 rounded" style={myStyle}>
      <h1 className="text-center mb-4">About Us</h1>
      
      <div className="accordion shadow rounded" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={{ backgroundColor: myStyle.backgroundColor, color: myStyle.color, fontWeight:"bold" }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>This is the first item’s accordion body.</strong> You can add content here that describes your app or feature in more detail.
            </div>
          </div>
        </div>
        {/* ... same for other accordion items */}
      </div>

      <div className="text-center mt-4">
        <button onClick={toggleStyle} type="button" className={btnClass}>
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default About;

