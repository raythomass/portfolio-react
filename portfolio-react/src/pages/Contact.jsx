import { useState } from "react";

function Contact() {
    const [insertName, setName] = useState('');
    const [insertEmail, setEmail] = useState('');

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        return name === 'insertName' ? setName(value) : setEmail(value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        alert(`Hello ${insertName} from ${insertEmail}`)
    }



    return(
        <div className="submit-form">
      <h1>
        Contact Me
      </h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <h5>Name:</h5>
        <input
          value={insertName}
          name="insertName"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter Name"
        />
        <h5>Email:</h5>
        <input
          value={insertEmail}
          name="insertEmail"
          onChange={handleInputChange}
          type="email"
          placeholder="Enter Email"
        />
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
    )
}

export default Contact;