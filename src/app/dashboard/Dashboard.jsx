import "./dashboard.css";
import React from "react";
import ActivityCard from "../activitycard/ActivityCard";

const Dashboard = () => {
  return (
    <div className="dashboard__activities">
      <ActivityCard activity="typing" />
      <ActivityCard activity="math" />
      <ActivityCard activity="alphabet" />
    </div>
  );
};

export default Dashboard;
