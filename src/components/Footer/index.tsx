import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="p-4 custom-container">
            <div className="flex justify-between">
                <div>
                    <Link href="/">
                        <h1 className="text-2xl font-bold tracking-tight text-white md:text-4xl cursor-pointer">Nock.ing</h1>
                    </Link>
                </div>
                <div className="flex justify-between mt-4 gap-8">
                    <div>
                        <ul>
                            <li className="pb-2">
                                <Link href="/community" className="text-white">Community</Link>
                            </li>
                            <li className="pb-2">
                                <Link href="/contact" className="text-white">Docs</Link>
                            </li>

                            <li className="mt-4">

                            </li>
                        </ul>
                    </div>

                    <div>
                    <Link href="https://app.nock.ing">
                        <button className="bg-white text-black px-4 py-2 rounded">Open App</button>
                    </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;