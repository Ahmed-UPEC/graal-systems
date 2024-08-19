import { Icon } from "@iconify/react";

import { Input } from "@/components/ui/input";

import contact from "../assets/illustration/contact.png";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function Contact() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 mx-auto w-10/12 sm:w-8/12 xl:w-9/12 my-24 gap-4 container">
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
      <form className="flex flex-col justify-evenly">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input type="text" name="name" required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>

          <Input name="email" type="email" required />
        </div>
        <div className="">
          <Label htmlFor="message">Your email address</Label>
          <Textarea name="message" required />
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
