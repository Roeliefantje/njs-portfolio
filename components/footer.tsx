import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedinIn, faItchIo, faLinkedin, faYoutubeSquare, faXingSquare, faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/Roeliefantje"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithubSquare} className="text-white w-6 h-6 fill-white"/>
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="www.linkedin.com/in/roeliefantje"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-white w-6 h-6 fill-white"/>
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.youtube.com/@roeliefantje584"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutubeSquare} className="text-white w-6 h-6 fill-white"/>
          Youtube
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://roeliefantje.itch.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faItchIo} className="text-white w-6 h-6 fill-white"/>
          Itch.io
        </a>
      </footer>
    )
}