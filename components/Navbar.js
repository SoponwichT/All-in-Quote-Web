import Link from "next/link";
import { AddIcon } from '@chakra-ui/icons'

const Navbar = () => {
    const categories = ["Motivational",
    "Inspirational",
    "Positive",
    "Life",
    "Funny"]
    return (
        <nav>
            <div className='logo text-4xl'>
                <Link href="/"><h1 className="cursor-pointer">All in Quote</h1></Link>
            </div>
            <div className="category text-xl font-semibold">
                {categories.map(category => <Link key={category} href={`/category/${category}`}><a>{category}</a></Link>)}
            </div>
            <div className='text-2xl '>
                <Link href="/addquote"><a>Share your favorite <AddIcon w={4} h={4} /></a></Link>
            </div>
        </nav>
    );
}

export default Navbar;