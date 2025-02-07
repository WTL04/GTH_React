interface Props {
  image: string;
  rank: string;
  name: string;
}

export default function LeaderCard({ image, rank, name }: Props) {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-[400px] bg-white font-raleway py-16 px-16 flex flex-col items-center">
          <img src={image} alt="img" className="h-[17rem] rounded-full" />
          <h2 className="text-center text-xl font-normal py-5">{rank}</h2>
          <p className="text-center text-base">{name}</p>
        </div>
      </div>
    </>
  );
}
