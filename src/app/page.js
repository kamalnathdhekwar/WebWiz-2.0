import CenterComponent from "@/components/CenterComponent";
import LandingPage from "@/components/LandingPage";
import Image from "next/image";
import './index.css'


export default function Home() {
  return (
    <>
      <LandingPage />
      <CenterComponent />
    </>
  );
}
