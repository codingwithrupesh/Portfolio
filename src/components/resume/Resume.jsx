import React, { useEffect, useState } from "react";
import { axiosClient } from "../../../utils/axiosClient";
import { Link } from "react-router-dom";
import Title from "../layouts/Layout";
import { FaCircleArrowDown } from "react-icons/fa6";

const Resume = () => {
  const [pdfUrl, setPdfUrl] = useState(null);

  const handleDownload = async () => {
    try {
      const axiosres = await axiosClient.get("/resume/download");
      // console.log(" respons is",axiosres);
      // console.log(axiosres?.data);
      setPdfUrl(axiosres?.data?.pdfUrl);
      // console.log("url",pdfUrl);
    } catch (error) {
      Promise.reject.error;
    }
  };

  return (
    <section
      id="resume"
      className="w-full py-20  border-b-[1px] border-b-black flex justify-center"
    >
      <div className="flex flex-col items-center">
        <Title
          title={
            <h2
              className="text-2xl
"
            >
              Download & See Resume
            </h2>
          }
          des={
            <button className="pl-36 text-4xl p-8 " onClick={handleDownload}>
              {" "}
              <Link to={pdfUrl}>
                {" "}
                <span className="resumeIcon text-4xl ">
                  <FaCircleArrowDown />
                </span>
              </Link>
            </button>
          }
        />
        <h3 className="text-4xl"> It May take Few second to load Please wait...</h3>
      </div>
    </section>
  );
};

export default Resume;
