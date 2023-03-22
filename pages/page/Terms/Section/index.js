import React, { useEffect, useState } from "react"
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Text from "../../../../components/Text/Text"
import { data } from "../Collection/data"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

import { Wrapper, TabsContent, TabBody, TabItem, TabDetails } from "./style"

const index = () => {
  const [isOpen, setIsopen] = useState(true)

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true)
  }

  return (
    <>
      <Tabs>
         <Wrapper style={{ color: "white" }}>
         
          <TabList className={`tablist ${isOpen === true ? "active" : ""}`}>
            {data.map((head) => (
              <Tab className="focusChange">
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
                  mmwidth="unset"
                  mpadding="0"
                />
              </Tab>
            ))}
          </TabList>
          <TabsContent
            className={`tabscontent ${isOpen == true ? "active" : ""}`}
          >
            <div style={{ display: "flex" }}>
              <div className="btn-hamburger" onClick={ToggleSidebar}></div>
              <Text
                Text="Terms and Conditions"
                font
                lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
                size="2.5rem"
                fw="400"
                lh
                align="center"
                xmsize="2.3rem"
                xssize="2rem"
                msize="1.5rem"
                padding="4vw"
                mwidth=""
              />
            </div>

            <TabBody>
              <TabItem>
                {data.map((data1) => (
                  <div>
                    <TabPanel>
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
                    </TabPanel>
                  </div>
                ))}
              </TabItem>
            </TabBody>
          </TabsContent>
       </Wrapper>
      </Tabs>
    </>
  )
}

export default index
