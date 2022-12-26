import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import "./index.css";
import Layout from "../src/components/Layout";
import {
  TopFrame,
  Billboard,
  InternalCampaign,
  BottomFrame,
} from "./components/AdsFrames";
import {
  CardsEditor,
  CardsProduct,
  CardsArticles,
  CardsReview,
} from "../src/components/Cards";
import applylip from "./assets/applylip.png";
import innisfree from "./assets/innisfree.png";
import maybelline from "./assets/maybelline.png";
import nivea from "./assets/nivea.png";
import SKII from "./assets/SKII.png";
import thebodyshop from "./assets/thebodyshop.png";
import theordinary from "./assets/theordinary.png";
import Video1 from "./assets/Video1.jpg";
import Video2 from "./assets/Video2.jpg";
import Video3 from "./assets/Video3.jpg";

function App() {
  const dispatch = useDispatch();
  const [datas, setDatas] = useState([]);

  const objValues = Object.keys(datas).map((k) => datas[k]);
  console.log(objValues);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(`https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp`)
      .then((res) => {
        const results = res.data;
        setDatas(results);
        console.log(results);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }

  return (
    <>
      <Layout>
        {/* Navigation */}
        <div className="flex justify-center gap-4 p-2 text-xs md:text-base font-bold border border-r-neutral-content border-l-neutral-content border-b-stone-300">
          <a className="link link-hover">SKINCARE</a>
          <a className="link link-hover">MAKE UP</a>
          <a className="link link-hover">BODY</a>
          <a className="link link-hover">HAIR</a>
          <a className="link link-hover">FRAGRANCE</a>
          <a className="link link-hover">NAILS</a>
          <a className="link link-hover">TOOLS</a>
          <a className="link link-hover">BRANDS</a>
        </div>

        {/* Ads */}
        <TopFrame />
        <Billboard />

        {/* Editor's Choice */}
        <div className="grid">
          <div id="editor-choice" className="justify-self-center p-2">
            <h1 className="text-xl font-bold">Editor's Choice</h1>
            <p className="text-base text-slate-400">Curated with love</p>
            {objValues[0]?.map((data) => (
              <CardsEditor
                image={data.product.image}
                name={data.product.name}
                rating={data.product.rating}
                description={data.product.description}
                editor={data.editor}
                role={data.role}
              />
            ))}
          </div>
        </div>

        {/* Highlight */}
        <div className="flex w-full h-fit bg-pink-200">
          <img
            src={applylip}
            alt="woman holding liptint"
            className="w-1/3 h-1/3 lg:w-1/4 lg:h-1/4 pt-2"
          />
          <div className="place-self-center w-40 lg:w-52 py-3 mx-2">
            <h1 className="text-sm lg:text-base text-left font-bold ">
              Looking for products that are just simply perfect for you?
            </h1>
            <p className="text-xs lg:text-sm font-semibold my-2">
              Here are some products that we believe match your skin, hair, and
              body! Have we mentioned that they solve your concerns too?
            </p>
            <div id="myMatches-button" className="grid justify-items-end">
              <button className="w-24 lg:w-32 h-5 lg:h-10 text-xs lg:text-base text-white bg-pink-700 rounded-sm">
                See My Matches
              </button>
            </div>
          </div>
          {objValues[0]?.slice(0, 3).map((data) => (
            <CardsProduct
              image={data.product.image}
              name={data.product.name}
              rating={data.product.rating}
              description={data.product.description}
            />
          ))}
        </div>

        {/* Ads */}
        <InternalCampaign />

        {/* Articles */}
        <div className="grid">
          <div id="editor-choice" className="justify-self-center p-2">
            <h1 className="text-xl font-bold">Latest Articles</h1>
            <div className="flex justify-between">
              <p className="text-base text-slate-400">
                So you can make better purchase desicion
              </p>
              <a className="link link-hover text-pink-600">See more ＞</a>
            </div>
            {objValues[1]?.map((data) => (
              <CardsArticles
                image={data.image}
                title={data.title}
                author={data.author}
                published_at={data.published_at}
              />
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="grid justify-items-stretch">
          <div id="editor-choice" className="justify-self-center p-2">
            <h1 className="text-xl font-bold">Latest Reviews</h1>
            <div className="flex justify-between">
              <p className="text-base text-slate-400">
                So you can make better purchase desicion
              </p>
              <a className="link link-hover text-pink-600">See more ＞</a>
            </div>
            {objValues[2]?.slice(0, 2).map((data) => (
              <CardsReview
                image={data.product.image}
                name={data.product.name}
                rating={data.product.rating}
                description={data.product.desc}
                comment={data.comment}
                user={data.user}
                profile={data.profile}
              />
            ))}
            {/* Make Carousel here */}
          </div>
        </div>

        {/* Beauty TALK */}
        <div className="grid justify-items-stretch">
          <div id="editor-choice" className="justify-self-center p-2">
            <h1 className="text-xl font-bold">Popular Groups</h1>
            <div className="flex justify-between">
              <p className="text-base text-slate-400">
                Where the beauty TALK are
              </p>
              <a className="link link-hover text-pink-600">See more ＞</a>
            </div>
            <CardsArticles />
          </div>
        </div>

        {/* Videos */}
        <div className="grid justify-items-stretch">
          <div id="editor-choice" className="justify-self-center p-2">
            <h1 className="text-xl font-bold">Latest Videos</h1>
            <div className="flex justify-between">
              <p className="text-base text-slate-400">
                Watch and learn, ladies
              </p>
              <a className="link link-hover text-pink-600">See more ＞</a>
            </div>
            <div className="flex my-5">
              <img src={Video1} alt="video1" className="w-1/2 h-auto" />
              <div>
                <img src={Video2} alt="video2" className="w-1/2 h-auto" />
                <img src={Video3} alt="video3" className="w-1/2 h-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* Trending Products */}
        <div className="grid justify-items-stretch">
          <div id="editor-choice" className="justify-self-center p-2">
            <h1 className="text-xl font-bold">Trending This Week</h1>
            <div className="flex justify-between">
              <p className="text-base text-slate-400">
                See our weekly most reviewd products
              </p>
              {/* make carousel here */}
            </div>
            {objValues[0]?.slice(0, 3).map((data) => (
              <CardsProduct
                image={data.product.image}
                name={data.product.name}
                rating={data.product.rating}
                description={data.product.description}
              />
            ))}
          </div>
        </div>

        {/* Brands */}
        <div className="grid justify-items-stretch">
          <div id="editor-choice" className="justify-self-center p-2">
            <h1 className="text-xl font-bold">Top Brands</h1>
            <div className="flex justify-between">
              <p className="text-base text-slate-400">We all know and love</p>
              <a className="link link-hover text-pink-600">See more ＞</a>
            </div>
            <div id="editor-choice" className="justify-self-center p-2 my-10">
              <div className="flex max-w-full place-content-center gap-10">
                <img src={nivea} alt="nivea" className="w-20 h-20" />
                <img
                  src={theordinary}
                  alt="theordinary"
                  className="w-20 h-20"
                />
                <img
                  src={thebodyshop}
                  alt="thebodyshop"
                  className="w-24 h-14"
                />
                <img src={SKII} alt="SKII" className="w-24 h-14" />
                <img src={maybelline} alt="maybelline" className="w-32 h-14" />
                <img src={innisfree} alt="innisfree" className="w-20 h-20" />
              </div>
              <h1 className="text-xl font-bold">
                Female Daily - Find everything you want to know about beauty on
                Female Daily
              </h1>
              <div className="flex justify-between">
                <p className="text-base">
                  Products Reviews, Tips & Tricks, Expert and Consumer Opinions,
                  Beauty Tutorials, Discussions, Beauty Workshops, anything!{" "}
                  <br /> We are here to be your friendly solution to all thing
                  beauty, inside and out!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Comment */}
        <div className="grid justify-items-stretch mt-10"></div>
      </Layout>

      <div>
        <BottomFrame />
      </div>
    </>
  );
}

export default App;
