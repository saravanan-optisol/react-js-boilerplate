import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { Spin } from "antd";
import Sidebar from "../../views/components/common/layout/Sidebar";
import RouteEnum from "../../constants/RouteEnum";
import { SampleContainer } from "../containers/index";

const MainLayout = (props) => {
  
  
  return (
    <Spin spinning={false} tip="Loading..." className="spin-loading">
      <Sidebar  />
      <div
        className="Datacontent">
        <Suspense
          fallback={<Spin spinning tip="Loading..." className="spin-loading" />}
        >
          <Switch>
            <Route exact path={RouteEnum.Home} component={SampleContainer} />
            
          </Switch>
        </Suspense>
      </div>
    </Spin>
  );
};

MainLayout.defaultProps = {
  children: "",
};

MainLayout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default MainLayout;
