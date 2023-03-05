export type RecipeDTO = {
    calories: number
    cautions: string[]
    cuisineType: string[]
    dietLabels: string[]
    digest: DigestType[]
    dishType: string[]
    healthLabels: string[]
    image: string
    ingredientLines: string[]
    ingredients: IngredientType[]
    label: string
    mealType: string
    url: string

}

type IngredientType = {
    text: string
    quantity: number
    measure: string
    food: string
    weight: number
}

type DigestType = {
    label: string
    daily: number
    hasRDI: boolean
    schemaOrgTag: string
    sub: DigestType[]
    tag: string
    total: number
    unit: string
}