import React from 'react'
import {
   HeadingTwo,
   MatchStatus,
   MatchStyledCard,
   TeamImage
} from '../styledComponents'

interface MatchCardProps {
   matchCardDetails: {
      umpires: string
      result: string
      man_of_the_match: string
      id: string
      date: string
      venue: string
      competing_team: string
      competing_team_logo: string
      first_innings: string
      second_innings: string
      match_status: string
   }
}

const MatchCard = ({ matchCardDetails }: MatchCardProps): JSX.Element => {
   const {
      competing_team_logo,
      competing_team,
      result,
      match_status
   } = matchCardDetails

   return (
      <MatchStyledCard>
         <div>
            <TeamImage src={competing_team_logo} />
         </div>
         <HeadingTwo className='text-center'>{competing_team}</HeadingTwo>
         <p>{result}</p>
         <MatchStatus match_status={match_status}>{match_status}</MatchStatus>
      </MatchStyledCard>
   )
}

export default MatchCard
