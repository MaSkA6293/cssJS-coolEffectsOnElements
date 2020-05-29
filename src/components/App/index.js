import React, { useState, useEffect } from "react";

import "./index.scss";

import ContentPanel from "../ContentPanel";
import LeftPanel from "../LeftPanel";

import { Route, useHistory } from "react-router-dom";
import WaterButton from "../WaterButton";
import CSSGrid from "../CSSGrid";
import RadioButton from "../RadioButton";
import FotoMountain from "../FotoMountain";
import SearchButton from "../SearchButton";
import AnimationButton from "../AnimationButton";
import RotateCard from "../RotateCard";
import NeonButton from "../NeonButton";
import SocialButtons from "../SocialButtons";
import OriginalCards from "../OriginalCards";
import baseMySkills from "./base";
import ImageHowerEffect from "../ImageHowerEffect";
const App = () => {
  const [activTab, setactivTab] = useState(0);
  let history = useHistory();

  useEffect(() => {
    const id = history.location.pathname.split("list/")[1];
    if (id) {
      let elem = baseMySkills.find((item) => item.id === Number(id));
      if (!elem) {
        history.push("/");
        setactivTab(0);
      } else {
        setactivTab(elem.id);
      }
    }
  }, [history.location.pathname]);

  return (
    <div className="App">
      <Route exact path="/">
        <div className="App__left-panel">
          <LeftPanel list={baseMySkills} />
        </div>
        <div className="App__content-panel">
          <ContentPanel
            list={baseMySkills[activTab]}
            component={<WaterButton />}
          />
        </div>
      </Route>

      <Route path="/list/0">
        <div className="App__left-panel">
          <LeftPanel list={baseMySkills} />
        </div>
        <div className="App__content-panel">
          <ContentPanel
            list={baseMySkills[activTab]}
            component={<WaterButton />}
          />
        </div>
      </Route>

      <Route path="/list/1">
        <div className="App__left-panel">
          <LeftPanel list={baseMySkills} />
        </div>
        <div className="App__content-panel">
          <ContentPanel list={baseMySkills[activTab]} component={<CSSGrid />} />
        </div>
      </Route>

      <Route path="/list/2">
        <div className="App__left-panel">
          <LeftPanel list={baseMySkills} />
        </div>
        <div className="App__content-panel">
          <ContentPanel
            list={baseMySkills[activTab]}
            component={<RadioButton />}
          />
        </div>
      </Route>
      <Route path="/list/3">
        <div className="App__left-panel">
          <LeftPanel list={baseMySkills} />
        </div>
        <div className="App__content-panel">
          <ContentPanel
            list={baseMySkills[activTab]}
            component={<FotoMountain />}
          />
        </div>
      </Route>
      <Route path="/list/4">
        <div className="App__left-panel">
          <LeftPanel list={baseMySkills} />
        </div>
        <div className="App__content-panel">
          <ContentPanel
            list={baseMySkills[activTab]}
            component={<SearchButton />}
          />
        </div>
      </Route>
      <Route path="/list/5">
        <div className="App__left-panel">
          <LeftPanel list={baseMySkills} />
        </div>
        <div className="App__content-panel">
          <ContentPanel
            list={baseMySkills[activTab]}
            component={<AnimationButton />}
          />
        </div>
      </Route>
      <Route path="/list/6">
        <div className="App__left-panel">
          <LeftPanel list={baseMySkills} />
        </div>
        <div className="App__content-panel">
          <ContentPanel
            list={baseMySkills[activTab]}
            component={<RotateCard />}
          />
        </div>
      </Route>
      <Route path="/list/7">
        <div className="App__left-panel">
          <LeftPanel list={baseMySkills} />
        </div>
        <div className="App__content-panel">
          <ContentPanel
            list={baseMySkills[activTab]}
            component={<NeonButton />}
          />
        </div>
      </Route>
      <Route path="/list/8">
        <div className="App__left-panel">
          <LeftPanel list={baseMySkills} />
        </div>
        <div className="App__content-panel">
          <ContentPanel
            list={baseMySkills[activTab]}
            component={<SocialButtons />}
          />
        </div>
      </Route>
      <Route path="/list/9">
        <div className="App__left-panel">
          <LeftPanel list={baseMySkills} />
        </div>
        <div className="App__content-panel">
          <ContentPanel
            list={baseMySkills[activTab]}
            component={<OriginalCards />}
          />
        </div>
      </Route>
      <Route path="/list/10">
        <div className="App__left-panel">
          <LeftPanel list={baseMySkills} />
        </div>
        <div className="App__content-panel">
          <ContentPanel
            list={baseMySkills[activTab]}
            component={<ImageHowerEffect />}
          />
        </div>
      </Route>
    </div>
  );
};
export default App;
