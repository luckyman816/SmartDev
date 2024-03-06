import Image from "next/image";
import GenThumb from "@/public/images/gen-thumb.png";

const Generation = () => {
  return (
    <section className="section gen pb-0">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-5 col-xxl-4">
            <div className="section__content">
              <span className="sub-title">Trend</span>
              <h2 className="title title-animation">Blockchain in 2024</h2>
              <p>
                As we look ahead to 2024, the blockchain landscape is dynamic
                and filled with opportunities and challenges. Enterprise
                adoption, DeFi expansion, regulatory developments, and the
                convergence of AI with blockchain are key trends shaping the
                future.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xxl-7 offset-xxl-1">
            <div className="gen__thumb">
              <div className="reveal-img parallax-img">
                <Image
                  src={GenThumb}
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
        </div>
      </div>
    </section>
  );
};

export default Generation;
