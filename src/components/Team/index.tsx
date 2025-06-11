import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Gavesh Jain",
    designation: "UI Designer",
    image: "/images/team/team-01.png",
    linkedinLink: "/#",
    instagramLink: "/#",
  },

  {
    id: 2,
    name: "Milan Soni",
    designation: "Product Designer",
    image: "/images/team/team-02.png",
    linkedinLink: "/#",
    instagramLink: "/#",
  },

  {
    id: 3,
    name: "Abhilash Joshi",
    designation: "App Developer",
    image: "/images/team/team-03.png",
    linkedinLink: "/#",
    instagramLink: "/#",
  },

  {
    id: 4,
    name: "Khushal Gupta",
    designation: "Content Writer",
    image: "/images/team/team-03.png", // Set a default image if the image is missing
    linkedinLink: "/#",
    instagramLink: "/#",
  },

  {
    id: 5,
    name: "Avadhi Singhal",
    designation: "Content Writer",
    image: "/images/team/team-04.png",
    linkedinLink: "/#",
    instagramLink: "/#",
  },

  {
    id: 6,
    name: "Khushbu Sharma",
    designation: "Content Writer",
    image: "/images/team/team-04.png",
    linkedinLink: "/#",
    instagramLink: "/#",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-100 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Our Team"
            title="Meet Our Team"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((team) => (
            <SingleTeam key={team.id} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
