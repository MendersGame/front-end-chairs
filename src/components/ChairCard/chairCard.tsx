// assets
import defaultPic from "../../assets/icons/Note.png"
// import { useState } from "react"
// components
// import VoteManager from "../VoteManager/VoteManager"

// types
import { Chair } from "../../types/models"
// import { ChairFormData } from "../../types/forms"

// import deleteButton from '../../assets/icons/delete.svg'
// import editButton from '../../assets/icons/edit.svg'
// import saveButton from '../../assets/icons/save.svg'

interface ChairCardProps {
  chair: Chair;
  // chairs: Chair[];
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