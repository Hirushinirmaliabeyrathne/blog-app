export interface TechArticle {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  author?: string;
  tags?: string[];
}

export const techArticles: TechArticle[] = [
  {
      id: 1,
      title: "The Future of AI in Everyday Life",
      excerpt: "How artificial intelligence is transforming our daily routines and what to expect next.",
      image: "/images/ai.jpg",
      readTime: "5 min read"
      
  },
  {
    id: 2,
    title: "Understanding Web3 and Blockchain",
    excerpt: "A beginner's guide to the decentralized internet and blockchain technology.",
    image: "/images/web3.jpg",
    readTime: "8 min read"
  
   
  },
  {
    id: 3,
    title: "Latest Smartphone Innovations",
    excerpt: "Reviewing the cutting-edge features in the newest smartphone releases.",
    image: "/images/mobile.jpg",
    readTime: "6 min read"
    
    
  },
  {
    id: 4,
    title: "Quantum Computing Breakthrough",
    excerpt: "Scientists achieve new milestone in quantum computing that could revolutionize technology.",
    image: "/images/quantumcomputing .jpg",
    readTime: "10 min read"
    
   
  },
  {
    id: 5,
    title: "The Rise of Edge Computing",
    excerpt: "How edge computing is bringing processing power closer to where data is generated.",
    image: "/images/cloudcomputing.jpg",
  
    readTime: "7 min read"
    
    
  },
  {
    id: 6,
    title: "Cybersecurity in 2025",
    excerpt: "Latest trends and threats in cybersecurity and how to protect yourself.",
    image: "/images/cybersecurity.jpg",
  
    readTime: "9 min read"
   
  }
];