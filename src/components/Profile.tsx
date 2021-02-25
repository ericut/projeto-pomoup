import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/ericut.png" alt="Eric Frank Li" />
      <div>
        <strong>Eric Frank Li</strong>
        <p>
          <img src="icons/level.svg" alt="Level"></img>
          Level { level }
        </p>
      </div>
    </div>
  )
}