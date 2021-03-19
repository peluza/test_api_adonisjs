import React, { useState, useEffect, Fragment } from "react";
import ProjectCreate from "../components/ProjectCreate";
import ProjectConsult from "../components/ProjectConsult";
import ProjectUpdate from "../components/ProjectUpdate";

function Projects() {
  return (
    <Fragment>
      <div>
        <h1 className="text-center"> WELCOME TO YOUR PROJECTS </h1>
      </div>
      <div>
        <h2 className="text-center"> Create at project</h2>
        <ProjectCreate />
      </div>
      <div>
        <h2 className="text-center"> Update project data</h2>
        <ProjectUpdate />
      </div>
      <div>
        <ProjectConsult />
      </div>
    </Fragment>
  );
}

export default Projects;
