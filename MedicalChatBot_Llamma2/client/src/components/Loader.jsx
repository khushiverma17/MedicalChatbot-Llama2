import React from 'react';
import "../modules/Loader.css"

const Loader = (loading) => {
  return (<>

    <div className="loader-container" loading={loading}>
      Loading...
      <div className="dot dot1"></div>
      <div className="dot dot2"></div>
      <div className="dot dot3"></div>
      <div className="dot dot4"></div>
    
    </div>
   

      </>
  );
};

export default Loader;
