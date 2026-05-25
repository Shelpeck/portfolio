import EmailIcon from "@/assets/icons/EmailIcon"
import GithubIcon from "@/assets/icons/GithubIcon"
import LinkedinIcon from "@/assets/icons/LinkedinIcon"

const list = "cursor-pointer"

const Header = () => {
  return (
    <nav className="flex border-b-gray-400 border-2 ">
      <p className="text-5xl text-center">Portfolio</p>
      <ul className="flex flex-1 flex-row gap-4 items-center justify-end pr-10">
        <li className={list}>About</li>
        <li className={list}>Stack</li>
        <li className={list}>Experience</li>
      </ul>
      <ul className="flex flex-row gap-1 items-center ">
        <li><GithubIcon /></li>
        <li><LinkedinIcon /></li>
        <li><EmailIcon /></li>
      </ul>
    </nav>
  )
}

export default Header