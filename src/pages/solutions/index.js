import React, { Component } from "react";
import { Route } from "react-router-dom";
import IoT from "./IoT";
import Telemetry from "./Telemetry";
import LoadTracking from "./LoadTracking";
import HomeAutomation from "./HomeAutomation";
import OurServices from "./OurServices";

const Solutions = ({ match }) => {
  return (
    <div>
      <Route path={`${match.url}/internet-das-coisas`} component={IoT} />
      <Route path={`${match.url}/telemetria`} component={Telemetry} />
      <Route
        path={`${match.url}/rastreamento-de-carga`}
        component={LoadTracking}
      />
      <Route
        path={`${match.url}/automacao-residencial`}
        component={HomeAutomation}
      />
      <Route path={`${match.url}/nossos-servicos`} component={OurServices} />
    </div>
  );
};

export { IoT, Telemetry, LoadTracking, HomeAutomation, OurServices };
export default Solutions;
