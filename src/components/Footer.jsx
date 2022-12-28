import React from "react";

import appStore from "../assets/appStore.png";
import googlePlay from "../assets/googleplay.png";
import fdn from "../assets/fdn.png";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";

function Footer() {
  return (
    <>
      <footer className="footer p-10 text-base-content font-bold">
        <div>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Feedback</a>
          <a className="link link-hover">Contact</a>
        </div>
        <div>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Help</a>
        </div>
        <div>
          <a className="link link-hover">Awards</a>
          <a className="link link-hover">Newsletter</a>
        </div>
        <div>
          <h1>Download Our Mobile App</h1>
          <div className="lg:flex gap-4">
            <img src={appStore} alt="AppStore" className="w-32 h-full lg:m-1" />
            <img src={googleplay} alt="GooglePlay" className="w-32 h-full" />
          </div>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t">
        <div className="items-center">
          <img src={fdn} alt="female daily network" className="w-32 h-5" />
          <p className="text-stone-500">
            Copyright © 2015 - 2017 Female Daily Network • All rights reserved{" "}
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end lg:mr-64">
          <div className="grid grid-flow-col gap-4">
            <a className="link">
              {/* <svg xmlns={facebook}></svg> */}
              <img src={facebook} alt="facebook" className="w-7 h-7" />
            </a>
            <a className="link">
              <img src={twitter} alt="twitter" className="w-7 h-7" />
            </a>
            <a className="link">
              <img src={instagram} alt="instagram" className="w-7 h-7" />
            </a>
            <a className="link">
              <img src={youtube} alt="youtube" className="w-7 h-7" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
