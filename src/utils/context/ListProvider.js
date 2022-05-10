import React, { createContext, useState } from "react";

const ListContext = createContext([{}, () => {}]);

const ListProvider = (props) => {
  const [state, setState] = useState({ hola: "mierdecita" });

  return (
    <ListContext.Provider value={[state, setState]}>
      {props.children}
    </ListContext.Provider>
  );
};

export { ListContext, ListProvider };
