// import { useState } from "react";
// import {
//   Category,
//   CategoriesResponse,
//   MealsResponse,
//   HeaderSearchForm,
//   MealDetailsResponse,
// } from "../types";
// import useHttpData from "./useHttpData";
// import {
//   categoriesURL,
//   mealDetailsURL,
//   mealsURL,
//   searchMealsURL,
// } from "./urls";

// export default () => {
//   const [selectedCategory, setSelectedCategory] = useState<Category>({
//     strCategory: "Beef",
//   });

//   const { data: categoryData, loading: categoryLoading } =
//     useHttpData<CategoriesResponse>(categoriesURL);

//   const {
//     data: mealsData,
//     loading: mealsLoading,
//     search: searchMeals,
//   } = useHttpData<MealsResponse>(mealsURL(selectedCategory));

//   const categories = categoryData ? categoryData.meals : [];
//   const meals = mealsData ? mealsData.meals : [];

//   const searchMeal = ({ search }: HeaderSearchForm) => {
//     searchMeals(searchMealsURL(search));
//   };

//   const {
//     data: recipeData,
//     loading: recipeLoading,
//     search: searchRecipe,
//   } = useHttpData<MealDetailsResponse>();

//   const searchRecipeData = (param: string) => {
//     searchRecipe(mealDetailsURL(param));
//   };

//   return {
//     recipeData,
//     searchRecipeData,
//     recipeLoading,
//     categoryLoading,
//     categories,
//     setSelectedCategory,
//     selectedCategory,
//     meals,
//     mealsLoading,
//     searchMeal,
//   };
// };
