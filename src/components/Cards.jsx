import React from "react";

import female from "../assets/female.jpeg";

function CardsEditor(props) {
  return (
    <div className="container grow flex flex-col justify-between gap-2 rounded-lg mt-14 p-2 lg:w-60 border bg-white">
      <div className="relative">
        <img
          src={female}
          className="absolute -top-12 left-5 rounded-full w-1/4 h-auto"
        />
        <div className="absolute -top-12 left-24">
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
    <div className="container grow flex flex-col w-1/2 h-auto">
      <div>
        <img
          src={props.image}
          alt={props.title}
          className="rounded-md max-w-full h-auto"
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

export { CardsEditor, CardsProduct, CardsArticles, CardsReview };
