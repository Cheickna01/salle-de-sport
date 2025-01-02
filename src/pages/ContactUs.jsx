import ContactComponent from "./ContactComponent";
import { useState } from "react";
export default function ContactUs() {
  const [Datas, setDatas] = useState({
    prenom: "",
    nom: "",
    telephone: "",
    objet: "",
    email: "",
    canContact: false,
    typeContact: "Tel",
    message: "",
    touched: {
      prenom: false,
      nom: false,
      telephone: false,
      objet: false,
      email: false,
      message: false,
    },
  });

  return (
    <div>
      <ContactComponent Datas={Datas} setDatas={setDatas} />
    </div>
  );
}
