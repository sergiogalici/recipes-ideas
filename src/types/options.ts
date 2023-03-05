export type OptionsType = {
    params: {
        type: "public"
        q: string
        app_id: string
        app_key: string
        ingr: string
        mealType: MealTypeType
        random: boolean
        health?: HealthType
        diet?: DietType
    }
}

export type HealthType = 
    "crustacean-free" | "dairy-free" | "gluten-free" | "low-sugar" | 
    "peanut-free" | "pescatarian" | "vegan" | "vegetarian" | ""

type MealTypeType = "Breakfast" | "Dinner" | "Lunch"

type DietType = 
    "balanced" | "high-fiber" | "high-protein" | "low-carb" |
    "low-fat" | "low-sodium"