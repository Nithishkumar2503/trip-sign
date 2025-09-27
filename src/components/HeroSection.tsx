export default function HeroSection() {
  interface HeroContentProps {
    id: number;
    heading: string;
    subHeading: string;
    img: string;
  }
  const heroContent: HeroContentProps[] = [
    {
      img: "/src/assets/hero1.jpg",
      id: 1,
      heading: "Turn Your Study Abroad Dreams into Reality",
      subHeading:
        "Expert guidance for admissions, visas, and career opportunities in top universities worldwide.",
    },
    {
      img: "/src/assets/hero2.png",
      id: 2,
      heading: "Global Education, Personalized for You",
      subHeading:
        "We help you choose the right course and destination to achieve your international career goals.",
    },
    {
      img: "/src/assets/hero3.png",
      id: 3,
      heading: "Your Journey to Study and Work Abroad Starts Here",
      subHeading:
        "From university selection to visa support, we make your path to success smooth and stress-free.",
    },
    {
      img: "/src/assets/hero4.png",
      id: 4,
      heading: "Launch Your Career Abroad with Confidence",
      subHeading:
        "We provide end-to-end support for securing international job opportunities and work visas.",
    },
    // {
    //   img: "",
    //   id: 5,
    //   heading: "Work Abroad Opportunities Made Easy",
    //   subHeading:
    //     "Get expert advice on global job markets, resume building, and interview preparation.",
    // },
    // {
    //   img: "",
    //   id: 6,
    //   heading: "Your International Career Starts Here",
    //   subHeading:
    //     "Connect with top employers abroad and kickstart your professional journey with guidance and support.",
    // },
  ];
  return (
    <>
      <div className="lg:px-[20vw] px-[10vw] w-[100vw] h-[100vh] items-center content-center  ">
        {heroContent.map((item: HeroContentProps) => (
          <div
            className={
              item.id % 2 == 1
                ? "lg:flex items-center content-center gap-10 pb-2 "
                : "lg:flex flex-row-reverse items-center content-center gap-10 pb-2"
            }
            >
            <div className="w-full items-center content-center">
              <img src={item.img} alt="" className="select-none " />
            </div>
            <div className="w-full items-center content-center">
              <h1 className="text-primary lg:text-4xl text-2xl">{item?.heading}</h1>
              <h2 className="text-secondary lg:text-xl text-sm">{item?.subHeading}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
