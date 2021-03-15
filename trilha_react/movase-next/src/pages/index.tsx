import React from 'react'
import { ExperienceBar } from '../components/ExperienceBar'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { Profile } from '../components/Profile'
import styles from '../styles/pages/Home.module.css'
import CompletedChallenges from '../components/CompletedChallenges'
import CountDown from '../components/CountDown'
import { ChallengeBox } from '../components/ChallengeBox'
import { CountdownProvider } from '../contexts/CountdownContext'


export default function Home(props) {
    console.log(props)

    return (
      <div className={styles.container} >
         <Head>
            <title>Início | mova-se</title>
         </Head>
         <ExperienceBar />

         <CountdownProvider>
            <section>
               <div>
                  <Profile />
                  <CompletedChallenges />
                  <CountDown />
               </div>
               <div>
                  <ChallengeBox />
               </div>
            </section>
         </CountdownProvider>
      </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
   const { level, currentExperience, challengesCompleted } = ctx.req.cookies
      
   return {
      props: { level, currentExperience, challengesCompleted }
   }
}








