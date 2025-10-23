import Image from "next/image";
import NavebarPage from "@/components/header";
import ImgPage from "@/components/img";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col  p-24">
      <nav className="container flex items-center justify-between mx-auto h-14">
       <ImgPage />
        
      </nav>
      
    </div>
  );
}