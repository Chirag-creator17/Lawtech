"use client";
import Navbar from "@/ui/navbar/navbar";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AvatarGenerator } from "random-avatar-generator";

import React from "react";

import { FaBuildingColumns } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";

const lawyerProfile = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const aor = searchParams.get("aor");
  const court = searchParams.get("court");
  const type = searchParams.get("type");
  const stars = searchParams.get("stars");
  const location = searchParams.get("location");
  const fee = searchParams.get("fee");

  const generator = new AvatarGenerator();

  return (
    <div className="flex flex-col">
      {/* WHITE BG TOP ELEMENT DIV */}
      <Navbar />

      {/* GRAY BG IMAGE DIV */}
      <div className="bg-gray-100 flex-column">
        <div className="overflow-visible justify-center align-middle flex">
          <Image
            className="rounded-full"
            alt="Lawyer Image"
            src={generator.generateRandomAvatar()}
            width={150}
            height={300}
          />
        </div>
      </div>

      {/* NAME, RATING, ORGANISATION AND LOCATION DIV */}
      <div className="flex-column">
        {/* RATING STARS TO BE ADDED FOR A LAWYER */}
        <div className="flex justify-center">
          <div className="mt-2 text-2xl font-semibold">
            {/* WRAP IN ANOTHER DIV AND THEN ADD THE VERIFIED BATCH TO THE LAWYER PROFILE ON THE RIGHT SIDE OF NAME */}
            {name ? name : "Michael Cardamone"}
          </div>
          <div className="ml-3 mt-3 text-lg">{stars ? stars : "4"}</div>
          <IoMdStar className="mt-4" size={17} color="yellow" />
        </div>
        <div className="mt-1 flex justify-center">
          <FaBuildingColumns size={15} className="mt-1.5" />
          <div className="ml-2 text-lg">{type ? type : "Criminal Lawyer"}, {aor ? aor : "2245632"}</div>
        </div>
        <div className="text-center text-base mt-1">
          {court ? court : "Shahdara"}, {location ? location : "New Delhi"}
        </div>
      </div>

      {/* FOUR LINKS WITHIN PAGE DIV */}
      <div className="mt-3">
        <div className="flex pl-10">
          <Link href="/lawyerProfile">About</Link>
          <Link className="ml-7" href="/lawyerProfile">
            Contact
          </Link>
          <Link className="ml-7" href="/lawyerProfile">
            Resume
          </Link>
          <Link className="ml-7" href="/lawyerProfile">
            Chat
          </Link>
        </div>
        <hr className="mt-2 font-medium" />
      </div>

      {/* ABOUT AND PRACTICE AREA SECTION DIV */}
      <div>
        <div className="pl-10 mt-5 font-bold text-xl">
          About {name ? name : "Michael Cardamone"}
        </div>
        <div className="pl-10 mt-4">
          Greetings! I'm {name ? name : "Michael Cardamone"}, an accomplished
          attorney dedicated to providing comprehensive legal solutions tailored
          to your unique needs. With extensive experience spanning various
          practice areas including corporate law, commercial litigation,
          employment law, real estate law, and intellectual property, I bring a
          depth of knowledge and skill to every case I handle. My
          client-centered approach emphasizes open communication, transparency,
          and accessibility, ensuring that you are informed and empowered
          throughout the legal process. I believe in fostering strong,
          collaborative relationships with my clients, working diligently to
          understand your goals and concerns and crafting personalized
          strategies to achieve the best possible outcomes. With a steadfast
          commitment to integrity and professionalism, I uphold the highest
          ethical standards in every aspect of my practice. I invite you to
          reach out and schedule a consultation to discuss how I can assist you
          with your legal needs. Together, we can navigate the complexities of
          the legal system with confidence and clarity.
        </div>
      </div>
    </div>
  );
};

export default lawyerProfile;
