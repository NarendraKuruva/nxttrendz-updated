import styled from 'styled-components'

export const RatingFilterItemCont = styled.li`
   display: flex;
   align-items: center;
   margin: 0px;
   cursor: pointer;
   color: ${props => (props.activeStatus === true ? '#0967d2' : '#64748b')};
`
export const RatingItemsCont = styled.ul`
   display: flex;
   flex-direction: column;
`
export const RatingListContainer = styled.div``

export const RatingsMainContainer = styled.div``

export const StlyedRatingStarsImg = styled.img`
   width: 120px;
`

export const RatingStarImgContainer = styled.div``

export const CategoryItemsContainer = styled(RatingItemsCont)``
export const CategoryOptionsContainer = styled.div``
export const CategoryItemsMainContainer = styled.div``

export const FiltersContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   padding: 15px;
`
export const HeadingTwo = styled.h2`
   font-size: 17px;
   font-weight: bold;
`
export const RatingHeading = styled.h2`
   font-size: 17px;
   font-weight: bold;
`
export const CategoryHeading = styled(RatingHeading)``

export const ClearFiltersBtn = styled.button`
   border: 1px solid #0b69ff;
   color: #0b69ff;
   padding-left: 20px;
   padding-right: 20px;
   border-radius: 8px;
   margin-top: 10px;
`
export const FilterSearchContainer = styled.div`
   display: flex;
   align-items: center;
   background-color: lightgrey;
   padding: 8px;
   width: auto;
   justify-content: space-between;
   border-radius: 8px;
`
export const FilterSearchInput = styled.input`
   outline: none;
   background-color: transparent;
   ::placeholder,
   ::-webkit-input-placeholder {
      color: black;
   }
`
export const CategoryItem = styled.li`
   color: ${props => (props.activeStatus === true ? '#0967d2' : '#64748b')};
   margin: 0px;
   cursor: pointer;
`
export const CategoryItemText = styled.p`
   color: ${props => props.color};
   font-size: ${props => props.size}px;
   margin-left: 0px;
`
