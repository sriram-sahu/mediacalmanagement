import axios from "axios";
import React, { useEffect } from "react";

export const allDrugs = () => {
  axios
    .get("http://192.168.0.140:8080/api/getAllDrug")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log();
    })
    .catch((error) => console.error("Error fetching drugs:", error));
};
