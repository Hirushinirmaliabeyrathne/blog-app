"use client"
import Image from "next/image"
import Link from "next/link"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { recipes } from "../../../data/recipe"; 

export default function FoodPage() {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black min-h-screen relative overflow-hidden cursor-pointer">
            {/* Background decoration */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Food & Recipes</h2>
                    <Link
                        href="/categories/foods"
                        className="group flex items-center gap-3 bg-gradient-to-r from-black via-gray-800 to-black hover:from-gray-900 hover:via-gray-700 hover:to-gray-900 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 shadow-lg hover:shadow-gray-500/25 hover:scale-105"
                    >
                        View All
                        <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recipes.map((recipe) => (
                        <div 
                            key={recipe.id} 
                            className="group relative max-w-sm mx-auto border border-white/20 bg-gradient-to-b from-gray-800/40 to-gray-900/60 backdrop-blur-lg rounded-xl overflow-hidden shadow-[0_7px_20px_5px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-white/40 hover:shadow-[0_7px_50px_10px_rgba(0,0,0,0.7)] hover:scale-105 hover:brightness-125 select-none"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <div className="absolute -top-10 -left-full w-full h-60 bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 group-hover:left-full transition-all duration-700 ease-out"></div>
                            <div className="flex flex-col p-4">
                                <div className="relative rounded-lg overflow-hidden mb-4">
                                    <div className="aspect-square relative">
                                        <Image
                                            src={recipe.image || "/placeholder.svg"}
                                            alt={recipe.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#8133F1] transition-colors duration-300">
                                        {recipe.title}
                                    </h3>
                                    {recipe.description && (
                                        <p className="text-[#a89ec9] text-sm mb-4 leading-relaxed">
                                            {recipe.description}
                                        </p>
                                    )}
                                    <hr className="border-none border-b border-gray-600/50 mb-4" />
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-1">
                                            <AccessTimeFilledIcon style={{ fontSize: 16, color: '#8133F1' }} />
                                            <span className="text-[#a89ec9] text-sm">{recipe.time}</span>
                                        </div>
                                    </div>
                                    <Link
                                        href={`/recipe/${recipe.id}`}
                                        className="group/btn w-full flex items-center justify-center gap-2 bg-gradient-to-r from-black via-gray-800 to-black hover:from-gray-900 hover:via-gray-700 hover:to-gray-900 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-gray-500/30 hover:scale-105 mt-6"
                                    >
                                        View Recipe
                                        <ChevronRightIcon style={{ fontSize: 16 }} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}