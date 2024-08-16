"use client";
import {usePathname} from "next/navigation";



const NavBar: React.FC = () => {
    const route: string = usePathname();
    return (
        <nav className="flex justify-between p-4 custom-container">
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-white md:text-4xl">Nock.ing</h1>
            </div>
                <ul className="flex justify-center items-center">
                    <li className="pr-4">
                        <a href="/" className={route === "/" ? "text-white" : "text-gray-400"}>Home</a>
                    </li>
                    <li className="pr-4">
                        <a href="/about" className={route === "/about" ? "text-white" : "text-gray-400"}>About</a>
                    </li>
                    <li className="pr-4">
                        <a href="/contact" className={route === "/contact" ? "text-white" : "text-gray-400"}>Contact</a>
                    </li>
                </ul>
        </nav>
    )
}

export default NavBar;