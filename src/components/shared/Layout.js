import React from "react";
import { useLayoutStyles } from "../../styles";
import SEO from "../shared/Seo";
import Navbar from "../shared/Navbar";
import Footer from "./Footer";

function Layout({
  image,
  children,
  title,
  marginTop = 40,
  minimalNavbar = false,
  movieLarge = false,
  hideFooter = false,
}) {
  const classes = useLayoutStyles();

  return (
    <section className={classes.section}>
      <SEO title={title} />
      <Navbar minimalNavbar={minimalNavbar} />
      <main className={classes.main} style={{ marginTop }}>
        {movieLarge && (
          <div
            style={{
              background: `linear-gradient(to right bottom, #AA2CA8BF, #AA2CA8AF), url(https://image.tmdb.org/t/p/original/${image}) no-repeat center center fixed`,
            }}
            className={classes.image}
          />
        )}
        <section className={classes.childrenWrapper}>
          <div className={classes.children}>{children}</div>
        </section>
        {!hideFooter && <Footer />}
      </main>
    </section>
  );
}

export default Layout;
