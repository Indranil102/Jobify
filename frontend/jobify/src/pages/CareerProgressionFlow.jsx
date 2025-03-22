import React from "react";
import ReactFlow, { Controls } from "reactflow";
import "reactflow/dist/style.css";

const CareerProgressionFlow = () => {
  // Define nodes (job titles)
  const nodes = [
    { id: "1", position: { x: 50, y: 50 }, data: { label: "Software Engineer" } },
    { id: "2", position: { x: 250, y: 50 }, data: { label: "Senior Software Engineer" } },
    { id: "3", position: { x: 450, y: 50 }, data: { label: "Tech Lead" } },
    { id: "4", position: { x: 650, y: 50 }, data: { label: "Engineering Manager" } },

    { id: "5", position: { x: 50, y: 200 }, data: { label: "Business Analyst" } },
    { id: "6", position: { x: 250, y: 200 }, data: { label: "Senior Business Analyst" } },
    { id: "7", position: { x: 450, y: 200 }, data: { label: "Product Manager" } },
    { id: "8", position: { x: 650, y: 200 }, data: { label: "Director of Product" } },

    { id: "9", position: { x: 50, y: 350 }, data: { label: "DevOps Engineer" } },
    { id: "10", position: { x: 250, y: 350 }, data: { label: "Senior DevOps Engineer" } },
    { id: "11", position: { x: 450, y: 350 }, data: { label: "DevOps Architect" } },
    { id: "12", position: { x: 650, y: 350 }, data: { label: "Cloud Solutions Architect" } },

    { id: "13", position: { x: 50, y: 500 }, data: { label: "Data Scientist" } },
    { id: "14", position: { x: 250, y: 500 }, data: { label: "Senior Data Scientist" } },
    { id: "15", position: { x: 450, y: 500 }, data: { label: "Data Science Manager" } },
    { id: "16", position: { x: 650, y: 500 }, data: { label: "Head of Data Science" } },

    { id: "17", position: { x: 50, y: 650 }, data: { label: "UX/UI Designer" } },
    { id: "18", position: { x: 250, y: 650 }, data: { label: "Senior UX/UI Designer" } },
    { id: "19", position: { x: 450, y: 650 }, data: { label: "UX Lead" } },
    { id: "20", position: { x: 650, y: 650 }, data: { label: "Head of Design" } },
  ];

  // Define edges (progression paths)
  const edges = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e2-3", source: "2", target: "3" },
    { id: "e3-4", source: "3", target: "4" },

    { id: "e5-6", source: "5", target: "6" },
    { id: "e6-7", source: "6", target: "7" },
    { id: "e7-8", source: "7", target: "8" },

    { id: "e9-10", source: "9", target: "10" },
    { id: "e10-11", source: "10", target: "11" },
    { id: "e11-12", source: "11", target: "12" },

    { id: "e13-14", source: "13", target: "14" },
    { id: "e14-15", source: "14", target: "15" },
    { id: "e15-16", source: "15", target: "16" },

    { id: "e17-18", source: "17", target: "18" },
    { id: "e18-19", source: "18", target: "19" },
    { id: "e19-20", source: "19", target: "20" },
  ];

  return (
    <div style={{ width: "100%", height: "800px" }}>
      <ReactFlow nodes={nodes} edges={edges}>
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default CareerProgressionFlow;