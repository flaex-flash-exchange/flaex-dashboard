const Footer = (): JSX.Element => {
  return (
    <div className="flex justify-center py-10 px-8 items-center bg-[#001253]">
      <div className="flex text-xs gap-2 min-w-[400px]">
        <li>Our Story</li>
        <li>Our Menu</li>
        <li>Shop</li>
        <li>Contact</li>
        <li>Community</li>
      </div>
      <div className="flex-1 text-center">
        <h1
          className={`font-extralight font-iCielAlina cursor-pointer ease-in duration-200 text-4xl`}
        >
          Vietnamese Restaurant
        </h1>
      </div>
      <div className="text-xs min-w-[400px]">
        Copyrigth by Vietnamese Restaurant food seller. All right reserve.
      </div>
    </div>
  );
};

export default Footer;
