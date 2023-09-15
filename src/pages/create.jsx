import React from "react";
import { MainContainer } from "../components/mainContainer";
import { CreateForm } from "../components/createForm";
import useReducerApp from "../store/Store";
import { useEffect } from "react";

export const Create = () => {
  const [state, dispatch] = useReducerApp();

  useEffect(() => {
    dispatch({ type: "LOAD" }); ///llama a load cada vez q se recarga la pagina
  }, []);

  return (
    <MainContainer>
      <CreateForm dispatch={dispatch} />
      <div>
        {state.items.map((item) => (
          <div key={item.shortUrl}>
            <div>{item.shortUrl}</div>
            <div>{item.url}</div>
            <div>{item.views}</div>
             
          </div>
        ))}
      </div>
    </MainContainer>
  );
};
