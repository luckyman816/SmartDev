import Image from "next/image";
import Link from "next/link";
import CraftThumb from "@/public/images/craft-thumb.jpg";
import Shape from "@/public/images/footer/shape-one.png";

const Craft = () => {
  return (
    <section className="section craft" id="scrollPosition">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-7 col-xxl-7">
            <div className="section__content">
              <span className="sub-title">Blockchain Developer and Architect</span>
              <h2 className="title title-animation">
                Blockchain Developer | Architect <br /> DApp ICOs | NFT | Web3 <br /> Smart Contract
              </h2>
              <p>
                Excellence is my promise, and your satisfaction is my relentless
                pursuit. Prepare for a masterpiece of unparalleled quality,
                where every detail is a brushstroke of perfection and every word
                is a testament to dedication. Your expectations will not only be
                met but exceeded, as I pour my heart and soul into crafting the
                finest results for you. Get ready to be wowed by a standard of
                excellence that leaves an indelible mark. Your vision deserves
                nothing less, and I am here to deliver nothing short of the
                exceptional.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xxl-5">
            <div className="craft__thumb text-start text-lg-end">
              <div className="reveal-img parallax-img">
                <Image src={CraftThumb} alt="Image" priority style={{borderRadius: '20px', boxShadow: '0 0 4px 6px rgb(0,170,255)'}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="anime-one">
        <Image src={Shape} alt="Image" priority />
      </div>
    </section>
  );
};

export default Craft;
