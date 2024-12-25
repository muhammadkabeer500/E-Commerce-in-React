import hero_img from "../assets/image/hero.png";

const categories = [
  "Woman’s Fashion",
  "Men’s Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby’s & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

export default function Hero() {
  return (
    <div className="h-[calc(100vh-133px)]">
      <div className="flex flex-col lg:flex-row justify-between lg:mx-[92px] items-center">
        <div className="flex lg:w-[30%] xl:w-[19%] lg:border-r border-r-gray-300 order-2 lg:order-none mx-4 md:mx-16 lg:mx-0">
          <ul className="flex flex-wrap lg:flex-col lg:gap-y-[17px] text-start text-sm sm:text-base mt-6 md:mt-9 gap-4 md:gap-6">
            {categories.map((items, i) => (
              <li key={i}>
                <a className="link_hover" href="">
                  {items}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-7 sm:mt-10 mx-4 md:mx-16 lg:mx-0">
          <img
            src={hero_img}
            alt="Hero_image"
            className="h-[150px] sm:h-[320px] lg:h-[340px] lg:ml-7 object-fill"
          />
        </div>
      </div>
    </div>
  );
}
