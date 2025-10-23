
import ProductImage from "public/img.png";
import PerformanceImage from "public/img2.jpg";
import Image from "next/image";

function ImgPage() {
    return (
        <div className="relative screen "> 
            <div className="absolute z-10" >
            <Image src={ProductImage} alt="Picture of the author" width={700} height={800} />
            </div>
            <div>
                <h1>this is a n image </h1>
            </div>
        </div>
    );
}
export default ImgPage;

function ImgPage2() { 
    return (
        <div>
            <Image src={PerformanceImage} alt="Performance Image" width={250} height={500} />
        </div>
    );
}
export { ImgPage2 };