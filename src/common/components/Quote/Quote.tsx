"use client";

import "react-phone-number-input/style.css";
import React, { useState } from "react";
import Image from "next/image";
import { heroAssets } from "@/assets/images";
import PhoneInput from "react-phone-number-input";
import emailjs from "@emailjs/browser";
import { toast, Bounce } from "react-toastify";

const Quote = () => {
  const [formData, setFormData] = useState<any>({
    first_name: "",
    email: "",
    message: "",
  });
  const [phone, setPhone] = useState();
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const formIsValid = formData.first_name && formData.email && formData.message;
  const submit = () => {
    if (!formIsValid) {
      return;
    }
    setLoading(true);
    const templateParams = { ...formData, phone };
    emailjs
      .send("service_4359vlj", "template_1udmb4l", templateParams, {
        publicKey: "h4Ty1Z7NivMNHmmiu",
      })
      .then(
        (response) => {
          toast.success("Quote Request Sent!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          setFormData(() => ({
            first_name: "",
            email: "",
            message: "",
          }));
          setPhone(() => undefined);
          setLoading(false);
        },
        (err) => {
          toast.error("Error Occured!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          setLoading(false);
        }
      );
  };

  return (
    <div
      id="quotes"
      className="relative w-full min-h-screen bg-services-bg pt-16 lg:pt-32 pb-8 md:pb-0"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start justify-between px-6 lg:px-0">
        <div className="lg:w-1/2 w-full">
          <button className="font-normal border-1 border-pill-border text-pill-grey transition bg-transparent font-matter text-base w-28 h-12 rounded-full">
            Services
          </button>
          <p className="text-black my-3 text-xl md:text-3xl text-left font-medium font-matter-medium">
            Get a quote
          </p>
          <p className="text-services-grey lg:px-0 text-sm md:text-base font-normal text-left">
            We have been waiting to hear from you, send in your <br /> quote
            request and let’s talk from there
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/2 w-full flex flex-col items-start justify-center">
          <label className="mt-3 text-label-color text-md" htmlFor="firstname">
            First name
          </label>
          <input
            type="text"
            name="first_name"
            id="firstname"
            required
            autoComplete="given-name"
            placeholder="Enter first name"
            value={formData.first_name}
            onChange={handleInputChange}
            className="w-full rounded-xl h-12 my-2 pl-5 border-1 border-pill-border placeholder:text-placeholder-color placeholder:text-sm"
          />
          <label className="mt-3 text-label-color text-md" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="given-email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full rounded-xl h-12 my-2 pl-5 border-1 border-pill-border placeholder:text-placeholder-color placeholder:text-sm"
          />
          <label className="mt-3 text-label-color text-md" htmlFor="phone">
            Phone number
          </label>
          <PhoneInput
            style={{ background: "#fff", fontSize: "14px" }}
            className="w-full rounded-xl h-12 my-2 pl-5 border-1 border-pill-border placeholder:text-placeholder-color placeholder:text-sm"
            placeholder="Enter phone number"
            value={phone}
            onChange={(value: any) => setPhone(() => value)}
          />
          <label className="mt-3 text-label-color text-md" htmlFor="message">
            Message
          </label>
          <textarea
            rows={5}
            name="message"
            id="message"
            placeholder="Leave us a message..."
            value={formData.message}
            onChange={handleInputChange}
            required
            className="w-full rounded-xl p-3 my-2 pl-5 border-1 border-pill-border placeholder:text-placeholder-color placeholder:text-sm"
          />
          <button
            onClick={submit}
            className="mt-6 flex items-center justify-center text-center hover:bg-blue-600 transition bg-primary-blue text-white font-matter font-normal text-base min-w-32 h-12 px-6 rounded-full"
            disabled={loading}
          >
            {loading ? (
              <svg
                className="text-center animate-spin h-6 w-6 rounded-full border-1 border-dashed border-white bg-transparent"
                viewBox="0 0 24 24"
              ></svg>
            ) : (
              "Send quote request"
            )}
          </button>
        </div>
      </div>
      <Image
        className="absolute hidden lg:block bottom-0 left-0"
        src={heroAssets.flower}
        priority
        alt="lines"
      />
    </div>
  );
};

export default Quote;
