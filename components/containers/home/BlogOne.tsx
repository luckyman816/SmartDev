"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import one from "@/public/images/blog/one.png";
import two from "@/public/images/blog/two.png";
import three from "@/public/images/blog/three.png";
import four from "@/public/images/blog/four.png";
import five from "@/public/images/blog/five.png";
import six from "@/public/images/blog/six.png";
const BlogOne = () => {
  const [isHover, setIsHover] = useState(0);

  return (
    <section className="section blog">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row align-items-center gaper">
                <div className="col-12 col-lg-8">
                  <div className="section__header mb-0 text-center text-lg-start">
                    <h2 className="title mt-12 title-animation">
                      My Work experience
                    </h2>
                    <p> </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gaper fade-wrapper">
          <div className="col-12 col-md-6 col-xl-4 fade-top">
            <div
              className={
                "blog__single topy-tilt" +
                (isHover === 0 ? " blog__single-active" : " ")
              }
              onMouseEnter={() => setIsHover(0)}
            >
              <div className="blog__single-thumb">
                <Link href="https://www.momint.so/">
                  <Image src={four} alt="Image" priority />
                </Link>
              </div>
              <div className="blog__single-content">
                
                <h4>
                  <Link href="https://www.momint.so/">
                    Marketplace NFT
                    <br /> Renewable Energy On-Chain Sustainable Distributed
                    Energy Grids Owned By The People{" "}
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4 fade-top">
            <div
              className={
                "blog__single topy-tilt" +
                (isHover === 1 ? " blog__single-active" : " ")
              }
              onMouseEnter={() => setIsHover(0)}
            >
              <div className="blog__single-thumb">
                <Link href="https://acxd.kryptomind.net/">
                  <Image src={six} alt="Image" priority />
                </Link>
              </div>
              <div className="blog__single-content">
                <div className="blog__single-meta">
                  
                </div>
                <h4>
                  <Link href="https://acxd.kryptomind.net/">
                    What Makes ACX Unique?
                    <br />
                    1. Infinite Liquidity{" "}<br/>
                    2. Earn Yield at Scale <br />
                    3. Secure - Decentralized - Verifiable
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4 fade-top">
            <div
              className={
                "blog__single topy-tilt" +
                (isHover === 2 ? " blog__single-active" : " ")
              }
              onMouseEnter={() => setIsHover(0)}
            >
              <div className="blog__single-thumb">
                <Link href="https://mint.savagekingdom.io/">
                  <Image src={one} alt="Image" priority />
                </Link>
              </div>
              <div className="blog__single-content">
                <div className="blog__single-meta">
                  
                </div>
                <h4>
                  <Link href="https://mint.savagekingdom.io/">
                    NFT mint.
                    <br /> The Savage Kingdom are a collection of 3,333 unique
                    hand drawn beast-like NFTs known as savages.{" "}
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4 fade-top">
            <div
              className={
                "blog__single topy-tilt" +
                (isHover === 3 ? " blog__single-active" : " ")
              }
              onMouseEnter={() => setIsHover(1)}
            >
              <div className="blog__single-thumb">
                <Link href="https://senoa.io/">
                  <Image src={two} alt="Image" priority />
                </Link>
              </div>
              <div className="blog__single-content">
                <div className="blog__single-meta">
                  
                </div>
                <h4>
                  <Link href="https://senoa.io/">
                    INVISIBLE FRIENDS NFT Collections.
                    <br /> Crypto Wallet &#x2768;Rainbow, Coinbase Wallet,
                    MetaMask, WalletConnect&#x2769;
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4 fade-top">
            <div
              className={
                "blog__single topy-tilt" +
                (isHover === 4 ? " blog__single-active" : " ")
              }
              onMouseEnter={() => setIsHover(2)}
            >
              <div className="blog__single-thumb">
                <Link href="https://app.volta.club/">
                  <Image src={three} alt="Image" priority />
                </Link>
              </div>
              <div className="blog__single-content">
                <div className="blog__single-meta">
                  
                </div>
                <h4>
                  <Link href="https://app.volta.club/">
                    Volta Club. <br />
                    Decentralized applications&#x2768;DApps&#x2769;
                    <br />
                    Dapp frontend for contracts I built with React + Web3.js.
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4 fade-top">
            <div
              className={
                "blog__single topy-tilt" +
                (isHover === 5 ? " blog__single-active" : " ")
              }
              onMouseEnter={() => setIsHover(2)}
            >
              <div className="blog__single-thumb">
                <Link href="https://mintspace.io/?v=f9308c5d0596">
                  <Image src={five} alt="Image" priority />
                </Link>
              </div>
              <div className="blog__single-content">
                <div className="blog__single-meta">
                  
                </div>
                <h4>
                  <Link href="https://mintspace.io/?v=f9308c5d0596">
                    NFTs without fees <br />
                    Mint Space lets you sell your NFT artwork without gas fees
                    or any other fees.No costs are made to the seller
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogOne;
