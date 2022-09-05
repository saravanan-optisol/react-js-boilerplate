import React, { useState } from "react";
import Sample from "../components/sample/Sample";

const SampleContainer = () => {
  const [sampleData, setSampleData] = useState([]);
  return <Sample Samplelist={sampleData} />;
};

export { SampleContainer };
