import React from "react";

export default function About() {
  return (
    <div
      className="flex flex-col w-full items-center mt-10 md:mt-14 "
      id="about"
    >
      <p className="text-4xl font-bold">About Us</p>
      <div className="text-gray-500 text-xl w-full md:w-8/12 text-center my-4">
        Helping Hands Foundation Surat is committed to uplifting underprivileged
        children, especially those from single-parent homes or orphaned
        backgrounds, by providing educational support, including fees, and
        offering classes in Computer Literacy, English, and Mathematics for
        primary students. Our programs aim to not only educate but also spread
        kindness and happiness across communities.
        <p className="py-3">Our key programs include</p>
        <div className="flex flex-col gap-2">
          <p>Kanya Pujan and Mata Pita Ne Vandan.</p>
          <p>
            Distribution of clothes and food in slum areas, Anganwadis, and
            shelter homes.
          </p>
          <p>Supplying notebooks and stationery to SMC schools.</p>
          <p>Providing grains to less fortunate families.</p>
          <p>
            Regular visits to old age homes to spend quality time with elders,
            cheering them and spreading joy.
          </p>
        </div>
        Through these initiatives, we work to bridge the educational and
        emotional gaps for those in need, striving to create a brighter, more
        compassionate future for all.
      </div>
    </div>
  );
}
