import type { NextPage } from 'next'
import Head from 'next/head'
import Counter from '../features/counter/Counter'
import styles from '../styles/Home.module.css'
import AppBar from '../homepage-components/AppBar'

const IndexPage: NextPage = () => {
  return (
    <div>
      <AppBar />
    </div>
  )
}

export default IndexPage
