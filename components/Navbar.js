import Link from "next/link";
import { AddIcon } from '@chakra-ui/icons'

const Navbar = () => {

    return (
        <nav>
            <div className='logo text-4xl'>
                <Link href="/"><h1 className="cursor-pointer">All in Quote</h1></Link>
            </div>
            <div className="category text-xl font-semibold">
                <Link href="/category/life"><a>Life</a></Link>
                <Link href="/category/work"><a>Work</a></Link>
                <Link href="/category/entertain"><a>Entertain</a></Link>
            </div>
            <div className='text-2xl '>
                <Link href="/addquote"><a>Share your favorite <AddIcon w={4} h={4} /></a></Link>
            </div>
        </nav>
    );
}

export default Navbar;