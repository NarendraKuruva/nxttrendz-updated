import React, { Component } from 'react'
import { Link, match } from 'react-router-dom' //eslint-disable-line
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import {
   CenterContainer,
   HeadingTwo,
   StyledHomePage,
   StyledMainHeading,
   TeamImg
} from '../styledComponents'
import './index.css'

interface TeamMatchesProps {
   match: match<Params>
}

interface Params {
   id: string
}
interface StateProps {
   teamMatches: {
      teamBannerUrl: string
      latestMatchDetails: {
         umpires: string
         result: string
         man_of_the_match: string
         id: string
         date: string
         venue: string
         competingTeam: string
         competingTeamLogo: string
         first_innings: string
         second_innings: string
         matchStatus: string
      }
      recentMatches: {
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
      }[]
   }
   isLoading: boolean
   isError: boolean
}

class TeamMatches extends Component<TeamMatchesProps, StateProps> {
   state: StateProps = {
      teamMatches: {
         teamBannerUrl: '',
         latestMatchDetails: {
            umpires: '',
            result: '',
            man_of_the_match: '',
            id: '',
            date: '',
            venue: '',
            competingTeam: '',
            competingTeamLogo: '',
            first_innings: '',
            second_innings: '',
            matchStatus: ''
         },
         recentMatches: []
      },
      isLoading: true,
      isError: false
   }

   componentDidMount(): void {
      this.fetchTeamMatches()
   }

   fetchTeamMatches = async (): Promise<void> => {
      const { match } = this.props
      const { params } = match
      const { id } = params
      const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
      const data = await response.json()

      if (data.error_message === 'Please Select Valid Team') {
         this.setState({ isError: true })
      } else {
         const updatedTeamMatches = {
            teamBannerUrl: data.team_banner_url,
            latestMatchDetails: data.latest_match_details,
            recentMatches: data.recent_matches
         }

         this.setState({ teamMatches: updatedTeamMatches })
      }
   }

   renderTeamMatches = (): JSX.Element => {
      const { teamMatches, isError } = this.state
      const recentMatches = teamMatches.recentMatches
      if (isError) {
         return (
            <CenterContainer>
               <StyledHomePage>
                  <CenterContainer>
                     <StyledMainHeading>Page Not Found !!!</StyledMainHeading>
                  </CenterContainer>
               </StyledHomePage>
            </CenterContainer>
         )
      }
      return (
         <div className='center'>
            <div className='team-detailed_view'>
               <Link to='/ipl'>
                  <button>Home</button>
               </Link>
               <TeamImg src={teamMatches.teamBannerUrl} />
               <HeadingTwo className='self-start'>Latest Match</HeadingTwo>
               {
                  <LatestMatch
                     latestMatchDetails={teamMatches.latestMatchDetails}
                  />
               }
               <div className='all-matches'>
                  {recentMatches.map(eachMatch => (
                     <MatchCard
                        matchCardDetails={eachMatch}
                        key={eachMatch.competing_team}
                     />
                  ))}
               </div>
            </div>
         </div>
      )
   }

   render(): JSX.Element {
      return <div>{this.renderTeamMatches()}</div>
   }
}
export default TeamMatches
