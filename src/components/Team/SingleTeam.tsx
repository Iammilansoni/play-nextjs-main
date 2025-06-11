import { TeamType } from "@/types/team";
import Image from "next/image";

const SingleTeam = ({ team }: { team: TeamType }) => {
  const { image, name, designation, linkedinLink, instagramLink } = team;

  return (
    <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
      <div className="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none">
        <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
          <Image
            src={image}
            alt={name}
            className="w-full rounded-full"
            width={120}
            height={120}
          />
          <span className="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100"></span>
          <span className="absolute right-0 top-0 -z-10 opacity-0 transition-all group-hover:opacity-100">
            <svg
              width="55"
              height="53"
              viewBox="0 0 55 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5118 3.1009C13.3681 3.1009 14.0622 2.40674 14.0622 1.55045C14.0622 0.69416 13.3681 0 12.5118 0C11.6555 0 10.9613 0.69416 10.9613 1.55045C10.9613 2.40674 11.6555 3.1009 12.5118 3.1009Z"
                fill="#3758F9"
              />
              {/* Additional SVG paths */}
            </svg>
          </span>
        </div>
        <h3 className="mb-2 text-center text-xl font-semibold text-dark dark:text-light">{name}</h3>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">{designation}</p>
        <div className="mt-4 flex justify-center space-x-4">
          {linkedinLink && (
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${name}'s LinkedIn`}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 12c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8 3.5817-8 8-8 8 3.5817 8 8zM12 4c-4.4183 0-8 3.5817-8 8s3.5817 8 8 8 8-3.5817 8-8-3.5817-8-8-8zM13 9h-2v4h-2V9H8v-2h3V6c0-1.105 0.895-2 2-2h2v2h-2c-0.553 0-1 0.447-1 1v2h2l-1 2z"
                  fill="currentColor"
                />
              </svg>
            </a>
          )}
          
           
          {instagramLink && (
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${name}'s Instagram`}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM9 5c0-.553.447-1 1-1h4c.553 0 1 .447 1 1v4c0 .553-.447 1-1 1H10c-.553 0-1-.447-1-1V5zm5 4V5H10v4h4zm-1 2H10c-.553 0-1 .447-1 1v4c0 .553.447 1 1 1h4c.553 0 1-.447 1-1v-4c0-.553-.447-1-1-1zm-1 4h-2v2h2v-2z"
                  fill="currentColor"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleTeam;
