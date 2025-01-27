import Image from "next/image";
import { FC } from "react";
import LogoImg from "../../../public/assets/icons/icon-1.png";

interface LogoProps {
  width: string;
  height: string;
}

const Logo: FC<LogoProps> = ({ width, height }) => {
  return (
    <div
      className="flex items-start justify-start z-50"
      style={{ width, height }}
    >
      <Image
        src={LogoImg}
        alt="MiniShop"
        className="w-fit h-full object-contain overflow-visible"
      />
    </div>
  );
};

export default Logo;
