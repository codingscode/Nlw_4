import styles from '../styles/components/CountDown.module.css'
import { useContext, useEffect, useState } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'


let countdownTimeout: NodeJS.Timeout


export default function CountDown() {
    const { startNewChallenge } = useContext(ChallengesContext)
    
    const [time, setTime] = useState(3)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    function startCountdown() {
       setIsActive(true)
    }

    function resetCountdown() {
       clearTimeout(countdownTimeout)
       setIsActive(false)
       setTime(25*60)
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
              setTime(time - 1)
            }, 1000)
        }
        else if (isActive && time == 0) {
            console.log('finalizou')
            setHasFinished(true)
            setIsActive(false)
            startNewChallenge()
        }
         
    }, [isActive, time])

    return (
        <div>
            <div className={styles.countdownContainer} >
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
               <button disabled className={styles.countdownButton} >Ciclo encerrado</button>
            )
            : (
                <>
                    {isActive ? (
                        <button type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={resetCountdown} >
                           Abandonar ciclo
                        </button>
                    ) : (
                        <button type="button" className={`${styles.countdownButton}`} onClick={startCountdown} >
                           Iniciar ciclo
                        </button>
                    )}
                </>
              )
            }
        </div>
    )
}