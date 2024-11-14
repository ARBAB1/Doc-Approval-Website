// app/Footer.js
"use client";
import React from "react";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/constant";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">GovLawFirm</h2>
            <p className="mt-2 text-gray-400 max-w-sm">
              Providing reliable and efficient government-related legal services, including NICOP registration, HEC attestation, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              {FOOTER_LINKS.map((link) => (
                <li key={link.title} className="mb-2">
                  <a href={link.href} className="hover:text-gray-300">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">123 Main Street, Islamabad, Pakistan</p>
            <p className="text-gray-400 mt-2">Phone: +92 300 1234567</p>
            <p className="text-gray-400 mt-2">Email: info@govlawfirm.com</p>
          </div>

          {/* Social Media Icons */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
                  <img src={social.icon} alt={`${social.name} icon`} className="h-6 w-6 hover:opacity-80" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4 text-gray-500">
          © {new Date().getFullYear()} GovLawFirm. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
