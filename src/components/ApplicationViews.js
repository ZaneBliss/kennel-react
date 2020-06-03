import { Route, Redirect, Switch } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
//only include these once they are built - previous practice exercise
import AnimalList from "../modules/animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from "./animal/AnimalForm";
import AnimalEditForm from "./animal/AnimalEditForm";
import EmployeeList from "../modules/employee/EmployeeList";
import EmployeeForm from "./employee/EmployeeForm";
import EmployeeEditForm from "./employee/EmployeeEditForm"
import EmployeeWithAnimals from './employee/EmployeeWithAnimals'
import OwnerList from "../modules/owner/OwnerList";
import OwnerForm from "../components/owner/OwnerForm";
import OwnerEditForm from '../components/owner/OwnerEditForm'
import LocationList from "../modules/locations/LocationList";
import LocationDetail from "./location/LocationDetail";
import LocationForm from "./location/LocationForm";
import LocationEditForm from "./location/LocationEditForm"
import Login from "./auth/Login";
import NotFound from "./NotFound";

const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser
  const checked = props.checked
  const setChecked = props.setChecked

  return (
    <React.Fragment>
      <Switch>
        <Route path="/login" render={props => {
          return <Login setUser={setUser} {...props} checked={checked} setChecked={setChecked} />
        }} />
        <Route
          exact
          path="/"
          render={(props) => {
            return <Home {...props} />;
          }}
        />
        <Route
          exact
          path="/animals"
          render={(props) => {
            if (hasUser) {
              return <AnimalList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/animals/:animalId(\d+)"
          render={(props) => {
            // Pass the animalId to the AnimalDetailComponent
            return (
              <AnimalDetail
                animalId={parseInt(props.match.params.animalId)}
                {...props}
              />
            );
          }}
        />
        <Route
          path="/animals/new"
          render={(props) => {
            return <AnimalForm {...props} />;
          }}
        />
        <Route
          path="/animals/:animalId(\d+)/edit"
          render={(props) => {
            if (hasUser) {
              return <AnimalEditForm {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/locations"
          render={(props) => {
            return <LocationList {...props} />;
          }}
        />
        <Route
          exact path="/locations/:locationId(\d+)"
          render={(props) => {
            return (
              <LocationDetail
                locationId={parseInt(props.match.params.locationId)}
                {...props}
              />
            );
          }}
        />
        <Route
          path="/locations/new"
          render={(props) => {
            return <LocationForm {...props} />;
          }}
        />
        <Route
          path="/locations/:locationId(\d+)/edit"
          render={(props) => {
            if (hasUser) {
              return <LocationEditForm {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/owners"
          render={(props) => {
            if (hasUser) {
              return <OwnerList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          path="/owners/new"
          render={(props) => {
            return <OwnerForm {...props} />;
          }}
        />
        <Route
          path="/owners/:ownerId(\d+)/edit"
          render={(props) => {
            if (hasUser) {
              return <OwnerEditForm {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/employees"
          render={(props) => {
            if (hasUser) {
              return <EmployeeList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          path="/employees/new"
          render={(props) => {
            return <EmployeeForm {...props} />;
          }}
        />
        <Route path="/employees/:employeeId(\d+)/edit"
          render={(props) => {
            if (hasUser) {
              return <EmployeeEditForm {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route path="/employees/:employeeId(\d+)" render={(props) => {
          return <EmployeeWithAnimals {...props} />
        }} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
};

export default ApplicationViews;
