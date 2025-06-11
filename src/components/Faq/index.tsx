import SectionTitle from "../Common/SectionTitle";
import SingleFaq from "./SingleFaq";

const Faq = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="FAQ"
          title="Questions About MiningNiti? Answered"
          paragraph="Explore the most common questions about MiningNiti, our AI-driven Mining management system that helps streamline your operations and provide quick, efficient access to data."
          width="640px"
          center
        />

        <div className="-mx-4 mt-[60px] flex flex-wrap lg:mt-20">
          <div className="w-full px-4 lg:w-1/2">
            <SingleFaq
              question="What is MiningNiti?"
              answer="MiningNiti is an AI-powered Mining management system designed to centralize and provide easy access to your Mining reports, files, and other key business data. It uses Next.js, LangChain, and FAISS for fast and efficient document retrieval."
            />
            <SingleFaq
              question="How does MiningNiti improve Mining management?"
              answer="MiningNiti simplifies document retrieval by using advanced AI techniques to categorize, index, and quickly retrieve essential data. This reduces time spent searching for documents and enhances decision-making."
            />
            <SingleFaq
              question="Can MiningNiti be customized for my Mining business?"
              answer="Yes! MiningNiti is designed to be highly customizable to fit the specific needs of your Mining operations. You can adjust workflows, integrate with other systems, and scale the solution as your business grows."
            />
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <SingleFaq
              question="How do I integrate MiningNiti with my existing systems?"
              answer="MiningNiti provides a flexible API and integration options to connect with your existing systems, such as warehouse management, shipping, and inventory systems. Our team can assist with the setup and configuration."
            />
            <SingleFaq
              question="What type of data can MiningNiti manage?"
              answer="MiningNiti can manage various types of Mining-related data, including shipment records, inventory details, transportation schedules, reports, and more. The system ensures that all your key documents are stored in one place."
            />
            <SingleFaq
              question="Is there a mobile version of MiningNiti?"
              answer="Currently, MiningNiti is a web-based platform. However, we are working on mobile solutions to make Mining management even more accessible on the go."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
