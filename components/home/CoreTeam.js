import React from "react";

export default function CoreTeam() {
  const cc = [
    {
      avatar: "/team/Sonal.png",
      name: "Sonal Sheth Master",
      position: "Founder",
    },
    {
      avatar: "/team/Ravish.png",
      name: "Ravish Sheth Magajwala",
      position: "co-founder",
    },
    {
      avatar: "/team/default-avatar.png",
      name: "Esshani Jignesh Patel",
      position: "Co-founder",
    },
    {
      avatar: "/team/default-avatar.png",
      name: "Saroj Doriwala",
      position: "Motivational Speaker and Entrepreneur",
    },
    {
      avatar: "/team/default-avatar.png",
      name: "Nikunj Patel",
      position: "Supervisor at Bajaj Automobiles",
    },
    {
      avatar: "/team/default-avatar.png",
      name: "Priyank Jariwala",
      position: "AWS Certified solutions Architect",
    },
    {
      avatar: "/team/default-avatar.png",
      name: "Roopa R Shah",
      position: "Child Physiologist",
    },
    {
      avatar: "/team/default-avatar.png",
      name: "Hetal Ben Naik",
      position: "President at Police Samanvay",
    },
    {
      avatar: "/team/default-avatar.png",
      name: "Priyanka Sherdiwala",
      position: "Mehendi Artist",
    },
    {
      avatar: "/team/default-avatar.png",
      name: "Dharini Ben Patel",
      position:
        "Principal at Pavan Nursery school and trustee at Shradha hospital Pandesara",
    },
  ];
  return (
    <div
      className="flex flex-col w-full items-center my-10 md:my-14 "
      id="team"
    >
      <p className="text-4xl font-bold">Core Team</p>
      <p className="text-gray-500 text-xl w-full md:w-8/12 text-center my-4">
        Teamwork is the fuel that allows common people to attain uncommon
        results.
      </p>
      <div className="w-max-[90vw] w-full md:w-8/12 overflow-x-auto">
        <div className="flex flex-row w-max flex-wrap">
          {/* Card */}
          {cc.map((cc, index) => (
            <div
              key={index}
              className="flex flex-col items-center m-2 p-4 py-10 brightness-90 rounded-md w-64"
            >
              <img
                src={cc.avatar}
                alt=""
                className="rounded-full w-20 h-20 md:w-28 md:h-28 object-cover ring ring-zinc-200"
              />
              <p className="font-medium mt-2 text-lg opacity-75">{cc.name}</p>
              <p className="text-zinc-500 text-center">{cc.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
