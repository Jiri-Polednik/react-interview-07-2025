import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Container from "@/components/Container/Container";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles["layout__content"]}>
        <Container>{children}</Container>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
