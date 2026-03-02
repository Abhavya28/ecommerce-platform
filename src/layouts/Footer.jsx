import {
  Clock,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

const aboutUs = [
  { id: "1", title: "Home", href: "#" },
  { id: "2", title: "About Us", href: "#" },
  { id: "3", title: "Career", href: "#" },
  { id: "4", title: "Blog", href: "#" },
  { id: "5", title: "Terms and Conditions", href: "#" },
  { id: "6", title: "Privacy Policy", href: "#" },
  { id: "7", title: "Contact Us", href: "#" },
];

const customerCare = [
  { id: "1", title: "My Account", href: "#" },
  { id: "2", title: "My Orders", href: "#" },
  { id: "3", title: "Track Your Order", href: "#" },
  { id: "4", title: "Wishlist", href: "#" },
  { id: "5", title: "FAQs", href: "#" },
  { id: "6", title: "Refund/Return Policy", href: "#" },
];

const socialIcons = [
  { id: 1, icon: Facebook, link: "#" },
  { id: 2, icon: Twitter, link: "#" },
  { id: 3, icon: Instagram, link: "#" },
  { id: 4, icon: Linkedin, link: "#" },
  { id: 5, icon: Youtube, link: "#" },
];

const Footer = () => {
  return (
    <footer className="py-10 px-2 md:px-14">
      {/* Upper */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-2 border-b-2 border-gray-200 px-2 py-4">
        {/* Logo & PlayStore*/}
        <div className="flex flex-col gap-4">
          <img src="/logo.png" alt="" className="h-20 w-60" />
          <p>
            Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed
            laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel.
          </p>
          <div className="flex gap-4 items-center">
            <img src="/images/code.png" alt="" className="h-22 w-22" />
            <div className="flex flex-col gap-4">
              <img src="/images/gpay.png" alt="" />
              <img src="/images/apppay.png" alt="" />
            </div>
          </div>
        </div>

        {/* Latest News */}
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold">Latest News</h2>

          <div className="flex flex-col gap-6">
            {/* News Item 1 */}
            <article className="flex gap-4 items-stretch">
              <img
                src="/images/corona.jpg"
                alt="Corona"
                className="w-36 h-24 aspect-square object-cover rounded"
              />

              <div className="flex flex-col justify-between">
                <h3 className="font-semibold text-primary hover:text-blue-950">
                  Herbs and Supplements May Protect You From the Coronavirus
                  Epidemic
                </h3>

                <div className="text-sm">
                  <p className="text-headings">October 28, 2020</p>
                  <p className="text-primary">0 comments</p>
                </div>
              </div>
            </article>

            {/* News Item 2 */}
            <article className="flex gap-4 items-stretch">
              <img
                src="/images/spa.jpg"
                alt="Spa"
                className="w-36 h-24 aspect-square object-cover rounded"
              />

              <div className="flex flex-col justify-between">
                <h3 className="font-semibold text-primary hover:text-blue-950">
                  5 Essential Natural Stress Relief Products for That Help Calm
                  You Down
                </h3>

                <div className="text-sm">
                  <p className="text-headings">October 21, 2020</p>
                  <p className="text-primary">3 comments</p>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-bold">Contact Information</h1>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 text-headings items-center">
              <MapPin />
              <p>9863 - 9867 Mill Road, Cambridge, MG09 99HT</p>
            </div>
            <div className="flex gap-4 text-headings items-center">
              <Phone />
              <p>+1 800 603 6035 +1 800 889 9898</p>
            </div>
            <div className="flex gap-4 text-headings items-center">
              <Mail />
              <p className="text-primary">mail@companyname.com</p>
            </div>
            <div className="flex gap-4 text-headings items-center">
              <Clock />
              <p>Mon - Fri: 8am - 11pm, Sat - Sun: 8am - 12pm</p>
            </div>
          </div>
        </div>

        {/* About Us & Customer Care */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* About Us */}
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold">About Us</h1>
            <div className="flex flex-col gap-2">
              {aboutUs.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-primary hover:text-black"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          {/* Customer Care */}
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold">Customer Care</h1>
            <div className="flex flex-col gap-2">
              {customerCare.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-primary hover:text-black"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lower */}
      <div className="px-2 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Payment */}
        <div>
          <img src="/images/payment.png" alt="Payment" />
        </div>
        {/* Copright */}
        <p className="text-headings text-sm">
          Copyright © 2021 <span className="text-primary">Lekarna24 </span>. All
          Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-2">
          {socialIcons.map((item) => {
            const Icon = item.icon;

            return (
              <a key={item.id} href={item.link}>
                <Icon size={20} className="text-secondary h-8 w-8"/>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
