import EmailIcon from "@/assets/icons/EmailIcon"
import GithubIcon from "@/assets/icons/GithubIcon"

const Header = () => {
  return (
    <nav className="flex">
      <p className="text-5xl text-center">Portfolio</p>
      <ul>
        <li>About</li>
        <li>Stack</li>
        <li>Experience</li>
      </ul>
      <ul>
        <li><EmailIcon /></li>
        <li><GithubIcon /></li>
      </ul>
    </nav>
  )
}

export default Header