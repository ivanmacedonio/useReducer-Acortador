import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useReducerApp from "../store/Store";

export const Redirect = () => {
  const params = useParams();
  const [state, dispatch] = useReducerApp();

  useEffect(() => {
    const data = localStorage.getItem("urls");

    if (data) {
      const items = JSON.parse(data);
      const id = params.id; ///obtener parametros de la url
      const item = items.find((i) => i.shortUrL == id);
      dispatch({ type: "LOAD_VIEW", data: id });
      if (item) {
        window.location.href = item.url;
      } else {
        console.log("error");
      }
    }
  }, []);
  return <div>redirect</div>;
};
