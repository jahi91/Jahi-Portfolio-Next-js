import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaX,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://wa.me/+919101597411"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={30} />
      </a>
      <a
        href="https://www.instagram.com/just_jahi?igsh=em0wMWpkdHhucGRy"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={30} />
      </a>
      <a
        href="https://www.facebook.com/jahirul.hoque.3517563?mibextid=ZbWKwL"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook size={30} />
      </a>
      <a
        href="https://youtube.com/@justjahi91?si=ANgBdq5KFPq7nnDH"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube size={30} />
      </a>
    </footer>
  );
};

export default Footer;
