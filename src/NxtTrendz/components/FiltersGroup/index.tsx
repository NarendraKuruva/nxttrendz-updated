import React from 'react'
import { BsSearch } from 'react-icons/bs'
import {
   CategoryHeading,
   CategoryItem,
   CategoryItemsContainer,
   CategoryItemsMainContainer,
   CategoryItemText,
   CategoryOptionsContainer,
   ClearFiltersBtn,
   FiltersContainer,
   FilterSearchContainer,
   FilterSearchInput,
   RatingFilterItemCont,
   RatingHeading,
   RatingItemsCont,
   RatingListContainer,
   RatingsMainContainer,
   RatingStarImgContainer,
   StlyedRatingStarsImg
} from './styledComponents'
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

const ratingHeadingText = 'Rating'
const andUpText = '& up'
const categoryHeadingText = 'Category'
const clearFiltersBtnText = 'Clear Filters'

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
            <p>{andUpText}</p>
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
         <RatingHeading>{ratingHeadingText}</RatingHeading>
         <RatingItemsCont>{renderRatingsFiltersList()}</RatingItemsCont>
      </RatingsMainContainer>
   )

   const renderCategoryItem = (category: CategoryOptionType): JSX.Element => {
      const isActive = activeCategoryId === category.categoryId
      const { name, categoryId } = category
      const onClickCategoryItem = (): void => {
         changeCategory(categoryId)
      }
      return (
         <CategoryItem
            key={categoryId}
            onClick={onClickCategoryItem}
            activeStatus={isActive}
         >
            <CategoryItemText>{name}</CategoryItemText>
         </CategoryItem>
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
         <CategoryHeading>{categoryHeadingText}</CategoryHeading>
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
      <FilterSearchContainer>
         <FilterSearchInput
            value={searchInput}
            type='search'
            placeholder='Search'
            onChange={onChangeSearchInput}
            onKeyDown={onEnterSearchInput}
         />
         <BsSearch />
      </FilterSearchContainer>
   )

   return (
      <FiltersContainer>
         {renderSearchInput()}
         {renderProductCategories()}
         {renderRatingsFilters()}
         <ClearFiltersBtn type='button' onClick={clearFilters}>
            {clearFiltersBtnText}
         </ClearFiltersBtn>
      </FiltersContainer>
   )
}

export default FiltersGroup
