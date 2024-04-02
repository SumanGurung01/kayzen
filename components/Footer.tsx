import { Facebook, Instagram } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer id="footer" className="mt-40 bg-zinc-900">
      <section className="m-auto max-w-[1400px] gap-10 px-4 py-10 text-white md:px-6 lg:flex lg:px-10">
        <div className="mb-20 lg:mb-0 lg:w-[50%]">
          <p className="gradient-text text-3xl font-bold">KAYZEN</p>
          <p className="my-6">
            Instantly answer your visitors' questions with a personalized
            chatbot trained on your website content.
          </p>
        </div>
        <div className="flex gap-10 lg:w-[50%]">
          <ul className="flex w-[30%] flex-col gap-4">
            <li className="font-bold">
              <a href="#">COMPANY</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Integration</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>

          <ul className="flex w-[30%] flex-col gap-4">
            <li className="font-bold">
              <a href="#">LEGAL</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>

          <ul className="flex w-[30%] flex-col gap-4">
            <li className="font-bold">
              <a href="#">REACH OUT</a>
            </li>
            <li>
              <a href="#">Talk to us</a>
            </li>
            <li className="flex gap-6">
              <a href="#">
                <Instagram color="violet" />
              </a>
              <a href="#">
                <Facebook color="violet" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
