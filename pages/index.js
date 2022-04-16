import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import { QuoteCard } from '../components/quotecard'
import { useState, useEffect } from 'react'


export default function Home() {

  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_URL = "https://allinquote-server.herokuapp.com/quotes";

  const getQuotes = async () => {
    try {
      const response = await fetch(API_URL);
      const responsedata = await response.json();
      setQuotes(responsedata);
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getQuotes();
  }, [])

  const quoteData = quotes.data;
  const quoteElements = quoteData?.map(data => {
    return <QuoteCard quote={data} getQuotes={() => getQuotes()}/>
  });

  return (
    <>
      <div className='quote-container flex flex-row max-w-7xl mx-auto gap-y-24 gap-x-12 flex-wrap justify-left'>
        {quoteElements}
      </div>
    </>
  )
}

