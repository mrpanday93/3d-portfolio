// "use client";
import dynamic from "next/dynamic";

const Home = dynamic(()=>import("@/components/homepage"),{
  ssr: false
});

export default Home;
