import Image from "next/image";
import img1 from "@/public/abcdfga.jpg"; 

export default function page() {
  return (
    <div>
        <Image src={img1} 
        alt="image 1"
        style={{width:"100%", height:"auto"}}
        width={0}
        height={0} 
        sizes="(max-width:300px)50vw, 100vw"
        quality={50} />

        <div>hh</div>
        
        <Image src="/../abcdfga.jpg" 
        alt="image 2
        quality={50}"
        style={{width:"100%", height:"auto"}}
        width={0}
        height={0} 
        sizes="100vw"
        quality={75} />
    </div>
  )
}
