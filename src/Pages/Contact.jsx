import React from "react";
import { contactDetails } from "../Details";
import { socialMediaUrl } from "../Details";

const Contact = () => {
  const { email, phone } = contactDetails;
  const { linkdein, instagram, github } = socialMediaUrl;
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-2xl text-center md:text-3xl lg:text-5xl font-bold font-serif mt-10">
          Contact Me Here
        </h1>
        <p className="text-2xl text-center md:text-4xl xl:text-5xl xl:leading-tight font-bold bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent mt-10">
          {email}
        </p>
        <p className="text-2xl text-center md:text-4xl xl:text-5xl xl:leading-tight font-bold bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent mt-10">
          {phone}
        </p>
      </div>
      <div className="counter flex justify-center mt-6 gap-10 text-center items-center mb-8">
        <a href={linkdein} target="_blank" rel="noreferrer noopener">
          <svg
            className="fill-white"
            width="47"
            height="47"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 0.599976C7.04701 0.599976 0.600006 7.04698 0.600006 15C0.600006 22.953 7.04701 29.4 15 29.4C22.953 29.4 29.4 22.953 29.4 15C29.4 7.04698 22.953 0.599976 15 0.599976ZM11.475 20.9685H8.55901V11.5845H11.475V20.9685ZM9.99901 10.4325C9.07801 10.4325 8.48251 9.77997 8.48251 8.97297C8.48251 8.14948 9.09601 7.51648 10.0365 7.51648C10.977 7.51648 11.553 8.14948 11.571 8.97297C11.571 9.77997 10.977 10.4325 9.99901 10.4325ZM22.125 20.9685H19.209V15.768C19.209 14.5575 18.786 13.7355 17.7315 13.7355C16.926 13.7355 16.4475 14.292 16.236 14.8275C16.158 15.018 16.1385 15.288 16.1385 15.5565V20.967H13.221V14.577C13.221 13.4055 13.1835 12.426 13.1445 11.583H15.678L15.8115 12.8865H15.87C16.254 12.2745 17.1945 11.3715 18.768 11.3715C20.6865 11.3715 22.125 12.657 22.125 15.42V20.9685Z" />
          </svg>
        </a>
        <a href={instagram} target="_blank" rel="noreferrer noopener">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            width="50"
            height="50"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.5 2.25h9a5.25 5.25 0 015.25 5.25v9a5.25 5.25 0 01-5.25 5.25h-9A5.25 5.25 0 012.25 16.5v-9A5.25 5.25 0 017.5 2.25z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 7.5h.008v.008H16.5V7.5z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.625 12a3.375 3.375 0 106.75 0 3.375 3.375 0 00-6.75 0z"
            />
          </svg>
        </a>
        <a href={github} target="_blank" rel="noreferrer noopener">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
              width="50"
            height="50"
          >
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.683-.217.683-.483 0-.237-.009-.868-.014-1.704-2.782.604-3.369-1.343-3.369-1.343-.454-1.152-1.11-1.46-1.11-1.46-.908-.621.069-.609.069-.609 1.004.071 1.532 1.031 1.532 1.031.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.635-1.338-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .841-.269 2.75 1.025A9.564 9.564 0 0112 6.8c.852.004 1.709.115 2.51.337 1.908-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.393.1 2.646.64.698 1.029 1.591 1.029 2.682 0 3.841-2.338 4.687-4.565 4.936.36.31.678.923.678 1.86 0 1.344-.012 2.428-.012 2.756 0 .268.181.58.688.481A10.004 10.004 0 0022 12c0-5.523-4.477-10-10-10z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Contact;
