import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
//only include these once they are built - previous practice exercise
import AnimalList from "../modules/animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail"
import EmployeeList from "../modules/employee/EmployeeList";
import OwnerList from "../modules/owner/OwnerList";
import LocationList from "../modules/locations/LocationList";
import LocationDetail from "./location/LocationDetail"

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
        exact
        path="/animals"
        render={(props) => {
          return <AnimalList />;
        }}
      />
      <Route
        path="/animals/:animalId(\d+)"
        render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return (
            <AnimalDetail animalId={parseInt(props.match.params.animalId)} />
          );
        }}
      />
      <Route
        exact path="/locations"
        render={(props) => {
          return <LocationList />;
        }}
      />
      <Route
        path="/locations/:locationId(\d+)"
        render={(props) => {
          return (
            <LocationDetail locationId={parseInt(props.match.params.locationId)} />
          );
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
