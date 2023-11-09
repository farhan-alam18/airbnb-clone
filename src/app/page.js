import Banner from "@/components/Banner";
import Header from "@/components/Header/Header";


export default function Home() {
  return (
    <>
      <div className="">
        <title>Farhan AirBnB</title>
        <link rel="icon" href="/favicon.ico" />

        <Header/>
        {/* Banner */}
        <Banner />

      </div >
    </>
  );
}