import { Link } from "react-router-dom"
export default function Nav () {
  return (
    <nav className="w-full bg-stone-100 p-3">
      <ul className="flex justify-center gap-2">
        <li >
          <Link className="border-b border-blue-400 " to='/home'>Experiences</Link>
        </li>
        <li >
          <Link className="border-b border-blue-400 " to='/filter'>Filters</Link>
        </li>
      </ul>
    </nav>
  )
}
