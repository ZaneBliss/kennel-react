import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
//only include these once they are built - previous practice exercise
import AnimalList from "../modules/animal/AnimalList"
import EmployeeList from "../modules/employee/EmployeeList"
import OwnerList from "../modules/owner/OwnerList"
import LocationList from "../modules/locations/LocationList";

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={(props) => {
          return <Home />;
        }}
      />
      <Route
        path="/animals"
        render={(props) => {
        return <AnimalList />;
        }}
      />
      <Route
        path="/locations"
        render={(props) => {
          return <LocationList />;
        }}
      />
      <Route
        path="/owners"
        render={(props) => {
          return <OwnerList />;
        }}
      />
      <Route
        path="/employees"
        render={(props) => {
          return <EmployeeList />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
