import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
            <Link href='/'>
                <a><Image src="/shot-quality-icon.png" alt="Logo" width={250} height={45}/></a>
            </Link>
            </div>
            <Link href='/'><a>Home</a></Link>
            <Link href='/teams'><a>Teams</a></Link>
            <Link href='/game'><a>Games</a></Link>
            <Link href='/about'><a>About</a></Link>
        </nav>
     );
}
 
export default Navbar;