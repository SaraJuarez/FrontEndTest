import React, { createContext, useState } from "react";

// Create two context:
// UserContext: to query the context state
// UserDispatchContext: to mutate the context state
const ListContext = createContext(undefined);
const ListDispatchContext = createContext(undefined);

// A "provider" is used to encapsulate only the
// components that needs the state in this context
function ListProvider({ children }) {
  const [list, setList] = useState();

  return (
    <ListContext.Provider value={list}>
      <ListDispatchContext.Provider value={setList}>
        {children}
      </ListDispatchContext.Provider>
    </ListContext.Provider>
  );
}

export { ListProvider, ListContext, ListDispatchContext };
