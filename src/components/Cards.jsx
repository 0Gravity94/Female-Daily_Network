import React from "react";

import female from "../assets/female.jpeg";
import { SlUserFemale } from "react-icons/sl";
import { TfiMenuAlt } from "react-icons/tfi";
import { BiMessageDetail, BiMinus } from "react-icons/bi";

function CardsEditor(props) {
  return (
    <div className="container grow justify-between gap-2 rounded-lg mt-14 p-2 lg:w-60 border bg-white">
      <div className="relative">
        <img
          src={female}
          className="absolute md:-top-11 md:left-5 rounded-full w-1/4 h-auto"
        />
        <div className="absolute md:-top-12 md:left-20">
          <h1 className="font-bold text-sm">{props.editor}</h1>
          <p className="text-xs text-slate-500">{props.role}</p>
        </div>
      </div>
      <div className="my-5">
        <div className="flex justify-center">
          <img
            src={props.image}
            alt={props.name}
            className="w-1/2 lg:w-full h-auto"
          />
        </div>
        <div className="flex items-center">
          <p className="text-sm font-bold mr-1">{props.rating}</p>
          <input name="rating-4" className="mask mask-star-2 bg-pink-600 w-3" />
          <input name="rating-4" className="mask mask-star-2 bg-pink-600 w-3" />
          <input name="rating-4" className="mask mask-star-2 bg-pink-600 w-3" />
          <input name="rating-4" className="mask mask-star-2 bg-pink-600 w-3" />
          <input
            name="rating-4"
            className="mask mask-star-2 bg-slate-200 w-3"
          />
          <p className="text-sm font-bold ml-1">(7)</p>
        </div>
        <div className="font-bold text-sm">{props.name}</div>
        <div className="text-xs text-slate-500">{props.description}</div>
      </div>
    </div>
  );
}

function CardsArticles(props) {
  return (
    <div className="container grow flex flex-col w-full h-auto mb-10">
      <div>
        <img
          src={props.image}
          alt={props.title}
          className="rounded-md max-w-auto h-auto"
        />
      </div>
      <div className="font-bold text-sm">{props.title}</div>
      <div className="flex gap-1 text-xs">
        <p className="font-semibold text-slate-600">{props.author}</p>
        <p className="text-slate-400">| {props.published_at} </p>
      </div>
    </div>
  );
}

function CardsProduct(props) {
  return (
    <div className="container grow flex flex-col justify-between gap-2 rounded-lg m-2 p-2 lg:w-60 bg-white">
      <div className="flex justify-center">
        <img
          src={props.image}
          alt={props.name}
          className="w-1/2 lg:w-full h-auto"
        />
      </div>
      <div className="flex items-center">
        <p className="text-sm font-bold mr-1">{props.rating}</p>
        <input name="rating-4" className="mask mask-star-2 bg-pink-600 w-3" />
        <input name="rating-4" className="mask mask-star-2 bg-pink-600 w-3" />
        <input name="rating-4" className="mask mask-star-2 bg-pink-600 w-3" />
        <input name="rating-4" className="mask mask-star-2 bg-pink-600 w-3" />
        <input name="rating-4" className="mask mask-star-2 bg-slate-200 w-3" />
        <p className="text-sm font-bold ml-1">(7)</p>
      </div>
      <div className="font-bold text-sm">{props.name}</div>
      <div className="text-xs text-slate-500">{props.description}</div>
    </div>
  );
}

function CardsReview(props) {
  return (
    <div className="container grow flex flex-col justify-between gap-2 rounded-lg border mt-5 mb-10 p-2 w-72 bg-white">
      <div className="flex gap-4">
        <img src={props.image} alt={props.name} className="w-10 h-auto" />
        <div className="grid place-content-center">
          <div className="font-bold text-sm">{props.name}</div>
          <div className="text-xs text-slate-500">{props.description}</div>
        </div>
      </div>
      <hr />
      <div className="flex items-center">
        <input name="rating-4" className="mask mask-star-2 bg-pink-600 w-3" />
        <input name="rating-4" className="mask mask-star-2 bg-pink-600 w-3" />
        <input name="rating-4" className="mask mask-star-2 bg-pink-600 w-3" />
        <input name="rating-4" className="mask mask-star-2 bg-pink-600 w-3" />
        <input name="rating-4" className="mask mask-star-2 bg-slate-200 w-3" />
      </div>
      <p>{props.comment}</p>
      <div className="relative">
        <img
          src={female}
          className="absolute -bottom-7 left-28 rounded-full w-10 h-auto"
        />
        <div className="absolute -bottom-8 w-full">
          <h1 className="absolute font-bold text-sm left-28">{props.user}</h1>
          <p className="absolute text-xs text-slate-500 left-12 -bottom-9">
            {props.profile}
          </p>
        </div>
      </div>
    </div>
  );
}

function CardsGroup() {
  return (
    <div className="grid justify-items-center rounded-lg border shadow-lg mt-5 mb-10 p-4 w-64 bg-white">
      <img src={female} className="rounded-full w-2/3 h-auto" />
      <h1 className="text-lg font-bold my-2">Embrace the Curl</h1>
      <div className="flex gap-6 mt-4">
        <div className="flex">
          <SlUserFemale />
          <BiMinus />
        </div>
        <div className="flex">
          <TfiMenuAlt />
          <BiMinus />
        </div>
        <div className="flex">
          <BiMessageDetail />
          <BiMinus />
        </div>
      </div>
      <p className="text-xs text-center mt-2 mb-5">
        May our curls pop and never stop!
      </p>
    </div>
  );
}

export { CardsEditor, CardsProduct, CardsArticles, CardsReview, CardsGroup };
