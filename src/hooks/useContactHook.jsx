import { useSelector } from "react-redux";
import httpClient from "../http/httpClient";
import React, { useEffect, useState } from "react";

const useContactHook = () => {
  const [contacts, setContacts] = useState([]);
  const [mode, setMode] = useState("add");



  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    httpClient
      .get(`/get-contact/${user._id}`)
      .then((response) => {
        setContacts(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return {
    contacts,
    setMode,
    mode,
  };
};

export default useContactHook;
