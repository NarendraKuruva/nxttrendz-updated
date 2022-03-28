import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
   CenterContainer,
   FlexRowContainer,
   StyledHomePage,
   StyledMainHeading,
   TeamImage
} from '../styledComponents'
import TeamCard from '../TeamCard'

class Home extends Component {
   state = { isLoading: true, teamsList: [] }

   componentDidMount(): void {
      this.getTeamsData()
   }
   getTeamsData = async (): Promise<void> => {
      const response = await fetch('https://apis.ccbp.in/ipl')
      const data = await response.json()
      const teamsData = data.teams
      const updatedTeamsList = teamsData.map(eachTeam => ({
         id: eachTeam.id,
         teamImageUrl: eachTeam.team_image_url,
         name: eachTeam.name
      }))
      this.setState({ teamsList: updatedTeamsList, isLoading: false })
   }

   renderTeamCards = (): JSX.Element => {
      const { teamsList } = this.state
      return (
         <FlexRowContainer>
            {teamsList.map(eachTeam => (
               <TeamCard cardDetails={eachTeam} key={eachTeam} />
            ))}
         </FlexRowContainer>
      )
   }

   render(): JSX.Element {
      return (
         <CenterContainer>
            <StyledHomePage>
               <CenterContainer>
                  <FlexRowContainer>
                     {' '}
                     <TeamImage src='https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png' />
                     <StyledMainHeading>IPL Dashboard</StyledMainHeading>
                  </FlexRowContainer>
               </CenterContainer>
               {this.renderTeamCards()}
               <div>
                  <Link to='/'>
                     <button>My Projects</button>
                  </Link>
               </div>
            </StyledHomePage>
         </CenterContainer>
      )
   }
}

export default Home
