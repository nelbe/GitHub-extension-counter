import React, { useEffect, useState } from 'react';
import { ResultContent } from './ExtensionCounter.style';

const Result = ({ paths }) => {
  const counts = {};

  useEffect(() => {
    countPaths();
  }, []);

  const countPaths = () => {
    paths?.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    console.log("!! counts", counts)
  }

  return (
    <div style={ResultContent}> RESULT</div>
  );
}

export default Result;