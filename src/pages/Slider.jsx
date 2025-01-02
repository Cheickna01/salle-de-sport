import { useEffect, useState } from "react";

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const images = ["../../img/image1.jpg","../../img/image2.webp","../../img/image4.webp"]
    const [path, setPath] = useState(images[currentSlide])
    useEffect(()=>{
        const id = setInterval(() => {
            if(currentSlide !== images.length-1){
                setPath(images[currentSlide])
                setCurrentSlide(currentSlide+1)
            }else{
                setCurrentSlide(0)
                setPath(images[currentSlide])
            }
        }, 3000);

        return()=> clearInterval(id)
    })

  return (
    <>
      <img src={currentSlide !== images.length ? images[currentSlide] : images[0]} alt="" className="w-[750px] min-w-[450px] rounded"/>
      <div className="flex gap-4 justify-center mt-3">
      {images.map((image,index)=>(
            <div key={index} className={currentSlide !== index ? "w-4 h-4 rounded-full border-2 border-black" : "w-4 h-4 rounded-full border-2 border-black bg-black"} onClick={()=>setCurrentSlide(index)}></div>
      ))}
      </div>
    </>
  );
}
