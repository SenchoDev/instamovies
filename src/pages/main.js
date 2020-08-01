import React from "react";
import { useMainPageStyles } from "../styles";
import Layout from "../components/shared/Layout";

import MainHeader from "../components/Main/MainHeader";
import MainAbout from "../components/Main/MainAbout";
import SliderA from "../components/shared/Slider";
import Heading from "../components/shared/Heading";
import BigCard from "../components/Cards/BigCard";
import SecondSkeleton from "../components/Cards/MainSkeleton";
import { useFetchMovies, fetchTrailer } from "../utils/useFetchMovies";
import { Dialog, DialogContent } from "@material-ui/core";
import ReactPlayer from "react-player";

function MainPage() {
  
  const classes = useMainPageStyles();
  const { data, loading, error } = useFetchMovies();
  const [trailers, setTrailers] = React.useState([]);
  const [trailerVideo, setTrailerVideo] = React.useState("");
  const [showDialog, setDialog] = React.useState(false);

  function handleCloseDialog() {
    setDialog(false);
  }

  React.useEffect(() => {
    fetchTrailer(setTrailers);
  }, []);

  if (error) return <div>error</div>;

  return (
    <Layout>
      <Dialog
        open={showDialog}
        onClose={handleCloseDialog}
        className={classes.trailerVideo}
        fullWidth={true}
        maxWidth={"md"}
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
            border: "transparent",
          },
        }}
      >
        <DialogContent>
          <div className={classes.trailerVideo}>
            <ReactPlayer
              url={trailerVideo}
              width={760}
              height={500}
              style={{ marginLeft: "50px" }}
            />
          </div>
        </DialogContent>
      </Dialog>
      {/* Header */}
      <MainHeader />
      {/* Slider 1 */}
      <div className={classes.slider}>
        <Heading textHeader="Whats Popular" textButton="Movies" />
        <SliderA data={data.popularMovies} loading={loading} />
      </div>
      {/* Trailer */}
      <div className={classes.trailer}>
        <Heading textHeader="Whats Popular" textButton="Trailers" />
        <div className={classes.trailerContainer}>
          {trailers &&
            trailers.map((card, id) => (
              <React.Suspense key={id} fallback={<SecondSkeleton />}>
                <BigCard
                  card={card}
                  setDialog={setDialog}
                  setTrailerVideo={setTrailerVideo}
                />
              </React.Suspense>
            ))}
        </div>
      </div>
      {/* Slider 2*/}
      <div className={classes.slider}>
        <Heading textHeader="Trending" textButton="TV Shows" />
        <SliderA data={data.popularTvShows} loading={loading} />
      </div>
      {/* About */}
      <MainAbout />
      {/*  Slider  3  */}
      <div className={classes.slider}>
        <Heading textHeader="Upcoming" textButton="TV Shows & Movies" />
        <SliderA data={data.upcoming} loading={loading} />
      </div>
    </Layout>
  );
}

export default MainPage;
