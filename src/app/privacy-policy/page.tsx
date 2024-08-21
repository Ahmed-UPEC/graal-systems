"use client";

import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";

import privacy from "@/assets/illustration/privacy.png";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <TopBar />
      <PageBanner />
      <PagePrivacyPolicy />
      <Footer callToActionBanner={true} />
    </div>
  );
}

function PageBanner() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto text-left pt-0 lg:pt-8 p-8 place-items-center container">
      <div className="flex flex-col gap-4 order-last lg:order-1">
        <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">
          Privacy Policy
        </h3>
        <h2 className="font-semibold text-2xl md:text-3xl xl:text-6xl">
          Graal System&apos;s Privacy Policy
        </h2>
        <p className="text-base w-full">
          Please read our privacy policy carefully to get a clear understanding
          of how we collect, use, protect or otherwise handle your Personally
          Identifiable Information in accordance with our website.
        </p>
        <Link
          href="/contact"
          className="flex justify-start bg-fuchsia-500 text-white py-2 px-4 rounded-md w-fit hover:bg-black transition-all duration-300"
        >
          Contact us
        </Link>
      </div>
      <img
        src={privacy.src}
        alt="data illustration"
        className="max-w-[75%] md:max-w[100%] mx-auto lg:order-last order-1"
      />
    </div>
  );
}

function PagePrivacyPolicy() {
  return (
    <div className="flex flex-col mx-auto container pt-8 pb-20 gap-8">
      <p className="text-neutral-500">
        At Graal Systems, accessible at{" "}
        <a href="https://graal.systems" className="text-fuchsia-500">
          https://graal.systems
        </a>
        , one of our main priorities is the privacy of our visitors. This
        Privacy Policy document contains types of information that is collected
        and recorded by Graal Systems and how we use it.If you have additional
        questions or require more information about our Privacy Policy, do not
        hesitate to contact us through email at contact@graal.systems
      </p>
      <p className="text-neutral-500">
        This privacy policy applies only to our online activities and is valid
        for visitors to our website with regards to the information that they
        shared and/or collect in Graal Systems. This policy is not applicable to
        any information collected offline or via channels other than this
        website.
      </p>
      <PagePrivacyPolicyBlock title="Consent">
        <p className="text-neutral-500">
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </p>
      </PagePrivacyPolicyBlock>

      <PagePrivacyPolicyBlock title="Information we collect">
        <div className="text-neutral-500 flex flex-col gap-4">
          <p>
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information.
          </p>
          <p>
            If you contact us directly, we may receive additional information
            about you such as your name, email address, phone number, the
            contents of the message and/or attachments you may send us, and any
            other information you may choose to provide.
          </p>
          <p>
            When you register for an Account, we may ask for your contact
            information, including items such as name, company name, address,
            email address, and telephone number.
          </p>
        </div>
      </PagePrivacyPolicyBlock>

      <PagePrivacyPolicyBlock title="How we use your information">
        <div className="text-neutral-500">
          <p>
            We use the information we collect in various ways, including to:
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
        </div>
      </PagePrivacyPolicyBlock>

      <PagePrivacyPolicyBlock title="Log Files">
        <p className="text-neutral-500">
          Gaal Systems follows a standard procedure of using log files. These
          files log visitors when they visit websites. All hosting companies do
          this and a part of hosting services&apos; analytics. The information
          collected by log files include internet protocol (IP) addresses,
          browser type, Internet Service Provider (ISP), date and time stamp,
          referring/exit pages, and possibly the number of clicks. These are not
          linked to any information that is personally identifiable. The purpose
          of the information is for analyzing trends, administering the site,
          tracking users&apos; movement on the website, and gathering
          demographic information.
        </p>
      </PagePrivacyPolicyBlock>

      <PagePrivacyPolicyBlock title="Cookies and Web Beacons">
        <p className="text-neutral-500">
          Like any other website, Graal Systems uses &apos;cookies&apos;. These
          cookies are used to store information including visitor&apos;s
          preferences, and the pages on the website that the visitor accessed or
          visited. The information is used to optimize the users&apos;
          experience by customizing our web page content based on visitors&apos;
          browser type and/or other information.
        </p>
      </PagePrivacyPolicyBlock>
      <PagePrivacyPolicyBlock title="Third-Party Privacy Policies">
        <div className="text-neutral-500">
          <p>
            Graal Systems&apos;s Privacy Policy does not apply to other
            advertisers or websites. Thus, we are advising you to consult the
            respective Privacy Policies of these third-party ad servers for more
            detailed information. It may include their practices and
            instructions about how to opt-out of certain options. You may find a
            complete list of these Privacy Policies and their links here:
            Privacy Policy Links.
          </p>
          <p>
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers&apos;
            respective websites. What Are Cookies?
          </p>
        </div>
      </PagePrivacyPolicyBlock>
      <PagePrivacyPolicyBlock title="CCPA Privacy Policy (Do Not Sell My Personal Information)">
        <div className="text-neutral-500">
          <p>
            Under the CCPA, among other rights, California consumers have the
            right to:
          </p>
          <p>
            Request that a business that collects a consumer&apos;s personal
            data disclose the categories and specific pieces of personal data
            that a business has collected about consumers.
          </p>
          <p>
            Request that a business delete any personal data about the consumer
            that a business has collected.
          </p>
          <p>
            Request that a business that sells a consumer&apos;s personal data,
            not sell the consumer&apos;s personal data.
          </p>
          <p>
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </p>
        </div>
      </PagePrivacyPolicyBlock>
      <PagePrivacyPolicyBlock title="GDPR Privacy Policy (Data Protection Rights)">
        <div className="text-neutral-500">
          <p>
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following:
          </p>
          <p>
            The right to access - You have the right to request copies of your
            personal data. We may charge you a small fee for this service.
          </p>
          <p>
            The right to rectification - You have the right to request that we
            correct any information you believe is inaccurate. You also have the
            right to request that we complete the information you believe is
            incomplete.
          </p>
          <p>
            The right to erasure - You have the right to request that we erase
            your personal data, under certain conditions.
          </p>
          <p>
            The right to restrict processing - You have the right to request
            that we restrict the processing of your personal data, under certain
            conditions.
          </p>
          <p>
            The right to object to processing - You have the right to object to
            our processing of your personal data, under certain conditions.
          </p>
          <p>
            he right to data portability - You have the right to request that we
            transfer the data that we have collected to another organization, or
            directly to you, under certain conditions.
          </p>
          <p>
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </p>
        </div>
      </PagePrivacyPolicyBlock>

      <PagePrivacyPolicyBlock title="Children's Information">
        <div className="text-neutral-500">
          <p>
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
          </p>
          <p>
            Graal Systems does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </p>
        </div>
      </PagePrivacyPolicyBlock>
    </div>
  );
}

interface PagePrivacyPolicyBlockProps {
  title: string;
  children: any;
}

function PagePrivacyPolicyBlock({
  title,
  children,
}: Readonly<PagePrivacyPolicyBlockProps>) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-semibold text-xl">{title}</h2>
      {children}
    </div>
  );
}
