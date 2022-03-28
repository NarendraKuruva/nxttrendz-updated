import React from 'react'
import { BsSearch } from 'react-icons/bs'
import {
   CategoryItemsContainer,
   CategoryItemsMainContainer,
   CategoryOptionsContainer,
   FiltersContainer,
   HeadingTwo,
   OutlineBtn,
   RatingFilterItemCont,
   RatingItemsCont,
   RatingListContainer,
   RatingsMainContainer,
   RatingStarImgContainer,
   SearchContainer,
   StlyedRatingStarsImg,
   StyledInput,
   StyledListItem,
   StyledParagraph
} from '../styledComponents'
interface CategoryOptionType {
   name: string
   categoryId: string
}

interface RatingListType {
   ratingId: string
   imageUrl: string
}
interface FiltersGroupProps {
   searchInput: string
   categoryOptions: CategoryOptionType[]
   ratingsList: RatingListType[]
   activeCategoryId: string
   activeRatingId: string
   changeSearchInput: (searchInput: string) => void
   enterSearchInput: () => void

   changeCategory: (activeCategoryId: string) => void
   changeRating: (activeRatingId: string) => void
   clearFilters: () => void
}

const FiltersGroup = (props: FiltersGroupProps): JSX.Element => {
   const {
      searchInput,
      ratingsList,
      activeCategoryId,
      activeRatingId,
      categoryOptions,
      changeSearchInput,
      enterSearchInput,
      changeCategory,
      changeRating,
      clearFilters
   } = props
   const renderRatingItem = (rating: {
      ratingId: string
      imageUrl: string
   }): JSX.Element => {
      const onClickRatingItem = (): void => changeRating(rating.ratingId)
      const isActive = activeRatingId === rating.ratingId
      return (
         <RatingFilterItemCont
            key={rating.ratingId}
            onClick={onClickRatingItem}
            activeStatus={isActive}
         >
            <RatingStarImgContainer>
               <StlyedRatingStarsImg
                  src={rating.imageUrl}
                  alt={`rating ${rating.ratingId}`}
               />
            </RatingStarImgContainer>
            <p>& up</p>
         </RatingFilterItemCont>
      )
   }
   const renderRatingsFiltersList = (): JSX.Element => (
      <RatingListContainer>
         {//eslint-disable-next-line
         ratingsList.map(rating => renderRatingItem(rating))}
      </RatingListContainer>
   )
   const renderRatingsFilters = (): JSX.Element => (
      <RatingsMainContainer>
         <HeadingTwo>Rating</HeadingTwo>
         <RatingItemsCont>{renderRatingsFiltersList()}</RatingItemsCont>
      </RatingsMainContainer>
   )

   const renderCategoryItem = (category: CategoryOptionType): JSX.Element => {
      const isActive = activeCategoryId === category.categoryId
      const onClickCategoryItem = (): void => {
         changeCategory(category.categoryId)
      }
      return (
         <StyledListItem
            key={category.categoryId}
            onClick={onClickCategoryItem}
            activeStatus={isActive}
         >
            <StyledParagraph ml={0}>{category.name}</StyledParagraph>
         </StyledListItem>
      )
   }

   const renderCategoriesList = (): JSX.Element => (
      <CategoryOptionsContainer>
         {//eslint-disable-next-line
         categoryOptions.map((category: CategoryOptionType) =>
            renderCategoryItem(category)
         )}
      </CategoryOptionsContainer>
   )

   const renderProductCategories = (): JSX.Element => (
      <CategoryItemsMainContainer>
         <HeadingTwo>Category</HeadingTwo>
         <CategoryItemsContainer>
            {renderCategoriesList()}
         </CategoryItemsContainer>
      </CategoryItemsMainContainer>
   )
   const onEnterSearchInput = (
      event: React.KeyboardEvent<HTMLInputElement>
   ): void => {
      if (event.key === 'Enter') {
         enterSearchInput()
      }
   }
   const onChangeSearchInput = (
      event: React.ChangeEvent<HTMLInputElement>
   ): void => {
      changeSearchInput(event.target.value)
   }
   const renderSearchInput = (): JSX.Element => (
      <SearchContainer>
         <StyledInput
            value={searchInput}
            type='search'
            placeholder='Search'
            onChange={onChangeSearchInput}
            onKeyDown={onEnterSearchInput}
         />
         <BsSearch />
      </SearchContainer>
   )
   return (
      <FiltersContainer>
         {renderSearchInput()}
         {renderProductCategories()}
         {renderRatingsFilters()}
         <OutlineBtn type='button' onClick={clearFilters}>
            Clear Filters
         </OutlineBtn>
      </FiltersContainer>
   )
}

export default FiltersGroup
