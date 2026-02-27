import { Clock, Mail, MapPin, Phone } from "lucide-react";


const Footer = () => {
  return (
    <footer className="py-10 px-5 md:px-20">
      {/* Upper */}
      <div className="flex flex-col md:flex-row gap-16">
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
            <h1 className="text-xl font-bold">Latest News</h1>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                    <img src="/images/corona.jpg" alt="" />
                    <div className="flex flex-col gap-1">
                        <h1 className="font-bold text-primary hover:text-blue-950 text-lg">Herbs and Supplements May Protect You From the Coronavirus Epidemic</h1>
                        <p className="text-sm text-headings">October 28, 2020</p>
                        <p className="text-sm text-primary">0 comments</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <img src="/images/spa.jpg" alt="" />
                    <div className="flex flex-col gap-1">
                        <h1 className="font-bold text-primary hover:text-blue-950 text-lg">5 Essential Natural Stress Relief Products for That Help Calm You Down</h1>
                        <p className="text-sm text-headings">October 21, 2020</p>
                        <p className="text-sm text-primary">3 comments</p>
                    </div>
                </div>
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
        <div>
            
        </div>
      </div>

      {/* Lower */}
      <div></div>
    </footer>
  );
};

export default Footer;
