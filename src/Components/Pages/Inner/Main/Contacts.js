import React from "react";
import Box from "@mui/material/Box";
import "../InnerStyle.css";
import MainTitle from "./Titles/MainTitle";
import SecondaryTitle from "./Titles/SecondaryTitle";
import PhoneNumberIcon from "../../../Icons/PhoneNumberIcon";
import GithubIcon from "../../../Icons/GithubIcon";
import MailIcon from "../../../Icons/MailIcon";
import TwitterIcon from "../../../Icons/TwitterIcon";
import FacebookIcon from "../../../Icons/FacebookIcon";

const Contacts = () => {
  return (
    <Box id="contacts">
      <MainTitle title="Contacts" />

      <Box className="contacts-info-wrapper">
        <div className="each-contact-wrapper">
          <PhoneNumberIcon />
          <div>
            <SecondaryTitle title="Phone number" />
            <p className="contact-link">500 342 242</p>
          </div>
        </div>

        <div className="each-contact-wrapper">
          <MailIcon />
          <div>
            <SecondaryTitle title="Email address" />
            <p className="contact-link">kamsolutions.pl</p>
          </div>
        </div>

        <div className="each-contact-wrapper">
          <TwitterIcon />
          <div>
            <SecondaryTitle title="Twitter" />
            <a
              href="https://twitter.com/wordpress"
              target="_blank"
              className="contact-link"
            >
              https://twitter.com/wordpress
            </a>
          </div>
        </div>

        <div className="each-contact-wrapper">
          <FacebookIcon />
          <div>
            <SecondaryTitle title="Facebook" />
            <a
              href="https://www.facebook.com/facebook"
              target="_blank"
              className="contact-link"
            >
              https://www.facebook.com/facebook
            </a>
          </div>
        </div>

        <div className="each-contact-wrapper">
          <GithubIcon />
          <div>
            <SecondaryTitle title="Github" />
            <a href="kamsolutions.pl" target="_blank" className="contact-link">
              kamsolutions.pl
            </a>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Contacts;
