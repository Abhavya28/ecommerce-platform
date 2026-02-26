import Button from "../components/Button";

const Discounts = () => {
  return (
    <section className="py-10 px-5 md:px-20">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left */}
        <div className="flex flex-col gap-4">
          {/* Upper Left */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="bg-[#27678D] p-12 rounded-2xl flex flex-col gap-6">
              <div>
                <h1 className="text-secondary font-bold text-xl">
                  SAVE UP TO
                  <br />
                  <span className="text-6xl">40% OFF</span>
                </h1>
                <h1 className="text-white text-6xl">
                  On All Aktins <br />
                  Products
                </h1>
              </div>
              <div>
                <Button className="bg-secondary text-white text-lg" size="lg">
                  Shop Now!
                </Button>
              </div>
            </div>

            <div className="bg-[#FCF0F0] p-12 rounded-2xl flex flex-col gap-6">
              <div>
                <h1 className="text-[#D94945] font-bold text-xl">
                  SAVE UP TO
                  <br />
                  <span className="text-6xl">40% OFF</span>
                </h1>
                <h1 className="text-black text-6xl">
                  On All Aktins <br />
                  Products
                </h1>
              </div>
              <div>
                <Button className="bg-[#D94945] text-white text-lg" size="lg">
                  Shop Now!
                </Button>
              </div>
            </div>
          </div>

          {/* Lower Left */}
          <div className="bg-[#FBF5C2] p-12 rounded-2xl flex flex-col gap-6">
            <div>
              <h1 className="text-[#D94945] font-bold text-xl">
                SORE AND IRRITATED THROAT?
              </h1>
              <h1 className="text-black text-6xl">
                Effective Relief <br />
                For Painful Sore Throat!
              </h1>
            </div>
            <div>
              <Button className="bg-[#D94945] text-white text-lg" size="lg">
                Shop Now!
              </Button>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="bg-[#4ABED7] p-12 rounded-2xl flex flex-col gap-6">
              <div>
                <h1 className="text-white font-bold text-xl">
                  BUY 1, GET 1
                  <br />
                  <span className="text-6xl">FREE</span>
                </h1>
                <h1 className="text-black text-6xl">
                  Sport Gel  <br />
                  Rapid Active
                </h1>
              </div>
              <div>
                <Button className="bg-[#26658C] text-white text-lg" size="lg">
                  Shop Now!
                </Button>
              </div>
            </div>
      </div>
    </section>
  );
};

export default Discounts;
