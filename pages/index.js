import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import { QuoteCard } from '../components/quotecard'

export default function Home() {

  return (
    <>
      <div className='quote-container flex flex-row max-w-7xl mx-auto gap-y-24 gap-x-12 flex-wrap justify-left'>
        <QuoteCard quote={{
          text: '"In summers, after 1 hour of extreme gaming you can use your laptop to iron your shirt."',
          author: "Your name",
          color: 0,
          category: "work"
        }} />
        <QuoteCard quote={{
          text: '"In summers, after 1 hour of extreme gaming you can use your laptop to iron your shirt."',
          author: "Your name",
          color: 1,
          category: "work"
        }} />
        <QuoteCard quote={{
          text: '"In summers, after 1 hour of extreme gaming you can use your laptop to iron your shirt."',
          author: "Your name",
          color: 2,
          category: "work"
        }} />
        <QuoteCard quote={{
          text: '"In summers, after 1 hour of extreme gaming you can use your laptop to iron your shirt."',
          author: "Your name",
          color: 3,
          category: "work"
        }} />
        <QuoteCard quote={{
          text: '"In summers, after 1 hour of extreme gaming you can use your laptop to iron your shirt."',
          author: "Your name",
          color: 3,
          category: "work"
        }} />
        
      </div>
    </>
  )
}
