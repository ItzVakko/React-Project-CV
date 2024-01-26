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
              <SecondaryTitle title="1990" />
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

              <SecondaryTitle title="Title" />

              <Typography
                variant="p"
                component="p"
                className="main-text-content"
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
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
              <SecondaryTitle title="1991" />
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

              <SecondaryTitle title="Title" />

              <Typography
                variant="p"
                component="p"
                className="main-text-content"
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
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
              <SecondaryTitle title="1992" />
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

              <SecondaryTitle title="Title" />

              <Typography
                variant="p"
                component="p"
                className="main-text-content"
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </Box>
  );
};

export default Education;
