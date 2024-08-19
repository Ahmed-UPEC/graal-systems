import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";

import about from "../../assets/illustration/about.png";
import logo from "../../assets/sigle-black.svg";

import charles from "../../assets/charles.jpeg";
import vincent from "../../assets/vincent.jpeg";

export default function Page() {
  return (
    <div>
      <TopBar />
      <PageBanner />
      <PageAbout />
      <PageAbout2 />
      <PageTimeline />
      <Footer callToActionBanner={true} />
    </div>
  );
}

function PageBanner() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto text-left pt-0 lg:pt-8 p-8 place-items-center container">
      <div className="flex flex-col gap-4 order-last lg:order-1">
        <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">
          Founders
        </h3>
        <h2 className="font-semibold text-2xl md:text-3xl xl:text-6xl">
          A team of data expert
        </h2>
        <p className="text-base w-full">
          After working together several years for many companies in the world
          of data, we came up with the idea of launching the concept of a Big
          Data SaaS Platform to solve all problems of data processing.
        </p>
        <button className="flex justify-start bg-fuchsia-500 text-white py-2 px-4 rounded-md w-fit hover:bg-black transition-all duration-300">
          Contact us
        </button>
      </div>
      <img
        src={about.src}
        alt="data illustration"
        className="max-w-[75%] md:max-w[100%] mx-auto lg:order-last order-1"
      />
    </div>
  );
}

function PageAbout() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto w-full py-16 gap-8 container">
        <div className="flex flex-col gap-2 items-center justify-start rounded-3xl mx-auto border border-neutral-100 bg-neutral-50 hover:shadow-lg hover:shadow-fuchsia-200 transition-all duration-300 py-6 px-4 ">
          <img
            src={charles.src}
            alt="Charles profil"
            className="rounded-full max-w-[250px] mx-auto border-b-4 border-fuchsia-500"
          ></img>
          <h2 className="text-2xl uppercase mt-2 font-semibold">
            CHARLES ARMATAFFET
          </h2>
          <h3 className="text-lg font-medium text-fuchsia-500">
            Chief Executive Officer
          </h3>
          <hr className="w-12 bg-black h-[1.5px]" />
          <p className="text-center text-neutral-600">
            Charles is the former chief operating officer of LittleBigCode, a
            company dedicated to Data and IA. Charles also served in senior
            roles at Meritis, where he directed a multi-million sales
            organisation, and Matis. He has been instrumental in forging tight
            partnerships with many leading technology companies. Charles has a
            Bachelor&apos;s degree in Business Management from IPSA.
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center justify-start rounded-3xl mx-auto border border-neutral-100 bg-neutral-50 hover:shadow-lg hover:shadow-fuchsia-200 transition-all duration-300 py-6 px-4 ">
          <img
            src={vincent.src}
            alt="Vincent profil"
            className="rounded-full max-w-[250px] mx-auto border-b-4 border-fuchsia-500"
          ></img>
          <h2 className="text-2xl uppercase mt-2 font-semibold">
            VINCENT DEVILLERS
          </h2>
          <h3 className="text-lg font-medium text-fuchsia-500">
            Chief Technical Officer
          </h3>
          <hr className="w-12 bg-black h-[1.5px]" />
          <p className="text-center text-neutral-600">
            Vincent is a founder of GraalSystems and an original member of the
            engineering team that design the first releases of our platform.
            Vincent serves as Head of Delivery for LittleBigCode, where he leads
            LittleBigCode&apos;s technology innovation agenda. Working closely
            with the company&apos;s strategy and research and development teams,
            Vincent was responsible for leading technology strategy and
            commercializing the company&apos;s products to accelerate innovation
            across LittleBigCode. He has also held senior engineering positions
            in France in various companies, where he developed software for
            distributed systems and grid/utility computing infrastructures.
            Vincent was an Apache Hadoop committer and has a master degree in
            Computer Science from the University of Rouen.
          </p>
        </div>
      </div>
    </div>
  );
}

function PageAbout2() {
  return (
    <div className="bg-neutral-100 py-14">
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto w-full py-16 gap-8 container">
        <div className="flex flex-col gap-2 items-center justify-start rounded-3xl mx-auto border border-neutral-100 bg-neutral-50 hover:shadow-lg hover:shadow-fuchsia-200 transition-all duration-300 py-6 px-4 ">
          <img
            src={logo.src}
            alt="Charles profil"
            className="rounded-full max-w-[100px] mx-auto"
          ></img>
          <h2 className="text-2xl uppercase font-semibold">TO BE ANNOUNCED</h2>
          <h3 className="text-lg font-medium text-fuchsia-500">
            Data / DevOps / Cloud Expert
          </h3>
          <hr className="w-12 bg-black h-[1.5px]" />
          <p className="text-center text-neutral-600">
            Charles is the former chief operating officer of LittleBigCode, a
            company dedicated to Data and IA. Charles also served in senior
            roles at Meritis, where he directed a multi-million sales
            organisation, and Matis. He has been instrumental in forging tight
            partnerships with many leading technology companies. Charles has a
            Bachelor&apos;s degree in Business Management from IPSA.
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center justify-start rounded-3xl mx-auto border border-neutral-100 bg-neutral-50 hover:shadow-lg hover:shadow-fuchsia-200 transition-all duration-300 py-6 px-4 ">
          <img
            src={logo.src}
            alt="Charles profil"
            className="rounded-full max-w-[100px] mx-auto"
          ></img>
          <h2 className="text-2xl uppercase font-semibold">TO BE ANNOUNCED</h2>
          <h3 className="text-lg font-medium text-fuchsia-500">
            Data / DevOps / Cloud Expert
          </h3>
          <hr className="w-12 bg-black h-[1.5px]" />
          <p className="text-center text-neutral-600">
            Charles is the former chief operating officer of LittleBigCode, a
            company dedicated to Data and IA. Charles also served in senior
            roles at Meritis, where he directed a multi-million sales
            organisation, and Matis. He has been instrumental in forging tight
            partnerships with many leading technology companies. Charles has a
            Bachelor&apos;s degree in Business Management from IPSA.
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center justify-start rounded-3xl mx-auto border border-neutral-100 bg-neutral-50 hover:shadow-lg hover:shadow-fuchsia-200 transition-all duration-300 py-6 px-4 ">
          <img
            src={logo.src}
            alt="Charles profil"
            className="rounded-full max-w-[100px] mx-auto"
          ></img>
          <h2 className="text-2xl uppercase font-semibold">TO BE ANNOUNCED</h2>
          <h3 className="text-lg font-medium text-fuchsia-500">
            Data / DevOps / Cloud Expert
          </h3>
          <hr className="w-12 bg-black h-[1.5px]" />
          <p className="text-center text-neutral-600">
            Charles is the former chief operating officer of LittleBigCode, a
            company dedicated to Data and IA. Charles also served in senior
            roles at Meritis, where he directed a multi-million sales
            organisation, and Matis. He has been instrumental in forging tight
            partnerships with many leading technology companies. Charles has a
            Bachelor&apos;s degree in Business Management from IPSA.
          </p>
        </div>
      </div>
    </div>
  );
}

function PageTimeline() {
  return (
    <div className="py-14 mx-auto container">
      <div className="container">
        <h2 className="text-center pb-12 text-3xl font-semibold">
          Timeline at <span className="text-fuchsia-500">Graal Systems</span>
        </h2>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <PageTimelineItem
            title="Q2 2023"
            date="2023"
            description="Serie A round"
            latest={true}
          />
          <PageTimelineItem
            title="End of 2022"
            date="2022"
            description="Public launch"
          />
          <PageTimelineItem
            title="June 2022"
            date="June 2022"
            description="Private launch beta"
          />
          <PageTimelineItem
            title="December 2021"
            date="December 2021"
            description="Seed funding led by MeltingCode, a dedicated compagny in Data and IA"
          />
          <PageTimelineItem
            title="November 2021"
            date="November 2021"
            description="First deployment of GraalSystems in  a private and secured infrastrucure "
          />
          <PageTimelineItem
            title="May 2021"
            date="May 2021"
            description="4 expert engineers from the Hadoop team at Société Générale, Amundi, IQVIA, Banque de France and Euroclear spun out to form GraalSystems. The compagny name refers to the Graal, since the holy treasure is the symbol for the quest for excellence and the acquisition of new knowedge. "
          />
          <PageTimelineItem
            title="June 2020"
            date="June 2020"
            description="First designs of the platform, meeting with our clients and backlog prioritisation."
          />
          <PageTimelineItem
            title="January 2017"
            date="January 2017"
            description="First ideas of the future of data platforms, with the main objective to find a successor to Apache Hadoop in order to restore agility to our client's data projects"
          />
        </ol>
      </div>
    </div>
  );
}

interface PageTimelineItemProps {
  title: string;
  latest?: boolean;
  date: string;
  description: string;
}

function PageTimelineItem({
  title,
  latest = false,
  date,
  description,
}: Readonly<PageTimelineItemProps>) {
  return (
    <li className="mb-10 ms-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-fuchsia-100 rounded-full -start-3 ring-8 ring-white">
        <svg
          className="w-2.5 h-2.5 text-fuchsia-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg>
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-neutral-900">
        {title}{" "}
        {latest && (
          <span className="bg-fuchsia-100 text-fuchsia-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">
            Latest
          </span>
        )}
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-neutral-400 ">
        {date}
      </time>
      <p className="mb-4 text-base font-normal text-neutral-500 ">
        {description}
      </p>
    </li>
  );
}
