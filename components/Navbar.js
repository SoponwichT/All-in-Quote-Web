import Link from "next/link";
import { AddIcon } from '@chakra-ui/icons'

const Navbar = () => {

    return (
        <nav>
            <div className='logo text-4xl'>
                <h1>All in Quote</h1>
            </div>
            <div className="category text-xl font-semibold">
                <Link href="/"><a>Life</a></Link>
                <Link href="/"><a>Work</a></Link>
                <Link href="/"><a>Entertain</a></Link>
            </div>
            <div className='text-2xl '>
                <Link href="/addquote"><a>Share your favorite <AddIcon w={4} h={4} /></a></Link>
            </div>
        </nav>
    );
}

export default Navbar;