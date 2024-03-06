import Image from "next/image";
import ToolsThumb from "@/public/images/tools-thumb.png";

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
          <div className="col-12 col-lg-5 col-xxl-5 offset-xxl-1 order-first order-lg-last">
            <div className="section__content">
              <span className="sub-title">The Future of Blockchain</span>
              <h2 className="title title-animation">
                The future of blockchain in finance is quite promising.
              </h2>
              <p>
                The interaction with blockchain will be as effortless as sending
                an email, its complexities hidden, its efficacy and security
                omnipresent. In this future, blockchain is not just a
                technology; it is a silent orchestrator of digital trust and
                ownership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
