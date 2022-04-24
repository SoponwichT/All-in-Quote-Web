import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Link from "next/link";

import { fadeInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
  fadeInUp: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
  }
}

export const QuoteCard = ({ quote, getQuotes }) => {
  let quoteCard = (
    <div className="relative flex flex-col bg-green-100 rounded-md shadow-xl border-2 h-80 w-96 p-6">
      <div className="quote font-delius text-2xl">
        <p>{quote.text}</p>
      </div>
      <div className="author mt-auto ml-auto font-bold">
        <p>{quote.author}</p>
      </div>
      <div className="category capitalize text-slate-400">
        <p>{quote.category}</p>
      </div>
      <MyDropdown />
    </div>
  );
  if (quote.color === 0) {
    quoteCard = (
      <div className="relative flex flex-col bg-amber-100 rounded-md shadow-xl border-2 h-80 w-96 p-6">
        <div className="quote font-delius text-2xl">
          <p>{quote.text}</p>
        </div>
        <div className="author mt-auto ml-auto font-bold">
          <p>{quote.author}</p>
        </div>
        <div className="category capitalize text-slate-400">
          <p>{quote.category}</p>
        </div>
        <MyDropdown />
      </div>
    );
  }
  if (quote.color === 1) {
    quoteCard = (
      <div className="relative flex flex-col bg-blue-100 rounded-md shadow-xl border-2 h-80 w-96 p-6">
        <div className="quote font-mali text-2xl">
          <p>{quote.text}</p>
        </div>
        <div className="author mt-auto ml-auto font-bold">
          <p>{quote.author}</p>
        </div>
        <div className="category capitalize text-slate-400">
          <p>{quote.category}</p>
        </div>
        <MyDropdown />
      </div>
    );
  }
  if (quote.color === 2) {
    quoteCard = (
      <div className="relative flex flex-col bg-purple-100 rounded-md shadow-xl border-2 h-80 w-96 p-6">
        <div className="quote font-delius text-2xl">
          <p>{quote.text}</p>
        </div>
        <div className="author mt-auto ml-auto font-bold">
          <p>{quote.author}</p>
        </div>
        <div className="category capitalize text-slate-400">
          <p>{quote.category}</p>
        </div>
        <MyDropdown />
      </div>
    );
  }
  if (quote.color === 3) {
    quoteCard = (
      <div className="relative flex flex-col bg-stone-800 rounded-md text-white shadow-xl border-2 h-80 w-96 p-6">
        <div className="quote font-delius text-2xl">
          <p>{quote.text}</p>
        </div>
        <div className="author mt-auto ml-auto font-bold">
          <p>{quote.author}</p>
        </div>
        <div className="category capitalize text-slate-400">
          <p>{quote.category}</p>
        </div>
        <MyDropdown />
      </div>
    );
  }
  return (
    <StyleRoot>
      <div style={styles.fadeInUp}>{quoteCard}</div>
    </StyleRoot>
  );

  function MyDropdown() {
    const id = quote.id;
    async function remove() {
      await fetch("https://allinquote-server.herokuapp.com/quote/" + id, {
        method: "DELETE",
      });
      await getQuotes();
    }

    return (
      <div className="absolute top-4 right-4 ">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button>
              <HiDotsVertical />
            </Menu.Button>
          </div>
          {/* <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          > */}
            <Menu.Items className="absolute right-0 w-28 mt-2 origin-top-right bg-white rounded-md shadow-lg p-2 text-black">
              <Menu.Item>
                <Link
                  href={{ pathname: "/editquote", query: { id: quote.id } }}
                >
                  <div className="flex">
                    <AiOutlineEdit />
                    Edit
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <div className="flex" onClick={remove}>
                  <MdDelete />
                  Delete
                </div>
              </Menu.Item>
            </Menu.Items>
          {/* </Transition> */}
        </Menu>
      </div>
    );
  }
};
