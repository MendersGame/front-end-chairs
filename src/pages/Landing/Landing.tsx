// css
import styles from './Landing.module.css'

import ChairCard from '../../components/ChairCard/chairCard';

// types
import { Chair } from '../../types/models'

interface ChairProps {
  chairs: Chair[];
}

const Landing = (props: ChairProps): JSX.Element => {
  const { chairs } = props

  if (!chairs.length) {
    return (
      <main className={styles.container}>
        <h1>Loading Chairs</h1>
      </main>
    )
  }
  return (
    <main className="list">
      {chairs.map((chair: Chair) => (
        <ChairCard
          key={chair.id}
          chair={chair}
        />
      ))}
    </main>
  )
}

export default Landing
