import React from "react";

import { Img, WrapText, Text } from "../style/Page";

function Page({ text, index }) {
  return (
    <>
      <Img src={require(`../images/Strona_${++index}.png`)} alt=""></Img>
      <WrapText>
        <Text
          dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br />") }}
        ></Text>
      </WrapText>
    </>
  );
}

export default Page;
