import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form action="" className="flex flex-col max-w-[600px] w-full">
        <div className="p-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-400 text-gray-300">Contact</p>
          <p className="text-gray-300 py-4">// Submit the form below</p>
        </div>
        <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name" />
        <input className="bg-[#ccd6f6] my-4 p-2" type="e-mail" placeholder="Email" name="email" />
        <textarea className="bg-[#ccd6f6] p-2" name="message" rows="10" placeholder="Message"></textarea>
        <button className="text-white border-2 hover:bg-blue-400 hover:border-blue-400 px-4 py-3 my-8 mx-auto flex items-center">Let's Collaborate</button>

      </form>
    </div>
  );
}

export default Contact;
