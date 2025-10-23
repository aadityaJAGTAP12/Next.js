import NavebarPage from "@/components/header";
import ImgPage2 from "@/components/img";

export default function Performance() {
    return(
        <div className="flex min-h-screen flex-col  p-24">
        <nav className="container flex items-center justify-between mx-auto h-14">
            <h1>this is heading</h1>
            <ImgPage2 />
            <NavebarPage />
        </nav>
        </div>
    );
}
