import styled from 'styled-components'

export const StyledHomePage = styled.div`
   background-image: url('https://assets.ccbp.in/frontend/react-js/ipl-dashboard-lg-bg.png');
   bg-cover;
   p-3;
   font-family:"Bree Serif";
   color:white;
   height:100vh;
   width:768px;
   display:flex;
   flex-direction:column;
   justify-content:center;
`
export const CenterContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`
export const StyledMainHeading = styled.h1`
   font-weight: bold;
   font-size: 35px;
   font-style: 'Bree Serif';
`
export const HomeCard = styled.div`
   background-color: #ffffff33;
   border: 1px solid #ffffff;
   border-radius: 8px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 250px;
   padding: 15px;
   height: 120px;
   margin: 8px;
`
export const TeamImage = styled.img`
   width: 60px;
`
export const FlexRowContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   overflow: auto;
`
export const LatestMatchCard = styled.div`
   background-color: #0f172a;
   color: white;
   display: flex;
   // justify-content: space-between;
   padding: 15px;
   font-family: 'Bree Serif';
   width: 100%;
   border-radius: 8px;
`
export const FlexColumnContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
`
export const LatestMatchImg = styled.img`
   width: 250px;
   padding: 10px;
`
export const TeamImg = styled.img`
   width: 100%;
`
export const MatchStyledCard = styled.div`
   width: 200px;
   padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   background-color: #0e1629;
   border-radius: 20px;
   color: white;
   height: 300px;
   margin-top: 10px;
   margin-bottom: 10px;
`
export const HeadingTwo = styled.h2`
   font-size: 20px;
   font-weight: bold;
`
export const MatchStatus = styled.p`
   color: ${props => (props.match_status === 'Won' ? 'green' : 'red')};
`
