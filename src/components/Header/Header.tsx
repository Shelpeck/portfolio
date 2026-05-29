import EmailIcon from "@/assets/icons/EmailIcon"
import GithubIcon from "@/assets/icons/GithubIcon"
import LinkedinIcon from "@/assets/icons/LinkedinIcon"
import TelegramIcon from "@/assets/icons/TelegramIcon"

const list = "cursor-pointer"

const Header = () => {
  return (
    <nav className="fixed w-full flex py-2 border-b-gray-400 border-b-2 backdrop-blur z-1000 max-w-3xl justify-between gap-5 px-5 md:px-0">
      <p className="text-2xl text-center">Yershat<br /> Khabdrashit</p>
      <ul className="hidden md:flex flex-1 flex-row gap-4 items-center justify-end">
        <li className={list}><a href="#TechnicalStack">Technical Stack</a></li>
        <li className={list}><a href="#Experience">Experience</a></li>
      </ul>
      <a
        href="/CV.pdf"
        download="Yershat_Khabdrashit_CV.pdf"
        className="bg-secondary px-4 py-2 h-fit text-sm font-medium rounded-2xl cursor-pointer self-center whitespace-nowrap active:scale-95 transition-all inline-flex items-center justify-center hover:bg-secondary/90 shadow-md shadow-secondary/10"
      >
        Download CV
      </a>
      <ul className="hidden md:flex flex-row gap-1 items-center ">
        <li className={list}><a href="https://github.com/Shelpeck" target="_blank"><GithubIcon /></a></li>
        <li className={list}><a href="https://www.linkedin.com/in/yershat-khabdrashit/" target="_blank"><LinkedinIcon /></a></li>
        <li className={list}><a href="https://t.me/khabdrashit" target="_blank"><TelegramIcon /></a></li>
        <li className={list}><a href="mailto:yershhabdrashit@gmail.com" target="_blank"><EmailIcon /></a></li>
      </ul>
    </nav>
  )
}

export default Header