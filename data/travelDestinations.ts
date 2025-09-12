export interface TravelDestination {
  id: number;
  title: string;
  location: string;
  image: string;
  rating: number;

  category: string;

  description: string;
  highlights: string[];
}

export const travelDestinations: TravelDestination[] = [
  {
      id: 1,
      title: "Exploring the Hidden Beaches of Bali",
      location: "Bali, Indonesia",
      image: "/images/beach.jpg",
      rating: 4.8,

      category: "Beach",

      description: "Discover pristine hidden beaches and cultural wonders of Bali",
      highlights: ["Private Beach Access", "Cultural Tours", "Spa Treatments"],
      
  },
  {
    id: 2,
    title: "A Weekend in the Swiss Alps",
    location: "Zermatt, Switzerland",
    image: "/images/swis.jpg",
    rating: 4.9,
   
    category: "Mountain",
  
    description: "Experience breathtaking alpine views and luxury mountain resorts",
    highlights: ["Cable Car Rides", "Luxury Hotels", "Alpine Hiking"]
  },
  {
    id: 3,
    title: "Tokyo's Best Hidden Restaurants",
    location: "Tokyo, Japan",
    image: "/images/tokiyoresturent.jpg",
    rating: 4.7,
    category: "Culinary",
   
    description: "Culinary adventure through Tokyo's secret dining spots",
    highlights: ["Michelin Restaurants", "Street Food Tours", "Cooking Classes"]
  },
  {
    id: 4,
    title: "Safari Adventure in Kenya",
    location: "Maasai Mara, Kenya",
    image: "/images/safari.jpg",
    rating: 4.6,
 
    category: "Wildlife",
  
    description: "Witness the Great Migration and Big Five in their natural habitat",
    highlights: ["Game Drives", "Cultural Visits", "Luxury Camps"]
  },
  {
    id: 5,
    title: "Northern Lights in Iceland",
    location: "Reykjavik, Iceland",
    image: "/images/iceland.jpg",
    rating: 4.8,
   
    category: "Nature",
  
    description: "Chase the Aurora Borealis and explore volcanic landscapes",
    highlights: ["Northern Lights", "Hot Springs", "Glacier Tours"]
  },
  {
    id: 6,
    title: "Ancient Wonders of Peru",
    location: "Cusco, Peru",
    image: "/images/peru.jpg",
    rating: 4.7,
    
    category: "Cultural",
    
    description: "Journey through Machu Picchu and Inca heritage sites",
    highlights: ["Machu Picchu", "Inca Trail", "Local Communities"]
  }
];