import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Amit Verma",
    designation: "CEO @ Verma Analytics",
    content:
      "MiningNiti has revolutionized the way we manage and analyze data. The real-time processing and AI-driven insights have significantly improved our decision-making process. Highly recommended!",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Radhika Sharma",
    designation: "Head of Data Science @ TechNest",
    content:
      "The seamless integration with our existing systems and the advanced data security features make MiningNiti a standout product. Our team is more efficient, and our operations are now smoother than ever.",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Rajesh Gupta",
    designation: "Co-Founder @ FutureTech Solutions",
    content:
      "We’ve been using MiningNiti for a few months now, and it's truly exceeded our expectations. The customizable reporting and cloud-based access make it a game-changer for our business. A must-have for any data-driven company!",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
  {
    id: 4,
    name: "Priya Nair",
    designation: "CTO @ Nair Technologies",
    content:
      "MiningNiti's powerful features, such as real-time data mining and customizable analytics tools, have helped us improve productivity and make smarter business choices. Their support team is also highly responsive.",
    image: "/images/testimonials/author-04.png",
    star: 5,
  },
  {
    id: 5,
    name: "Sanjay Patel",
    designation: "Founder @ DataForge",
    content:
      "MiningNiti is hands down the best tool we've used for data management. The user-friendly interface, coupled with its advanced security features, has made our operations more efficient. Worth every penny.",
    image: "/images/testimonials/author-05.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="What our Client Say"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
