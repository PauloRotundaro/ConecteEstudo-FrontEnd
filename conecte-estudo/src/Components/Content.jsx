import React from "react";
import { Switch, Route } from "react-router-dom";
import ClassMaterials from "./ClassMaterials";
import ClassWorks from "./ClassWorks";
import Home from "./Home";
import LoginPage from "./LoginPage";
import RegisteredClasses from "./RegisteredClasses";
import TeachingPlan from "./TeachingPlan";
import WorkDetails from "./WorkDetails";
import Frequency from "./Frequency";
import TeacherFrequency from "./TeacherFrequency";
import ClassDetails from "./ClassDetails";

const Content = () => (
    <main className="Content">
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/" exact component={Home} />
        <Route path="/class-materials/:classId" exact component={ClassMaterials} />
        <Route path="/registered-classes" exact component={RegisteredClasses} />
        <Route path="/classworks/:classId" exact component={ClassWorks} />
        <Route path="/work-details/:workId" exact component={WorkDetails} />
        <Route path="/teaching-plan/:classId" exact component={TeachingPlan} />
        <Route path="/frequency/:classId" exact component={Frequency} />
        <Route path="/class-frequency/:classId" exact component={TeacherFrequency} />
        <Route path="/class-details/:classId" exact component={ClassDetails} />
      </Switch>
    </main>
  );
  
  export default Content;