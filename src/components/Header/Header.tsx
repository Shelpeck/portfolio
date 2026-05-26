import EmailIcon from "@/assets/icons/EmailIcon"
import GithubIcon from "@/assets/icons/GithubIcon"
import LinkedinIcon from "@/assets/icons/LinkedinIcon"
import TelegramIcon from "@/assets/icons/TelegramIcon"

const list = "cursor-pointer"

const Header = () => {
  return (
    <nav className="fixed w-full flex py-2 border-b-gray-400 border-b-2 backdrop-blur z-1000 ">
      <p className="text-5xl text-center">Portfolio</p>
      <ul className="flex flex-1 flex-row gap-4 items-center justify-end pr-10">
        <li className={list}><a href="#TechnicalStack">Technical Stack</a></li>
        <li className={list}><a href="#Experience">Experience</a></li>
      </ul>
      <ul className="flex flex-row gap-1 items-center ">
        <li className={list}><a href="https://github.com/Shelpeck" target="_blank"><GithubIcon /></a></li>
        <li className={list}><a href="https://www.linkedin.com/in/yershat-khabdrashit/" target="_blank"><LinkedinIcon /></a></li>
        <li className={list}><a href="https://t.me/khabdrashit" target="_blank"><TelegramIcon /></a></li>
        <li className={list}><a href="mailto:yershhabdrashit@gmail.com" target="_blank"><EmailIcon /></a></li>
      </ul>
    </nav>
  )
}

export default Header