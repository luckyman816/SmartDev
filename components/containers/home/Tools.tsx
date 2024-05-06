import Image from "next/image";
import ToolsThumb from "@/public/images/cress-consultancy.webp";

const Tools = () => {
  return (
    <section className="section tools pb-0">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="tools__thumb dir-rtl">
              <div className="reveal-img parallax-img">
                <Image
                  src={ToolsThumb}
                  alt="Image"
                  className="unset"
                  style={{
                    borderRadius: "20px",
                    boxShadow: "0 0 6px 10px rgb(0,170,255)",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1 order-first order-lg-last">
            <div className="section__content">
              <span className="sub-title">Frontend & Blockchain developer &#40;London, UK&#41;</span>
              <h2 className="title title-animation">
               Cressoft Consultancy <br />
               &#40;2022/8 - Current&#41;
              </h2>
              <p>
              • Creating new features, functionality and capabilities on the e-commerce sites using React and Typescript <br/>
              • Worked with a 16-person agile team to create comprehensive customer solutions.<br/>
              • Write clean, maintainable, and well-documented code.<br/>
              • Troubleshoot and resolve software defects and performance issues.<br/>
              • Conduct thorough testing, including unit and integration testing, to ensure software quality.<br/>
              • Built token bridge chain which enables users to transfer tokens from Ethereum to our chain<br/>
              • Added observer module which tracks the transaction from Ethereum and the Cosmos chain <br />
              • Built NFT marketplace on the chain using Cosmwasm
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
