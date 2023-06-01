import { About } from "../components/About"
import { YoutubeVideo } from "../components/YoutubeVideo"
import { SocialLinks } from "../components/SocialLinks"

export const Home = () => {
    return (
       <main>
        <About/> 
        <li className="block bg-[blue] px-3 py-3 text-white text-center mt-40"><a className='hover:underline' href="http://localhost:3000/télécharger">JOUER</a></li>
       </main>
    )
}