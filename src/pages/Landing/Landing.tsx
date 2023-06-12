// css
import styles from './Landing.module.css'

// types
import { User } from '../../types/models'

interface LandingProps {
  user: User | null;
}

const Landing = (props: LandingProps): JSX.Element => {
  const { user } = props

  return (
    <main className={styles.container}>
      <h1>Musical Chairs</h1>
      <h2>Welcome, {user ? user.name : 'friend'}</h2>
    </main>
  )
}

export default Landing
