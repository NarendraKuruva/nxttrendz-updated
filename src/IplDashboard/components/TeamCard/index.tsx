import React from 'react'
import { Link } from 'react-router-dom'

import { HomeCard, TeamImage } from '../styledComponents'

interface TeamCardProps {
   cardDetails: {
      name: string
      id: string
      teamImageUrl: string
   }
}

const TeamCard = ({ cardDetails }: TeamCardProps): JSX.Element => {
   const { name, id, teamImageUrl } = cardDetails

   return (
      <Link to={`/ipl/${id}`}>
         <HomeCard>
            <div>
               <TeamImage src={teamImageUrl} />
            </div>
            <h2>{name}</h2>
         </HomeCard>
      </Link>
   )
}

export default TeamCard
