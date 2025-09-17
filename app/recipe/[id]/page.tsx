"use client"
import React from "react"
import { useParams } from "next/navigation";
import Image from "next/image"
import { recipes } from "../../../data/recipe"


export default function SingleRecipePage() {
    const params = useParams();
    const recipeId = params.id;

    // Find the recipe with the matching ID
    const recipe = recipes.find(r => r.id.toString() === recipeId);

    // Handle the case where the recipe is not found
    if (!recipe) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                <h1 className="text-3xl">Recipe Not Found</h1>
            </div>
        );
    }

    return (
        <section className="min-h-screen flex justify-center items-center py-20 bg-gradient-to-b from-black to-gray-900">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                        {recipe.title}
                    </h1>
                    <div className="relative w-full h-[500px] mb-8 rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src={recipe.image || "/placeholder.svg"}
                            alt={recipe.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Placeholder for full recipe text - you'll need to add this to your data */}
                    <p className="text-white/80 leading-relaxed text-lg mb-6">
                        {recipe.description || "Full recipe details will go here."}
                    </p>
                </div>
            </div>
        </section>
    );
}