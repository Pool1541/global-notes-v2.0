import { createContext, useEffect, useState } from "react";
import { realTimeChanges } from "../firebase/firebase";

export const DataContext = createContext();

export function DataContextProvider(props) {
  const [data, setData] = useState();

  useEffect(
    () =>
      realTimeChanges((snapShoot) => {
        const data = [];
        snapShoot.forEach((doc) => {
          const note = { ...doc.data() };
          note.docId = doc.id;
          data.push(note);
        });
        setData(data);
      }),
    []
  );

  return (
    <DataContext.Provider
      value={{
        data,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
