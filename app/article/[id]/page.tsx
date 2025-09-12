// app/article/[id]/page.tsx
"use client"
import React from "react"
import { useParams } from "next/navigation";
import Image from "next/image"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { techArticles } from "@/data/techarticle"; 


export default function SingleArticle() {
    const params = useParams();
    const articleId = params.id;

    // Find the article with the matching ID
    const article = techArticles.find(a => a.id.toString() === articleId);

    // Handle the case where the article is not found
    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                <h1 className="text-3xl">Article Not Found</h1>
            </div>
        );
    }

    return (
        <section className="min-h-screen flex justify-center items-center py-20 bg-gradient-to-b from-black to-gray-900">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent text-center">
                        {article.title}
                    </h1>
                    <div className="flex items-center justify-center text-white/70 mb-8 gap-2">
                        <AccessTimeIcon style={{ fontSize: 16 }} />
                        <span>{article.readTime}</span>
                    </div>
                        <div className="relative w-full h-[500px] mb-8 rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src={article.image || "/placeholder.svg"}
                            alt={article.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <p className="text-white/80 leading-relaxed text-lg mb-6">
                        {article.fullText || article.excerpt}
                    </p>
                </div>
            </div>
        </section>
    );
}