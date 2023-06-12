// assets
import defaultPic from "../../assets/icons/profile.png"

// components
// import VoteManager from "../VoteManager/VoteManager"

// types
import { Chair } from "../../types/models"

interface ChairCardProps {
  chair: Chair;
}

const ChairCard = (props: ChairCardProps): JSX.Element => {
  const { chair } = props

  return (
    <article>
      <img 
        src={chair.photo ? chair.photo : defaultPic} 
        alt={`${chair.name}`} 
      />
      <h1>{chair.name}</h1>
      {/* <VoteManager 
        chair={chair}
      /> */}
    </article>
  )
}

export default ChairCard