import React from 'react'

const Contact = () => {
    return (
        <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <form className="max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none" />
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none" />
          <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none" />
          <textarea placeholder="Your Message" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none" rows="4"></textarea>
          <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">Submit</button>
        </form>
      </section>
    )
}

export default Contact
