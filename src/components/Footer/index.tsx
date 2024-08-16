import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="p-4 custom-container">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-white md:text-4xl">Nock.ing</h1>
                </div>
            </div>
            <div className="flex justify-between mt-4">
                <div>
                    <ul>
                        <li className="pb-2">
                            <Link href="/" className="text-white">Home</Link>
                        </li>
                        <li className="pb-2">
                            <Link href="/about" className="text-white">About</Link>
                        </li>
                        <li className="pb-2">
                            <Link href="/contact" className="text-white">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="pb-2">
                            <Link href="/privacy-policy" className="text-white">Privacy Policy</Link>
                        </li>
                        <li className="pb-2">
                            <Link href="/terms-of-service" className="text-white">Terms of Service</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="pb-2">
                            <Link href="/cookie-policy" className="text-white">Cookie Policy</Link>
                        </li>
                        <li className="pb-2">
                            <Link href="/data-protection" className="text-white">Data Protection</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;