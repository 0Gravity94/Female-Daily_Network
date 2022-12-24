import React from "react";

import "../index.css";

function TopFrame() {
  return (
    <div className="grid justify-items-stretch">
      <div id="top-frame" className="justify-self-center">
        Top Frame 970x50
      </div>
    </div>
  );
}

function Billboard() {
  return (
    <div className="grid justify-items-stretch">
      <div id="billboard" className="justify-self-center">
        Billboard 970x250
      </div>
    </div>
  );
}

function InternalCampaign() {
  return (
    <div className="grid justify-items-stretch">
      <div id="internalCampaign" className="justify-self-center text-center">
        Horizontal 970x250 <br /> (Internal campaign only)
      </div>
    </div>
  );
}

function BottomFrame() {
  return (
    <div className="grid justify-items-stretch">
      <div id="bottom-frame" className="justify-self-center text-center">
        Bottom Frame 970x50, 468x60, 320x50
      </div>
    </div>
  );
}

export { TopFrame, Billboard, InternalCampaign, BottomFrame };
