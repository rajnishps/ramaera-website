import React, { useEffect, useState } from "react";
import Text from "../../../../components/Text/Text";
import data from "./../Collection/data";

import {
  Wrapper,
  TabsList,
  Ul,
  Li,
  TabsContent,
  TabBody,
  TabItem,
  TabDetails,
} from "./style";

const index = () => {
  return (
    <>
      <Wrapper style={{ color: "white" }}>
        <TabsList>
          <Ul>
            {data.map((head) => (
              <Li>
                <Text
                  Text={head.heading}
                  font
                  fw="200"
                  lh
                  align
                  mta="left"
                  size="1rem"
                  xmsize="1rem"
                  xssize="1rem"
                  msize="0.8rem"
                  padding=" 0"
                  mwidth="unset"
                  mpadding="0"
                />
              </Li>
            ))}
          </Ul>
        </TabsList>
        <TabsContent>
          {/* <Text
            Text="Privacy and Policy "
            font
            lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
            size="2.5rem"
            fw="400"
            lh
            align="center"
            xmsize="2.3rem"
            xssize="2rem"
            msize="1.5rem"
            padding="1vw"
            mwidth="unset"
          /> */}

          <TabBody>
            <TabItem>
              {data.map((data1) => (
                <div>
                  <Text
                    Text={data1.heading}
                    font
                    lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
                    size="1.5rem"
                    fw="200"
                    lh
                    align
                    mta="left"
                    xmsize="1.2rem"
                    xssize="1.1rem"
                    msize="1rem"
                    padding="2vw 0"
                    mwidth="unset"
                    mpadding="0"
                  />

                  <TabDetails>
                    {data1.para.map((para1) => (
                      <p>{para1}</p>
                    ))}
                  </TabDetails>
                </div>
              ))}
            </TabItem>
          </TabBody>
        </TabsContent>
      </Wrapper>
    </>
  );
};

export default index;
