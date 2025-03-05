import Image from "next/image";

export default function AboutHero() {
  return (
    <div className="">
      <div className="">
        <Image
          src="/images/img0resize.png"
          width={3000}
          height={500}

          alt="hero-img"
        ></Image>
      </div>
    </div>
  );
}
