import { CiMobile3 } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { FiHeadphones } from "react-icons/fi";
import { TbDeviceGamepad } from "react-icons/tb";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

function Test(Props) {
  return (
    <div className="border border-[#0000004D] w-[calc(50%-15px)] sm:w-[calc(33.33%-18px)] md:w-[calc(25%-19px)] lg:w-[calc(16.66%-14px)] xl:w-[calc(16.66%-27px)] h-36 md:h-32 lg:h-[130px] xl:h-36 rounded flex flex-col text-center items-center justify-center lg:pt-3 xl:pt-6 gap-4">
      <span className="text-6xl">{Props.CategoriesIcon}</span>
      <p className="font-medium">{Props.CategoriesName}</p>
    </div>
  );
}

export default function BrowserCategories() {
  return (
    <div className="">
   

      <div className="flex  mx-4 md:mx-16 xl:mx-[92px] my-5 sm:pt-6 lg:pt-8 xl:pt-10 flex-wrap gap-6 lg:gap-4 xl:gap-8">
        <Test CategoriesIcon={<CiMobile3 />} CategoriesName="Phones" />
        <Test CategoriesIcon={<RiComputerLine />} CategoriesName="Computers" />
        <Test CategoriesIcon={<BsSmartwatch />} CategoriesName="SmartWatch" />
        <Test CategoriesIcon={<CiCamera />} CategoriesName="Camera" />
        <Test CategoriesIcon={<FiHeadphones />} CategoriesName="HeadPhones" />
        <Test CategoriesIcon={<TbDeviceGamepad />} CategoriesName="Gaming" />
      </div>

      <div className="border-b border-y-gray-300 pb-5 mx-8 md:mx-16 xl:mx-[92px] sm:pt-10"></div>
    </div>
  );
}
