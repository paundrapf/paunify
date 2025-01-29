import Link from "next/link"

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="/" className="text-white hover:text-green-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-green-400 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/privacy-policy" className="text-white hover:text-green-400 transition-colors">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-green-400 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation

