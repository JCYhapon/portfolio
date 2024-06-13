import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to your server
  };

  return (
    <section className="lg:px-[35px] xs:px-[10px]">
      <div className=" mt-[1rem] mb-[3rem]">
        <h1 className="xl:text-[55px] lg:text-[45px] xs:text-[25px] text-[35px]">
          Let's Work Together
        </h1>
        <p className="lg:text-[20px] mx-auto font-light text-gray-300">
          Want to build something cool? Send me an email.
        </p>
      </div>
      {/* EMAIL FORMAT */}
      <form
        onSubmit={handleSubmit}
        className="xl:px-[4rem] lg:px[3rem] md:px-[2rem]"
      >
        <div className="flex gap-4 xs:flex-col xs:gap-0 xl:flex-row lg:flex-row md:flex-row sm:flex-row lg:gap-4 md:gap-4 sm:gap-4 xl:gap-4 ">
          <div className="mb-4 w-full">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm text-gray-600"
            />
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="email" className="block text-sm font-medium ">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm text-gray-600"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium ">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm text-gray-600"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium ">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm text-gray-600"
          />
        </div>
        <button
          id="sendMessage"
          type="submit"
          className="py-[10px] px-[25px] font-semibold mt-3"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
