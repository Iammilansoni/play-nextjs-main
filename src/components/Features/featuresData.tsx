import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m0 0H7v4h3v1h4v-1h3v-4h-3m0 0h-1" />
      </svg>
    ),
    title: "Centralized Document Management",
    paragraph: "Easily manage, organize, and retrieve documents in one place with our advanced document management system.",
    btn: "Learn More",
    btnLink: "#",
  },
  {
    id: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    ),
    title: "AI-Powered Search",
    paragraph: "Utilize advanced AI algorithms to search for files and information quickly and efficiently.",
    btn: "Explore",
    btnLink: "#",
  },
  {
    id: 3,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m4-4H8" />
      </svg>
    ),
    title: "Real-Time Updates",
    paragraph: "Stay informed with real-time updates on document changes and new additions.",
    btn: "Check It Out",
    btnLink: "#",
  },
  {
    id: 4,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: "Enhanced Security",
    paragraph: "Ensure the safety of your data with robust security measures and role-based access.",
    btn: "Secure Now",
    btnLink: "#",
  },
  {
    id: 5,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6M20 13v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0H4" />
      </svg>
    ),
    title: "Cloud Integration",
    paragraph: "Seamlessly integrate with popular cloud storage platforms for better accessibility and scalability.",
    btn: "Integrate",
    btnLink: "#",
  },
  {
    id: 6,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6h6v6m-3 3a3 3 0 100-6 3 3 0 000 6z" />
      </svg>
    ),
    title: "Customizable Workflows",
    paragraph: "Adapt workflows to fit your business needs and optimize operational efficiency.",
    btn: "Customize",
    btnLink: "#",
  },
];
export default featuresData;
