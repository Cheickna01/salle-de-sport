import { Link } from "react-router-dom";
import Slider from "./Slider";
import Testimonial from "./Testimonial";
import ContactUs from "./ContactUs";
export default function Home() {
  return (
    <div className="homepage">
      <div className="first-section ">
        <div className="title-content">
          <h1 className="text-slate-100 title">B5 FITNESS</h1>
          <p className="text-slate-100 text-xl">
            là où performance et bien-être se rencontrent.
          </p>
          <button className="bg-red-600 text-slate-100 p-3 rounded hover:bg-red-700 mr-2 mt-5">
            Réjoignez nous
          </button>
          <button className="bg-black text-slate-100 p-3 rounded hover:bg-red-700">
            Essaie gratuit
          </button>
        </div>
      </div>

      <div className="third-container container mt-5">
        <div className="row">
          <div className="col-md-6 info1 ">
            <p className="mb-4 font-bold info-titre">
              Montez dans la meilleure balade de votre vie
            </p>
            <p>
              Prêt à pédaler? Réserver dès maintenant votre place et profitez
              d'une expérience inoubliable.
            </p>

            <button className="bg-black px-4 py-2 rounded mt-12 text-slate-100">
              <Link to={"/contact"}>Réserver ma place</Link>
            </button>
          </div>
          <div className="col-md-6 im1">
            <img src="/img/image2.webp" alt="fitness" />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6 im1">
            <img src="/img/image4.webp" alt="fitness" />
          </div>
          <div className="col-md-6 info1 ">
            <p className="mb-4 font-bold info-titre">
              Trouvez au plus vite votre rythme
            </p>
            <p>
              Venez découvrir un espace moderne dédié à votre bien-être et
              performance. Réservez votre séance et trouvez votre rythme avec
              des cours adaptés à tous les niveaux.
            </p>

            <button className="bg-black px-4 py-2 rounded mt-12 text-slate-100">
              <Link to={"/contact"}>Réserver ma place</Link>
            </button>
          </div>
        </div>
      </div>

      <div className=" container second-section">
        <h3>Notre mission</h3>
        <p>
          Découvrez B5, la nouvelle salle de sport dédiée à un entraînement
          complet. Nos séances de 45 minutes, alliant cyclisme en intérieur et
          cardio à haute intensité, sont conçues pour renforcer votre esprit,
          corps et âme. Nos instructeurs vous guideront à travers des montées,
          sprints, chorégraphies, poids et un moment final inspirant.
        </p>

        <h3 className="mt-5">Nos valeurs</h3>
        <div className="flex justify-around mt-5 mb-5">
          <div className="">
            <i class="fa-solid fa-wheelchair text-red-600" />
            <p className="font-semibold">Accessibilité</p>
          </div>
          <div className="">
            <i class="fa-solid fa-certificate text-red-600"></i>
            <p className="font-semibold">Qualité</p>
          </div>
          <div className="">
            <i class="fa-solid fa-person text-red-600"></i>
            <p className="font-semibold">Communauté</p>
          </div>
        </div>
      </div>

      <div className="fourth-container mt-[250px] md:mt-[200px] container">
        <h3 className="ser">Nos Services</h3>
        <p>Salle de musculation</p>
        <p>
          Notre salle est équipée des dernières machines pour travailler
          l’ensemble de vos groupes musculaires, ainsi que des poids libres pour
          un entraînement optimal.
        </p>
        <div className="flex flex-col gap-5 md:flex-row justify-around mt-[50px]">
          <div className="">
            <i class="fa-solid fa-person-praying text-red-600"></i>
            <p className="font-semibold">Yoga</p>
            <span className="text-xl">
              Relaxation, étirements, et équilibre.
            </span>
          </div>
          <div className="">
            <i class="fa-solid fa-person-running text-red-600"></i>
            <p className="font-semibold">Zumba</p>
            <span className="text-xl">
              Dance fitness pour brûler des calories en s'amusant.
            </span>
          </div>
          <div className="">
            <i class="fa-solid fa-dumbbell text-red-600"></i>
            <p className="font-semibold">Pilates</p>
            <span className="text-xl">
              Améliorez votre posture et votre flexibilité.
            </span>
          </div>
          <div className="">
            <i class="fa-solid fa-bicycle text-red-600"></i>
            <p className="font-semibold">Cyclisme en salle</p>
            <span className="text-xl">
              Entraînement cardiovasculaire intense sur vélo.
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-around items-center p-4 text-center">
        <div className="left">
          <h3 className="font-bold text-3xl">Entraînement personnalisé</h3>
          <p className="">
            Nos coachs certifiés vous proposeront des programmes sur mesure
            adaptés à vos besoins et objectifs. Vous pouvez réserver des séances
            privées ou en petits groupes.
          </p>
          <h3 className="font-bold text-3xl mt-10">Espace bien-être</h3>
          <p>
            Après votre entraînement, détendez-vous dans notre espace sauna et
            hammam pour une récupération optimale.
          </p>
        </div>
        <div className="right mt-4 md:mt-0">
          <Slider />
        </div>
      </div>

      <div className="tarifs text-center">
        <h3>Tarifs</h3>
        <div className="flex flex-col md:flex-row gap-6 items-center p-4 bg-red-700">
          <div className="bg-black rounded flex-grow p-4 text-slate-100 text-left min-h-[300px]">
            <h4 className="text-center">Abonnement mensuel</h4>
            <li>Accès illimité aux équipements et cours collectifs.</li>
            <li>Prix : 30000 f/mois</li>
            <h4 className="text-center">Pack 10 séances</h4>
            <li>10 séances de cours collectifs ou coaching personnel.</li>
            <li>Prix : 40000 f/mois</li>
            <h4 className="text-center">Séance individuelle avec coach</h4>
            <li>Séance personnalisée pour un suivi optimal.</li>
            <li>Prix : 50000 f/mois</li>
            <h4 className="text-center">Offre spéciale</h4>
            <li>Inscription gratuite pour toute souscription à un abonnement annuel.</li>
            <li>Prix : 60000 f/mois</li>
          </div>
          <div className="bg-black rounded flex-grow p-4 text-slate-100 text-left min-h-[315px]">
          <h4 className="text-center">Horaires</h4>
            <li>Inscription gratuite pour toute souscription à un abonnement annuel.</li>
            <li>Prix : 60000 f/mois</li>
          </div>
        </div>
      </div>

      <div className="temoignages text-center w-[450px] container mt-8">
        <h3 className="text-center">Témoignages</h3>
        <Testimonial/>
      </div>

      <div className="contact mt-8">
        <h3 className="text-center">Contactez-nous</h3>
        <ContactUs/>
      </div>
    </div>
  );
}
