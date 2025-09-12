// app/[category]/[id]/page.tsx

import { travelDestinations } from "../../../data/travelDestinations";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Star, Sparkles, ArrowLeft } from "lucide-react";

interface SingleDestinationPageProps {
  params: {
    category: string;
    id: string;
  };
}

export default function SingleDestinationPage({ params }: SingleDestinationPageProps) {
  const { id } = params;

  // Find the destination by its ID.
  const destination = travelDestinations.find(
    (dest) => dest.id.toString() === id
  );

  // If the destination is not found, show a 404 page.
  if (!destination) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-4 relative z-10">
        <Link href="/" className="mb-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5" /> Back to Home
        </Link>
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/20 p-8 shadow-2xl">
          <div className="relative h-96 w-full rounded-2xl overflow-hidden mb-8">
            <Image
              src={destination.image}
              alt={destination.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
              {destination.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-400">
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-purple-400" /> {destination.location}
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" /> {destination.rating}
              </span>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              {destination.description}
            </p>
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                <Sparkles className="inline-block w-6 h-6 mr-2 text-purple-400" />
                Highlights
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {destination.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}