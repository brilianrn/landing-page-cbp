"use client";

import { Popover } from "@/components/atoms";
import {
  Check,
  Copy,
  FacebookIcon,
  LinkedinIcon,
  Mail,
  Share2,
  Twitter,
} from "lucide-react";
import {
  EmailShareButton,
  FacebookShareButton,
  LineIcon,
  LineShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";
import { useState } from "react";

export const ProfileShare = () => {
  const [copying, setCopying] = useState<boolean>(false);

  const handleCopy = async () => {
    setCopying(true);
    try {
      await navigator.clipboard.writeText(process.env.BASE_URL || "");
      setTimeout(() => setCopying(false), 3000);
      // eslint-disable-next-line
    } catch (_) {
      setCopying(false);
    }
  };

  return (
    <Popover
      itemClassName="w-48"
      position="bottom end"
      trigger={<Share2 className="size-6 text-gray-800 cursor-pointer" />}
    >
      <WhatsappShareButton
        url={process.env.BASE_URL || ""}
        className="w-full !bg-danger-default"
        title={process.env.TITLE || ""}
        separator=" - "
      >
        <div className="flex items-center gap-2 justify-start">
          <WhatsappIcon className="size-4" />
          <p>WhatsApp</p>
        </div>
      </WhatsappShareButton>
      <FacebookShareButton
        url={process.env.BASE_URL || ""}
        className="w-full !bg-danger-default"
        title={process.env.TITLE || ""}
        quote={process.env.DESCRIPTION || ""}
        hashtag={"#cahayabangunperkasa"}
      >
        <div className="flex items-center gap-2 justify-start">
          <FacebookIcon className="size-4" />
          <p>Facebook</p>
        </div>
      </FacebookShareButton>
      <TwitterShareButton
        url={process.env.BASE_URL || ""}
        className="w-full !bg-danger-default"
        title={process.env.TITLE || ""}
        via="CahayaBangunPerkasa"
        hashtags={["cahayabangunperkasa", "generaltrading", "contractor"]}
      >
        <div className="flex items-center gap-2 justify-start">
          <Twitter className="size-4 fill-[#1DA1F2] text-[#1DA1F2]" />
          <p>Twitter</p>
        </div>
      </TwitterShareButton>
      <EmailShareButton
        url={process.env.BASE_URL || ""}
        className="w-full !bg-danger-default"
        title={process.env.TITLE || ""}
        body={process.env.DESCRIPTION || ""}
        subject={"Cahaya Bangun Perkasa"}
        separator=" - "
      >
        <div className="flex items-center gap-2 justify-start">
          <Mail className="size-4" />
          <p>Email</p>
        </div>
      </EmailShareButton>
      <LineShareButton
        url={process.env.BASE_URL || ""}
        className="w-full !bg-danger-default"
        title={process.env.TITLE || ""}
      >
        <div className="flex items-center gap-2 justify-start">
          <LineIcon className="size-4" />
          <p>Line</p>
        </div>
      </LineShareButton>
      <LinkedinShareButton
        url={process.env.BASE_URL || ""}
        className="w-full !bg-danger-default"
        title={process.env.TITLE || ""}
        summary={process.env.DESCRIPTION || ""}
        source={process.env.BASE_URL || ""}
      >
        <div className="flex items-center gap-2 justify-start">
          <LinkedinIcon className="size-4" />
          <p>LinkedIn</p>
        </div>
      </LinkedinShareButton>
      <div
        onClick={handleCopy}
        className="flex items-center gap-2 justify-start cursor-pointer"
      >
        {copying ? (
          <span className="animate-pulse">
            <Check className="size-4 text-primary-default" />
          </span>
        ) : (
          <Copy className="size-4" />
        )}
        <p>Copy Link</p>
      </div>
    </Popover>
  );
};
