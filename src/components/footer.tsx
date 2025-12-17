import "@fortawesome/fontawesome-svg-core/styles.css";

import CompanyInfo from "./company-info";
import Image from "next/image";
import Link from "next/link";
import { SocialMedia } from "./social-media";
import { config } from "@fortawesome/fontawesome-svg-core";
import logoImage from "@/common/assets/img/logo/logo_new.png";

config.autoAddCss = false;

export const Footer = () => {
  return (
    <footer className="bg-[#100f0f]">
      <div className="container py-10">
        <div className="flex flex-wrap flex-col md:flex-row items-stretch justify-between gap-10">
          <div className="space-y-5">
            <div className="footer-logo">
              <Link
                href="/"
                className="flex items-center"
              >
                <Image
                  src={logoImage}
                  alt="logo"
                  height={120}
                />
                <h3 className="font-matemasie text-4xl text-white">Erkatoy</h3>
              </Link>
            </div>

            <SocialMedia />
          </div>
          <div>
            <div className="overflow-hidden">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1EvJ0tFZG63dE2pvp5jSknO_nbKD6ifs&ehbc=2E312F&noprof=1"
                height="380"
                className="w-full md:w-[520px]"
                style={{
                  border: "0px",
                  padding: "0",
                  marginTop: "-60px",
                }}
              ></iframe>
            </div>
          </div>
          <div>
            <CompanyInfo />
          </div>
        </div>
      </div>

      <div className="footer-bottom-area">
        <div className="container">
          <div className="footer-border">
            <div className="row d-flex align-items-center justify-content-between">
              <div className="col-lg-6">
                <div className="footer-copy-right">
                  <p>
                    Copyright &copy;
                    {new Date().getFullYear()}
                    All rights reserved @mirzaahmedov.dev
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
