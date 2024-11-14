// app/services/[service]/page.js
"use client";
import { useParams } from 'next/navigation'; // Import useParams from next/navigation
import { useState } from 'react';

const serviceFormConfig = {
  "driving-license": {
    title: "Driving License Registration",
    fields: [
      { name: "fullName", label: "Full Name", type: "text" },
      { name: "cnic", label: "CNIC Number", type: "text" },
      { name: "address", label: "Address", type: "text" },
      { name: "phone", label: "Phone Number", type: "tel" },
      { name: "dob", label: "Date of Birth", type: "date" },
      { name: "expiry", label: "Expiry Date", type: "date" },
    ],
  },
  "nicop-registration": {
    title: "NICOP Registration",
    fields: [
      { name: "fullName", label: "Full Name", type: "text" },
      { name: "passportNumber", label: "Passport Number", type: "text" },
      { name: "email", label: "Email", type: "email" },
      { name: "phone", label: "Phone Number", type: "tel" },
      { name: "dob", label: "Date of Birth", type: "date" },
      { name: "expiry", label: "Expiry Date", type: "date" },
    ],
  },
  "hec-attestation": {
    title: "HEC Document Attestation",
    fields: [
      { name: "fullName", label: "Full Name", type: "text" },
      { name: "cnic", label: "CNIC Number", type: "text" },
      { name: "degree", label: "Degree Title", type: "text" },
      { name: "institution", label: "Institution Name", type: "text" },
      { name: "phone", label: "Phone Number", type: "tel" },
      { name: "dob", label: "Date of Birth", type: "date" },
    ],
  },
  // Add other services as needed
};

export default function ServicePage() {
  const { service } = useParams();  // Access service parameter from URL
  const [formData, setFormData] = useState({});
  const [document, setDocument] = useState(null);  // State to store uploaded document

  const serviceConfig = service ? serviceFormConfig[service] : null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDocument(file);  // Store the file in the state
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data for submission (including file)
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    // If a file is selected, add it to the form data
    if (document) {
      formDataToSend.append("document", document);
    }

    console.log("Form data being submitted:", formDataToSend);

    // Handle form submission, e.g., send to API endpoint
    // You can use fetch or Axios to send this data to your backend
    // Example using fetch:
    /*
    const response = await fetch("/your-api-endpoint", {
      method: "POST",
      body: formDataToSend,
    });

    const data = await response.json();
    console.log("Response:", data);
    */
  };

  if (!serviceConfig) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-6">{serviceConfig.title}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {serviceConfig.fields.map((field) => (
          <div key={field.name} className="flex flex-col">
            <label htmlFor={field.name} className="font-semibold">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              id={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        ))}
        
        {/* File Upload Section */}
        <div className="flex flex-col">
          <label htmlFor="document" className="font-semibold">
            Upload Document
          </label>
          <input
            type="file"
            name="document"
            id="document"
            onChange={handleFileChange}
            className="p-2 border border-gray-300 rounded-md"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
