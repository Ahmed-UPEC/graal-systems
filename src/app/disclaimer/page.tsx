import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";

import disclaimer from "@/assets/illustration/disclaimer.png";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <TopBar />
      <PageBanner />
      <PageDisclaimer />
      <Footer callToActionBanner={true} />
    </div>
  );
}

function PageBanner() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto text-left pt-0 lg:pt-8 p-8 place-items-center container">
      <div className="flex flex-col gap-4 order-last lg:order-1">
        <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">
          Disclamer
        </h3>
        <h2 className="font-semibold text-2xl md:text-3xl xl:text-6xl">
          Before using Graal Systems
        </h2>
        <p className="text-base w-full">
          Please read these terms of service carefully before using Graal
          Systems website operated by Graal Systems. Your access to and use of
          the service is conditioned on your acceptance of and compliance with
          these terms. These terms apply to all visitors, users and others who
          access or use the service.
        </p>
        <Link
          href="/contact"
          className="flex justify-start bg-fuchsia-500 text-white py-2 px-4 rounded-md w-fit hover:bg-black transition-all duration-300"
        >
          Contact us
        </Link>
      </div>
      <img
        src={disclaimer.src}
        alt="data illustration"
        className="max-w-[75%] md:max-w[100%] mx-auto lg:order-last order-1"
      />
    </div>
  );
}

function PageDisclaimer() {
  return (
    <div className="flex flex-col mx-auto container pt-12 pb-20 gap-8">
      <PageDisclaimerBlock title="1- Terms">
        <p className="text-neutral-500">
          By accessing the website at{" "}
          <a href="https://graal.systems" className="text-fuchsia-500">
            https://graal.systems
          </a>
          , you are agreeing to be bound by these terms of service, all
          applicable laws and regulations, and agree that you are responsible
          for compliance with any applicable local laws. If you do not agree
          with any of these terms, you are prohibited from using or accessing
          this site. The materials contained in this website are protected by
          applicable
        </p>
      </PageDisclaimerBlock>

      <PageDisclaimerBlock title="2- Use License">
        <div className="text-neutral-500 flex flex-col gap-4">
          <p>
            Permission is granted to temporarily download one copy of the
            materials on Graal Systems&apos;s Website for personal,
            non-commercial transitory viewing only. This is the grant of a
            license, not a transfer of title, and under this license you may
            not:
          </p>
          <ul className="list-disc pl-10">
            <li>modify or copy the materials;</li>
            <li>
              use the materials for any commercial purpose or for any public
              display;
            </li>
            <li>
              attempt to reverse engineer any software contained on Graal
              Systems&apos;s Website;
            </li>
            <li>
              remove any copyright or other proprietary notations from the
              materials; or
            </li>
            <li>
              transferring the materials to another person or “mirror” the
              materials on any other server.
            </li>
          </ul>
          <p>
            This will let Graal Systems to terminate upon violations of any of
            these restrictions. Upon termination, your viewing right will also
            be terminated and you should destroy any downloaded materials in
            your possession whether it is printed or electronic format.
          </p>
        </div>
      </PageDisclaimerBlock>

      <PageDisclaimerBlock title="3- Disclaimer">
        <p className="text-neutral-500">
          All the materials on Graal Systems&apos;s Website are provided “as
          is”. Graal Systems makes no warranties, may it be expressed or
          implied, therefore negates all other warranties. Furthermore, Graal
          Systems does not make any representations concerning the accuracy or
          reliability of the use of the materials on its Website or otherwise
          relating to such materials or any sites linked to this Website.
        </p>
      </PageDisclaimerBlock>

      <PageDisclaimerBlock title="4- Limitations">
        <p className="text-neutral-500">
          Graal Systems or its suppliers will not be hold accountable for any
          damages that will arise with the use or inability to use the materials
          on Graal Systems&apos;s Website, even if Graal Systems or an authorize
          representative of this Website has been notified, orally or written,
          of the possibility of such damage. Some jurisdiction does not allow
          limitations on implied warranties or limitations of liability for
          incidental damages, these limitations may not apply to you.
        </p>
      </PageDisclaimerBlock>

      <PageDisclaimerBlock title="5- Revisions and Errata">
        <p className="text-neutral-500">
          The materials appearing on Graal Systems&apos;s Website may include
          technical, typographical, or photographic errors. Graal Systems will
          not promise that any of the materials in this Website are accurate,
          complete, or current. Graal Systems may change the materials contained
          on its Website at any time without notice. Graal Systems does not make
          any commitment to update the materials.
        </p>
      </PageDisclaimerBlock>
      <PageDisclaimerBlock title="6- Links">
        <p className="text-neutral-500">
          Graal Systems has not reviewed all of the sites linked to its Website
          and is not responsible for the contents of any such linked site. The
          presence of any link does not imply endorsement by Graal Systems of
          the site. The use of any linked website is at the user&apos;s own
          risk.
        </p>
      </PageDisclaimerBlock>
      <PageDisclaimerBlock title="7- Site Terms of Use Modifications">
        <p className="text-neutral-500">
          Graal Systems may revise these Terms of Use for its Website at any
          time without prior notice. By using this Website, you are agreeing to
          be bound by the current version of these Terms and Conditions of Use.
        </p>
      </PageDisclaimerBlock>
      <PageDisclaimerBlock title="8- Governing Law">
        <p className="text-neutral-500">
          Any claim related to Graal Systems&apos;s Website shall be governed by
          the laws of France without regards to its conflict of law provisions.
        </p>
      </PageDisclaimerBlock>
    </div>
  );
}

interface PageDisclaimerBlockProps {
  title: string;
  children: any;
}

function PageDisclaimerBlock({
  title,
  children,
}: Readonly<PageDisclaimerBlockProps>) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-semibold text-xl">{title}</h2>
      {children}
    </div>
  );
}
