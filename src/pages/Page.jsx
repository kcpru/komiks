import React from "react";

import { Img, WrapText, Text } from "../style/Page";

import photo1 from "../images/Strona_1.png";
import photo2 from "../images/Strona_2.png";
import photo3 from "../images/Strona_3.png";
import photo4 from "../images/Strona_4.png";
import photo5 from "../images/Strona_5.png";
import photo6 from "../images/Strona_6.png";
import photo7 from "../images/Strona_7.png";
import photo8 from "../images/Strona_8.png";
import photo9 from "../images/Strona_9.png";
import photo10 from "../images/Strona_10.png";

const photos = [
  () => <Img src={photo1} />,
  () => <Img src={photo2} />,
  () => <Img src={photo3} />,
  () => <Img src={photo4} />,
  () => <Img src={photo5} />,
  () => <Img src={photo6} />,
  () => <Img src={photo7} />,
  () => <Img src={photo8} />,
  () => <Img src={photo9} />,
  () => <Img src={photo10} />,
];

console.log(photo1);
function Page({ text, index }) {
  return (
    <>
      {photos[index]}
      <WrapText>
        <Text
          dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br />") }}
        ></Text>
      </WrapText>
    </>
  );
}

export default Page;
