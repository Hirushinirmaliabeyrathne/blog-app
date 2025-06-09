export interface Recipe {
  id: number;
  title: string;
  time: string;
  difficulty: "Easy" | "Medium" | "Hard";
  image: string;
  description?: string;
}

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Creamy Tuscan Chicken Pasta",
    time: "30 min",
    difficulty: "Easy",
    image: "/images/food01.jpg",
    description: "Rich and creamy pasta with sun-dried tomatoes and spinach"
  },
  {
    id: 2,
    title: "Spicy Thai Basil Stir Fry",
    time: "25 min",
    difficulty: "Medium",
    image: "/images/food02.jpg",
    description: "Aromatic stir fry with fresh basil and bold Thai flavors"
  },
  {
    id: 3,
    title: "Classic French Ratatouille",
    time: "45 min",
    difficulty: "Medium",
    image: "/images/food03.jpg",
    description: "Traditional Provençal vegetable stew with herbs"
  },
  {
    id: 4,
    title: "Mexican Street Corn Salad",
    time: "20 min",
    difficulty: "Easy",
    image: "/images/food04.jpg",
    description: "Fresh and zesty corn salad with lime and cotija cheese"
  },
  {
    id: 5,
    title: "Homemade Sourdough Bread",
    time: "3 hours",
    difficulty: "Hard",
    image: "/images/food05.jpg",
    description: "Artisanal sourdough with perfect crust and tangy flavor"
  },
  {
    id: 6,
    title: "Vegan Buddha Bowl",
    time: "25 min",
    difficulty: "Easy",
    image: "/images/food06.jpg",
    description: "Nutritious bowl with quinoa, vegetables, and tahini dressing"
  },
];