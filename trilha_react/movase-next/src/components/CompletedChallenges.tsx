import styles from '../styles/components/CompletedChallenges.module.css'
import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'


export default function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext)

    return (
       <div className={styles.completedChallengesContainer} >
          <span>Desafios Completos</span>
          <span>{challengesCompleted}</span>
       </div>
    )
}