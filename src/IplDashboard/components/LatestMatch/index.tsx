import React from 'react'
import {
   FlexColumnContainer,
   LatestMatchCard,
   StyledMainHeading,
   LatestMatchImg,
   HeadingTwo
} from '../styledComponents'

interface LatestMatchProps {
   latestMatchDetails: { [key: string]: string }
}
const LatestMatch = ({ latestMatchDetails }: LatestMatchProps): JSX.Element => {
   const {
      umpires,
      result,
      man_of_the_match,
      date,
      venue,
      competing_team,
      competing_team_logo,
      first_innings,
      second_innings
   } = latestMatchDetails

   return (
      <div>
         <LatestMatchCard>
            <FlexColumnContainer>
               <StyledMainHeading>{competing_team}</StyledMainHeading>
               <p>{date}</p>
               <p>{venue}</p>
               <p>{result}</p>
            </FlexColumnContainer>
            <div>
               <LatestMatchImg src={competing_team_logo} />
            </div>

            <FlexColumnContainer className='text-right p-2'>
               <HeadingTwo>First Innings</HeadingTwo>
               <p>{first_innings}</p>
               <HeadingTwo>Second Innings</HeadingTwo>
               <p>{second_innings}</p>
               <HeadingTwo>Man of the Match</HeadingTwo>
               <p>{man_of_the_match}</p>
               <HeadingTwo>Umpires</HeadingTwo>
               <p>{umpires}</p>
            </FlexColumnContainer>
         </LatestMatchCard>
      </div>
   )
}
export default LatestMatch
