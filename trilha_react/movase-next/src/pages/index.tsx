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
