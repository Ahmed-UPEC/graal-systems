"use client";

import React, { useRef } from "react";
import { Icon } from "@iconify/react";

import emailjs from "@emailjs/browser";

import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

import contact from "../assets/illustration/contact.png";

export default function Contact() {
  const ContactForm = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm("service_7aueaoo", "template_exyn1v4", ContactForm.current!, {
        publicKey: "aS2_g2-jQgd5phceP",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          document.querySelector("form")?.reset();
          document.getElementById("submit-message")!.innerText =
            "Message sent successfully!";
          setTimeout(() => {
            document.getElementById("submit-message")!.innerText = "";
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 mx-auto my-24 gap-4 container">
      <div className="flex flex-col gap-2 justify-between">
        <h2 className="font-semibold text-2xl">Contact us</h2>
        <p className="text-base my-2">
          Let&apos;s make something awesome together
        </p>
        <button className="text-left p-2 pl-4 rounded-md text-lg bg-fuchsia-500 w-fit text-white flex items-center gap-4">
          <Icon icon="mdi:phone" />
          +33 1 39 49 58 39
        </button>
        <button className="text-left p-2 pl-4 rounded-md text-lg bg-fuchsia-500 w-fit text-white flex items-center gap-4">
          <Icon icon="mdi:at" />
          contact@graal.systems
        </button>
        <div className="my-2">
          <p>7 rue de chartres</p>
          <p>92200 NEUILLY-SUR-Seine</p>
          <p>France</p>
        </div>
      </div>
      <form
        ref={ContactForm}
        onSubmit={sendEmail}
        className="flex flex-col justify-evenly gap-4"
        autoComplete="off"
        id="contact-form"
      >
        <div className="flex flex-col">
          <Label htmlFor="name" className="text-base">
            Name
          </Label>
          <Input
            type="text"
            name="from_name"
            required
            className="focus-visible:ring-transparent"
          />
        </div>
        <div className="flex flex-col">
          <Label htmlFor="email" className="text-base">
            Email
          </Label>

          <Input
            name="from_email"
            type="email"
            required
            className="focus-visible:ring-transparent"
          />
        </div>
        <div className="flex flex-col">
          <Label htmlFor="message" className="text-base">
            Message
          </Label>
          <Textarea
            name="message"
            required
            className="focus-visible:ring-transparent"
          />
        </div>
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-black hover:bg-neutral-200 hover:text-black transition-all duration-300 text-white text-sm py-2 px-4 rounded-md flex items-center"
          >
            Send &nbsp;
            <Icon icon="formkit:submit" />
          </button>
          <p id="submit-message" className="text-fuchsia-500 font-medium"></p>
        </div>
      </form>
      <img
        src={contact.src}
        alt="contact illustration"
        className="w-full max-w-[50%] xl:max-w-[80%] mx-auto"
      />
    </div>
  );
}
