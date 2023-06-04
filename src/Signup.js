import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./css/Style.css";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate("");
  const [formData, setFormData] = useState({});
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(formData['password'] === formData['confirm_password']){
    axios.post("http://localhost:3001/signup", formData)
      .then((response) => {
        console.log(response);
        if (response.data ===true) {
          navigate("/");
        }
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }
    else{
      alert ("Enter same value for password and confirm password fields")
    }
  }

  return (
    
    <section id="test1">
      <div className="container">
        <section>
          <h2
            className="text-center signup_heading"
            style={{ color: "#fff"}}
          >
            Create your account{" "}
          </h2>
        </section>
        <form className="signup_form  row" onSubmit={handleSubmit}>
          <div className="col-6">
            <div className="row demo1">
              <label
                htmlFor="firstname"
                className="col-5 text-center signup-input"
              >
                First Name
              </label>
              <input
                className="col-7 demo"
                type="text"
                name="firstname"
                pattern="[A-Za-z]+"
                id="firstname"
                placeholder="What is your First Name?"
                style={{ width: "200px" }}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="row demo1">
              <label
                htmlFor="lastname"
                className="col-5 text-center signup-input"
              >
                company Name
              </label>
              <input
                className="col-7 demo"
                type="text"
                name="companyname"
                pattern="[a-zA-Z]+"
                id="companyname"
                placeholder="What is your last Name?"
                style={{ width: "200px" }}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="row demo1">
              <label
                htmlFor="email_id"
                className="col-5 text-center signup-input"
              >
                Email Id
              </label>
              <input
                type="e-mail"
                className="col-7 demo"
                name="email_id"
                id="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                placeholder="Tell us Your Email ID"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="row demo1">
              <label
                htmlFor="password"
                className="col-5 text-center signup-input"
                required
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="col-7 demo"
                aria-hidden="true"
               pattern="/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g"
                placeholder="Create your Password"
                style={{ width: "200px" }}
                onChange={handleInputChange}
                required
              />
            </div>
            {/* <div className="row demo1">
              <label
                htmlFor="confirm_password"
                className="col-5 text-center signup-input"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirm_password"
                id="confirm-password"
                className="col-7 demo"
                aria-hidden="true"
                // pattern="/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g"
                placeholder="Confirm your Password"
                onChange={handleInputChange}
                required
              />
            </div> */}
            <div className="row demo1">
              <label
                htmlFor="mobile number"
                className="col-5 text-center signup_input"
              >
                Mobile Number
              </label>
              <input
                type="number"
                name="mobile_number"
                id="mobile_number"
                maxlength="10"
                className="col-7 demo"
                onChange={handleInputChange}
                placeholder="Mobile Number"
                required
              />
            </div>
            <div className="col-6">           
            <div className="row demo1">
              <label
                htmlFor="designation"
                className="col-5 text-center signup-input"
              >
                Your Role
              </label>
              <select
                name="designation"
                id="designation"
                className="col-7 demo"
                onChange={handleInputChange}
              >
                <option value="Select">Select</option>
                <option value="software developer">Software Developer</option>
                <option value="Software Tester">Software Tester</option>
                <option value="Web Developer">Web Developer</option>
                <option value="Python Developer">Python Developer</option>
                <option value="Automation Tester">Automation Tester</option>
                <option value="Manual Tester">Manual Tester</option>
                <option value="Senior Developer">Senior Developer</option>
                <option value="Team Leader">Team Leader</option>
                <option value="HR">HR</option>
                <option value="Junior Software Developer">Junior Software Developer</option>
                <option value="Technical support">Technical Support</option>
                <option value="senior enineer">Senior Software Engineer</option>
                <option value="Assistant Manager">Assistant Manager</option>
                <option value="Manager">Manager</option>
                <option value="Finance">Finance Analyst</option>
                <option value="Finance">Finance Manager</option>
                <option value="IOS">IOS Developer</option>
                <option value="MERN">MERN developer</option>
                <option value="MEAN">MEAN Developer</option>
                <option value="UI">UI Developer</option>
                <option value="Assistant Manager">Assistant Manager</option>
              </select>
            </div>
            
          </div>
          </div>
          <button className="btn btn-primary btn-secondary">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Signup;
