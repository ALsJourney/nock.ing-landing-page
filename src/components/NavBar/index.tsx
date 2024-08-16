"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavBar: React.FC = () => {
    const route: string = usePathname();
    return (
        <nav className="flex justify-between items-center p-4 custom-container">
            <div>
                <Link href="/">
                    <h1 className="text-2xl font-bold tracking-tight text-white md:text-4xl cursor-pointer">Nock.ing</h1>
                </Link>
            </div>
            <ul className="flex justify-center items-center">
                <li className="pr-4">
                    <Link href="/community" className={route === "/about" ? "text-white" : "text-gray-400"}>Community</Link>
                </li>
                <li className="pr-4">
                    <Link href="/contact" className={route === "/contact" ? "text-white" : "text-gray-400"}>Docs</Link>
                </li>
                <li className="pl-4">
                        <Link href="https://app.nock.ing">
                            <button className="bg-white text-black px-4 py-2 rounded">Open App</button>
                        </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;