
import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="Enter Your Name" />
          </div>
          <div>
            <label>E-Mail</label>
            <input type="email" required placeholder="Enter Your Email" />
          </div>
          <div>
            <label>Message</label>
            <input type="text" required placeholder="Tell us about your query..." />
          </div>

          <button>Submit</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
