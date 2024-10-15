import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export const socialMediaIcons = [
  {
    icon: FaFacebook,
    alt: "Facebook",
    link: "https://www.facebook.com/helpinghandsfoundationsurat?mibextid=JRoKGi",
  },
  {
    icon: FaInstagram,
    alt: "Instagram",
    link: "https://www.instagram.com/helpinghandsfoundationsurat/profilecard/?igsh=MWl1MTF6em51cDZocQ==",
  },
  {
    icon: FaLinkedin,
    alt: "LinkedIn",
    link: "https://www.linkedin.com/in/sonal-seth-3521b3333/",
  },
];

export default function Footer() {
  return (
    <div className="pb-10">
      <div className=" bg-linear-pink-invert bg-zinc-100">
        <div className="mx-auto container pt-20 flex flex-col items-center justify-center">
          <div className="text-black flex flex-col md:items-center f-f-l pt-3 w-full">
            {/* <img
              src="/header_logo.png"
              alt=""
              className="h-12 lg:h-14 w-8/12 sm:w-auto self-center object-contain"
            /> */}
            <p className="text-2xl font-bold italic text-center">
              Helping Hands Foundation
            </p>
            <div className="my-6 text-base text-color f-f-l mx-4 opacity-60 text-center">
              <b>Address:</b> Vesu Surat
              <br />
              <b>Email:</b> helpinghandsfoundationsurat@gmail.com
              <br />
              <b>Mobile:</b> +91 99747 88973
            </div>
            <div className="flex gap-3 justify-center">
              {socialMediaIcons.map((icon, index) => (
                <Link key={index} href={icon.link}>
                  <icon.icon className="hover:text-[#BB5CF5] h-8 w-8" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
