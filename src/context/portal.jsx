import React, { createContext, useEffect, useState } from 'react';

export const PortalContext = createContext();

// solve: https://zh-hant.reactjs.org/docs/composition-vs-inheritance.html
function Portal({ children }) {
  const [initvaluex, setUserData] = useState('');

  // console.log(initvaluex)
  useEffect(() => {
    setInterval(() => {
      let date = new Date();

      let initvaluex = date.getSeconds();
      setUserData(initvaluex);
    }, 1000);
  }, []);

  return (
    <PortalContext.Provider
      value={{
        initvaluex
      }}
    >
      {children}
    </PortalContext.Provider>
  );
}

export default Portal;