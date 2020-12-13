import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./Home.module.css";
import { getQuestions } from "../../actions/questions/getQuestions";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);
  return <div className={styles.container}>Home Component!!!</div>;
}

export default Home;
