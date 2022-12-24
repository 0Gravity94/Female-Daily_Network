import React from "react";

function CardsEditor() {
  return <div>Cards</div>;
}

function CardsArticles(props) {
  return (
    <div className="container grow flex flex-col justify-between gap-2  rounded-lg m-2 p-2">
      <div className="flex justify-center">
        <img
          src="https://www.houstonmethodist.org/-/media/images/contenthub/article-images/wellness/2021/hub_expiredmakeup_social.jpg?mw=1382&hash=1B543B25C107BE17B37B8D8B5C4B9B6D"
          alt={props.name}
          className="rounded-md w-1/3 h-1/2"
        />
      </div>
      <div className="font-bold text-sm">
        {props.name}9 Best Face Oils for Sensitive Skin
      </div>
      <div className="flex gap-1 text-xs">
        <p className="font-semibold text-slate-600">
          {props.description}Username{" "}
        </p>
        <p className="text-slate-400">{props.description}| 2 Hours Ago</p>
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
