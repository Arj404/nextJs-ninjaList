import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <h2>Homepage</h2>
      <Footer/>
    </div>
  )
}
