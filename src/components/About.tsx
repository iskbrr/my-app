
import { Routes, Route, NavLink } from 'react-router-dom';



export const About = () => {
    return (
       <section className="mb-5"> 
            <h1 className="text-3xl font-extrabold text-[blue]">Notre Jeu</h1>
            <p className="mt-5 text-center text-[white] text-2xl font-fammily ">Comme nous devons bien commencer quelque part, et puisque nous devons vous
                donner envie de jouer à notre jeu, laissez nous entamer motre présentation par un point
                que nous trouvons important, mais surtout très interessant. School Life, est un jeu
                de type "School RP", qui prend place, à EPITA. Oui oui, les élèves d’EPITA pourront effectivement incarner leur propre rôle dans ce jeu ou le but est de réussir son
                année.
                Le jeu se déroule dans l’établissement ÉPITA (modélisé à la sauce BoxOut) et le
                joueur incarnera donc un étudiant ayant pour but d’avoir la moyenne durant les
                qcm afin de passer son année
            </p>   
            
       </section>
    )
}