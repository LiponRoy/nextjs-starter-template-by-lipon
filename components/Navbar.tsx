"use client";
import Link from "next/link";

const allLinks = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
];
const Navbar = () => {
  return (
    <div className=' bg-blue-600 text-white  '>
      <div className="flex-between py-4 px-10">
      <Link href='/' className="px-4">
      <span>Logo</span>
        </Link>
      
      <div className="">
        {allLinks.map((link)=>(
          <Link key={link.id} href={link.url} className="px-4">
          {link.title}
        </Link>
        ))}
      </div>
      </div>
      
      </div>

  )
}

export default Navbar