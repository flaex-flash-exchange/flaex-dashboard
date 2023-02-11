import { Image } from "antd";
import React, { useState, useEffect } from "react";

const mockIcon = "/images/logo.svg";

interface IImage {
  src?: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

const AntImage = (props: IImage) => {
  const { src, style, className, height, width } = props;
  const [currentSrc, setCurrentSrc] = useState(mockIcon);

  useEffect(() => {
    if (src) {
      setCurrentSrc(src);
    }
  }, [src]);

  return (
    <div style={{ width, height }}>
      <Image
        className={className}
        placeholder=""
        src={`${currentSrc}`}
        alt="ico"
        preview={{ visible: false, mask: false }}
        loading="eager"
        width={"100%"}
        height={"100%"}
        style={{ ...style }}
      />
    </div>
  );
};

export default AntImage;
