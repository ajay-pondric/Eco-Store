import {useState} from "react";

const About = () => {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if(counter < 20) {
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if(counter > 0) {
      setCounter(counter - 1)
    }
  }
  return(
    <div className="about-us">
      <div className="container">
        <div className="row">
          <div className="column-3">
            <div className="about-section">
              <h5>This is about us section.</h5>
              <ul >
                <li>{counter}</li>
                <li>{counter}</li>
                <li>{counter}</li>
              </ul>
              <button onClick={addValue}>add value</button>
              <br/>
              <button onClick={removeValue}>remove value</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


