import { useEffect } from "react";
import { getRefreshToken } from "./API";

const RefreshToken = async () => {
  try {
    const response = await getRefreshToken();
  } catch (e) {
    console.error(e);
  }
};

useEffect(() => {
  RefreshToken();
}, []);
