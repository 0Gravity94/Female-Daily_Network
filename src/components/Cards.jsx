import React from "react";

function CardsEditor() {
  return <div>Cards</div>;
}

function CardsArticles(props) {
  return (
    <div className="container grow flex flex-col justify-between gap-2  rounded-lg m-2 p-2">
      <div className="flex justify-center">
        <img
          src={props.image}
          alt={props.title}
          className="rounded-md w-1/3 h-1/2"
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
    <div className="container grow flex flex-col justify-between gap-2 rounded-lg m-2 p-2 bg-white">
      <div className="flex justify-center">
        <img
          src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1571779199-becca-1571779144.jpg?crop=1xw:1xh;center,top&resize=480:*"
          alt={props.name}
          className="w-20 h-1/2"
        />
      </div>
      <div className="flex items-center">
        <p className="text-sm font-bold mr-1">{props.rating}4.1</p>
        <input name="rating-4" className="mask mask-star-2 bg-pink-600 w-3" />
        <input name="rating-4" className="mask mask-star-2 bg-pink-600 w-3" />
        <input name="rating-4" className="mask mask-star-2 bg-pink-600 w-3" />
        <input name="rating-4" className="mask mask-star-2 bg-pink-600 w-3" />
        <input name="rating-4" className="mask mask-star-2 bg-slate-200 w-3" />
        <p className="text-sm font-bold ml-1">(7)</p>
      </div>
      <div className="font-bold text-sm">
        {props.name}BECCA Liquid Foundation
      </div>
      <div className="text-xs text-slate-500">
        {props.description}Glow Silk Highkighter Drops
      </div>
    </div>
  );
}

export { CardsEditor, CardsProduct, CardsArticles };
