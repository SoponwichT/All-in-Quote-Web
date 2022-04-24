import Link from "next/link";
import { AddIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const categories = [
    "Motivational",
    "Inspirational",
    "Positive",
    "Life",
    "Funny",
  ];
  return (
    <nav className="flex flex-wrap py-4 px-12 gap-y-4 items-center mb-16">
      <div className=" text-4xl">
        <Link href="/">
          <h1 className="cursor-pointer">All in Quote</h1>
        </Link>
      </div>
      <div className="flex flex-wrap text-xl font-semibold mx-4 gap-x-12 gap-y-4 ml-12">
        {categories.map((category) => (
          <Link key={category} href={`/category/${category}`}>
            <a className="text-sky-900 hover:text-sky-500 transition-colors">
              {category}
            </a>
          </Link>
        ))}
      </div>
      <div className="text-2xl ml-auto">
        <Link href="/addquote">
          <a className="text-grey-900 hover:text-green-600 transition-colors">
            Share your favorite <AddIcon w={4} h={4} />
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
