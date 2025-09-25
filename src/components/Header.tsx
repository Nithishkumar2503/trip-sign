function Header() {
  return (
    <>
      <div className="md:h-28 h-18 rounded-xl  w-full bg-secondary fixed ">
        <div className="h-12 hidden md:block md:flex gap-2  md:w-[80vw] mx-auto items-center content-center  px-2">
          <h1>Find us</h1>
          <h1>1800 572 4422</h1>
          <h1>tripwithsign@gmail.com</h1>
          <h1>WhatsApp</h1>
        </div>
        <div className="md:bg-white h-full ">
          <div className="md:h-14 h-full items-center content-center md:w-[80vw] mx-auto  px-2 md:flex md:justify-between ">
            <div className="flex items-center content-center gap-2">
              <img
                className="w-12 block my-auto "
                src="/src/assets/trip-sign.png"
                alt=""
              />
              <h1 className=" md:block hidden">Home</h1>
              <h1 className=" md:block hidden">About us</h1>
              <h1 className=" md:block hidden">Countries</h1>
              <h1 className=" md:block hidden">Contact</h1>
            </div>
            <div className="flex items-center content-center gap-2  md:block hidden">
              <h1>Have Question? Free +9195005 16250</h1>
              <button className="border rounded p-1 px-2 border-primary text-primary">
                Book Appoinment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
