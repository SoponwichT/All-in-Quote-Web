import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import { QuoteCard } from '../components/quotecard'
import { useState, useEffect } from 'react'
import { Grid } from 'react-loading-icons'


export default function Home() {

  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = "https://allinquote-server.herokuapp.com/quotes";

  const getQuotes = async () => {
    try {
      const response = await fetch(API_URL);
      const responsedata = await response.json();
      setQuotes(responsedata);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getQuotes();
  }, [])

  const quoteData = quotes.data;
  const quoteElements = quoteData?.map(data => {
    return <QuoteCard key={data.id} quote={data} getQuotes={() => getQuotes()} />
  });

  return (
    <>
      {loading ? <div className='flex justify-center pt-8'><Grid fill='rgba(6,188,238,1)' /></div> : <div className='quote-container flex flex-row max-w-7xl mx-auto gap-y-24 gap-x-12 flex-wrap justify-left'>
        {quoteElements}
      </div>}
    </>
  )
}

