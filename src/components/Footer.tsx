export default function Footer() {
  return (
    <div className="bg-black">
      <div className="grid grid-cols-4 gap-8 text-neutral-400 py-12 px-24 container mx-auto">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-white">Graal Systems</h1>
          <p>
            Graal Systems is a french software company founded by experts from
            the world of data in order to solve problems of data processing.
          </p>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <li>home</li>
            <li>Blog</li>
            <li>Product</li>
            <li>Contact</li>
            <li>Documentation</li>
            <li>Community</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <li>Healthcare</li>
            <li>Financial Services</li>
            <li>Marketing and sales</li>
            <li>Denfense</li>
            <li>Cybersecurity</li>
            <li>Manufacturing</li>
            <li>Governement</li>
            <li>GDPR</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <p>Phone : +33 1 49 58 39</p>
          <p>Email : contact@graal.systems</p>
          <p>Website : graal.systems</p>
        </div>
      </div>
      <div className="mx-auto container flex justify-around items-center gap-12 text-white">
        <p className="text-center py-4">
          © 2024 Graal Systems. All rights reserved.
        </p>
        <div>
          <ul className="flex gap-4">
            <li>Contact us</li>
            <li>Disclamer</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <small>Version Alpha</small>
        </div>
      </div>
    </div>
  );
}
