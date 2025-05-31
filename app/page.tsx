import Idea from "./idea";

export default function Home() {
  return (
    <div className="">
      <main className="flex">
      <Idea name = {"Tennis"} price={3} description = {"Play tennis with a friend!"} outside = {true}/>
      </main>
    </div>
  );
}
