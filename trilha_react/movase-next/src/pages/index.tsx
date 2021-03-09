import React from 'react'
import { ExperienceBar } from '../components/ExperienceBar'
import Head from 'next/head'
import { Profile } from '../components/Profile'
import styles from '../styles/pages/Home.module.css'
import CompletedChallenges from '../components/CompletedChallenges'
import CountDown from '../components/CountDown'


export default function Home() {
    return (
      <div className={styles.container} >
         <Head>
            <title>Início | mova-se</title>
         </Head>
         <ExperienceBar />

         <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <CountDown />
            </div>
            <div></div>
         </section>
      </div>
    )
}
