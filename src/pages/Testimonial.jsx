import { useEffect, useState } from "react";

export default function Testimonial() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const temoignages = [
        {
            name: "Amadou Touré",
            texte: "La salle de sport de B5 a changé ma vie. Les coachs sont super motivants et les cours collectifs sont toujours fun. Je recommande vivement !"
        },
        {
            name: "Safiatou Barry",
            texte: "Des équipements de qualité et une ambiance conviviale, c’est ce que je cherchais. Je me sens plus en forme que jamais."
        },
    ]
    useEffect(()=>{
        const id = setInterval(() => {
            if(currentSlide !== temoignages.length-1){
                setCurrentSlide(currentSlide+1)
            }else{
                setCurrentSlide(0)
            }
        }, 3000);

        return()=> clearInterval(id)
    })

  return (
    <>
      <i class="fa-solid fa-user"></i>
      <p className="text-center text-xl font-bold">{temoignages[currentSlide].name}</p>
      <p className="text-center text-lg">{temoignages[currentSlide].texte}</p>
      <div className="flex gap-4 justify-center mt-3">
      {temoignages.map((image,index)=>(
            <div key={index} className={currentSlide !== index ? "w-4 h-4 rounded-full border-2 border-black" : "w-4 h-4 rounded-full border-2 border-black bg-red-700"} onClick={()=>setCurrentSlide(index)}></div>
      ))}
      </div>
    </>
  );
}
