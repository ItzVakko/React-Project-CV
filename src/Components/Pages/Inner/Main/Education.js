import React from "react";
import MainTitle from "./Titles/MainTitle";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import SecondaryTitle from "./Titles/SecondaryTitle";
import "../InnerStyle.css";
import TimelineArrowIcon from "../../../Icons/TimelineArrowIcon";

const Education = () => {
  return (
    <Box className="education-wrapper" id="education">
      <MainTitle title="Education" />

      {/* here is timeline rendered */}

      <Box className="timeline-wrapper">
        <Timeline
          sx={{
            maxWidth: "100%",
            padding: 0,
            paddingLeft: "10px",
          }}
        >
          <TimelineItem
            sx={{
              "&::before": {
                content: "none",
              },
              gap: "35px",
            }}
          >
            <TimelineSeparator>
              <SecondaryTitle title="2021" />
              <TimelineConnector
                sx={{
                  width: "5px",
                  height: "100px",
                  background: "var(--main-shamrock, #26C17E)",
                  margin: "15px 0",
                }}
              />
            </TimelineSeparator>
            <TimelineContent
              sx={{
                padding: "15px",
              }}
              className="timeline-content"
            >
              <TimelineArrowIcon />

              <SecondaryTitle title="The beginning of a career!" />

              <Typography
                variant="p"
                component="p"
                className="main-text-content"
              >
                In 2021, started learning programming myself and i was spending
                almost my time in it. Web development was not what i wanted
                then. I liked to create games. I had a lot of exposure to
                computer technology and it was not difficult for me to do all
                this.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem
            sx={{
              "&::before": {
                content: "none",
              },
              gap: "35px",
            }}
          >
            <TimelineSeparator>
              <SecondaryTitle title="2022" />
              <TimelineConnector
                sx={{
                  width: "5px",
                  height: "100px",
                  background: "var(--main-shamrock, #26C17E)",
                  margin: "15px 0",
                }}
              />
            </TimelineSeparator>
            <TimelineContent
              sx={{
                padding: "15px",
              }}
              className="timeline-content"
            >
              <TimelineArrowIcon />

              <SecondaryTitle title="Started learning web development!" />

              <Typography
                variant="p"
                component="p"
                className="main-text-content"
              >
                In 2022, I realized that game development was not my work and
                decided to learn web development. I created my first website in
                2022 and it was only HTML, CSS. This profession came into me and
                i was fond of it. At that time i started learning JavaScript. It
                was a big challenge for me.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem
            sx={{
              "&::before": {
                content: "none",
              },
              gap: "35px",
            }}
          >
            <TimelineSeparator>
              <SecondaryTitle title="2023" />
              <TimelineConnector
                sx={{
                  width: "5px",
                  height: "50px",
                  background: "var(--main-shamrock, #26C17E)",
                  margin: "15px 0",
                }}
              />
            </TimelineSeparator>
            <TimelineContent
              sx={{
                padding: "15px",
              }}
              className="timeline-content"
            >
              <TimelineArrowIcon />

              <SecondaryTitle title="Became Front-End web developer!" />

              <Typography
                variant="p"
                component="p"
                className="main-text-content"
              >
                In 2023, my knowledge was not enough to start working and
                decided to learn more. I searched every resources and found one
                company called Educity. With the help of this company I was able
                to become a front-end developer and it took a lot of effort. I
                was multitasking and learning new resources. I studied
                javascript and then react. I learned several libraries like
                Axios, Redux, Swiper, Isotope-layout, MaterialUI, Bootstrap and
                so on. Now I can work on projects of medium complexity and
                complete them.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </Box>
  );
};

export default Education;
