export interface TechArticle {
  fullText: string;
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
      readTime: "5 min read",
      fullText: "The integration of AI into our daily lives is accelerating, from smart home devices that anticipate our needs to personalized recommendations in our media consumption. This article explores the current state of AI and its potential to revolutionize various industries, including healthcare, transportation, and finance. We also discuss the ethical considerations and challenges that come with this rapid technological advancement.",
      author: "Alex Johnson",
      tags: ["AI", "future", "technology"]
  },
  {
    id: 2,
    title: "Understanding Web3 and Blockchain",
    excerpt: "A beginner's guide to the decentralized internet and blockchain technology.",
    image: "/images/web3.jpg",
    readTime: "8 min read",
    fullText: "Web3 represents the next evolution of the internet, built on the core principles of decentralization and user ownership. This guide breaks down the complex concepts of blockchain technology, cryptocurrencies, and NFTs in an easy-to-understand format. We explore how Web3 aims to create a more open and equitable digital world, empowering individuals and shifting control away from large corporations.",
    author: "Maria Garcia",
    tags: ["Web3", "blockchain", "decentralization"]
  },
  {
    id: 3,
    title: "Latest Smartphone Innovations",
    excerpt: "Reviewing the cutting-edge features in the newest smartphone releases.",
    image: "/images/mobile.jpg",
    readTime: "6 min read",
    fullText: "The smartphone market is constantly pushing the boundaries of what's possible. This review dives into the latest features that are shaping the industry, from foldable screens and under-display cameras to enhanced battery life and powerful new processors. We compare the leading models and discuss what these innovations mean for the average consumer.",
    author: "David Chen",
    tags: ["smartphone", "mobile", "innovation"]
  },
  {
    id: 4,
    title: "Quantum Computing Breakthrough",
    excerpt: "Scientists achieve new milestone in quantum computing that could revolutionize technology.",
    image: "/images/quantumcomputing.jpg",
    readTime: "10 min read",
    fullText: "A recent breakthrough in quantum computing has brought us one step closer to a new era of computation. This article explains the fundamental concepts of quantum mechanics and how they are being harnessed to solve problems that are impossible for classical computers. We explore the potential impact on fields like drug discovery, cryptography, and artificial intelligence.",
    author: "Sophie Miller",
    tags: ["quantum computing", "science", "breakthrough"]
  },
  {
    id: 5,
    title: "The Rise of Edge Computing",
    excerpt: "How edge computing is bringing processing power closer to where data is generated.",
    image: "/images/cloudcomputing.jpg",
    readTime: "7 min read",
    fullText: "Edge computing is a distributed computing paradigm that brings computation and data storage closer to the source of data generation, such as IoT devices. This article explains the benefits of edge computing, including reduced latency, improved security, and lower bandwidth costs. We also discuss how it complements cloud computing and is essential for the growth of autonomous vehicles and smart cities.",
    author: "Liam White",
    tags: ["edge computing", "cloud", "IoT"]
  },
  {
    id: 6,
    title: "Cybersecurity in 2025",
    excerpt: "Latest trends and threats in cybersecurity and how to protect yourself.",
    image: "/images/cybersecurity.jpg",
    readTime: "9 min read",
    fullText: "The cybersecurity landscape is constantly evolving, with new threats emerging every day. This article provides an overview of the most significant trends and risks in 2025, from sophisticated phishing attacks and ransomware to the challenges of securing remote work environments. We offer practical tips and best practices for individuals and businesses to strengthen their digital defenses.",
    author: "Olivia Brown",
    tags: ["cybersecurity", "security", "threats"]
  }
];