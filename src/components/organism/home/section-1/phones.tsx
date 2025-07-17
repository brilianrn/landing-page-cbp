import constants from "@/shared/constants";
import { PhoneCall } from "lucide-react";
import { WhatsappIcon } from "next-share";

export const Phones = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <a
        href={`${constants.waMe("6281804899000")}?text=${encodeURIComponent(
          constants.defaultMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 group hover:text-primary-default duration-200 transition-all hover:font-bold grid grid-cols-12 items-center justify-start w-full py-2 px-3 dark:text-white hover:dark:text-primary-lighter"
      >
        <div className="col-span-2">
          <WhatsappIcon className="size-6 rounded-full" />
        </div>
        <p className="col-span-10 group-hover:tracking-widest transition-all duration-200">
          0818-0489-9000
        </p>
      </a>
      <a
        href={`${constants.waMe("6283833333913")}?text=${encodeURIComponent(
          constants.defaultMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 group hover:text-primary-default duration-200 transition-all hover:font-bold grid grid-cols-12 items-center justify-start w-full py-2 px-3 dark:text-white hover:dark:text-primary-lighter"
      >
        <div className="col-span-2">
          <WhatsappIcon className="size-6 rounded-full" />
        </div>
        <p className="col-span-10 group-hover:tracking-widest transition-all duration-200">
          0838-3333-3913
        </p>
      </a>
      <a
        href="tel:0318075779"
        className="text-gray-800 group hover:text-primary-default duration-200 transition-all hover:font-bold grid grid-cols-12 items-center justify-start w-full py-2 px-3 dark:text-white hover:dark:text-primary-lighter"
      >
        <PhoneCall className="size-5 col-span-2" />
        <p className="col-span-10 group-hover:tracking-widest transition-all duration-200">
          031-8075779
        </p>
      </a>
    </div>
  );
};
