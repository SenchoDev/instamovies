import { makeStyles, withStyles, Tooltip } from "@material-ui/core";
import IconSheet from "./images/icon-sheet.png";
import IconSheet2 from "./images/icon-sheet-2.png";
import MainBg from "./images/background1.png";
import AboutBg from "./images/background2.png";

/* Feed page: /pages/feed.js */
export const useMainPageStyles = makeStyles((theme) => ({
  header: {
    position: "relative",
    width: "1100px",
    margin: "0 auto",
  },
  trailerVideo: {
    background: "transparent",
  },
  imageHeader: {
    width: "100%",
    backgroundImage: `url(${MainBg})`,
    minHeight: 280,
    objectFit: "cover",
    userSelect: "none",
  },
  aboutHeader: {
    width: "100%",
    backgroundImage: `url(${AboutBg})`,
    minHeight: 280,
    objectFit: "cover",
    userSelect: "none",
  },
  headerWrapper: {
    position: "absolute",
    top: 50,
    left: 40,
    [theme.breakpoints.down("xs")]: {
      left: 20,
    },
  },
  heading: {
    color: "#ffffff",
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
    },
  },
  search: {
    paddingTop: "23px",
    display: "flex",
    alignItems: "center",
  },
  field: {
    border: "none",
    background: "none",
    fontFamily: " inherit",
    color: "inherit",
    fontSize: "15px",
    width: "380px",
    height: "42px",
    boxShadow: "0 3px 6px rgba(101, 90, 86, 0.08)",
    paddingLeft: "20px",
    opacity: " 0.9",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
      fontSize: "13px",
    },

    "&:focus,&:active": {
      outline: "none",
      opacity: 1,
    },
    "&::placeholder": {
      color: "#000000",
      opacity: "0.32",
      fontSize: "15px",
      [theme.breakpoints.down("xs")]: {
        width: "300px",
        fontSize: "13px",
      },
    },
  },
  btnSearch: {
    background: "#AA2CA8",
    borderRadius: "25px",
    boder: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all .4s",
    outline: "none",
    color: "#ffffff",
    fontSize: "20px",
    boxShadow: "0 3px 6px rgba(101, 90, 86, 0.08)",
    width: "90px",
    height: "42px",
    paddingBottom: 4,
    "&:hover": {
      transform: "scale(1.05)",
    },
    [theme.breakpoints.down("xs")]: {
      width: "120px",
      background: "#ffffff",
      color: "#AA2CA8",
    },
  },
  box: {
    display: "flex",
    backgroundColor: "#ffffff",
    borderRadius: "25px",
    transition: ".2s all",
    "&:focus-within": {
      transform: "translateY(-2px)",
      boxShadow: "0 0.7rem 3rem rgba(101, 90, 86, 0.08)",
    },
  },
  slider: {
    width: "1040px",
    margin: "0 auto",
    marginTop: "30px",
    padding: "0 10px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      margin: "20px 5px",
    },
  },
  movieHeader: {
    display: "flex",
    alignItems: "center",
    marginLeft: 20,
  },
  movieAbout: {
    background:
      "transparent linear-gradient(270deg, #9F1578 0%, #D5A9FA 100%) 0% 0% no-repeat padding-box;",
    color: "#ffffff",
    marginTop: 6,
    marginLeft: 22,
    borderRadius: "20px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 10,
    },
  },
  movieHeaderText: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "21px !important",
    },
  },

  movieAboutText: {
    padding: "4px 25px !important",
    fontSize: '16px !important',
    fontWeight: '500 !important',
    [theme.breakpoints.down("xs")]: {
      padding: "4px 20px !important",
    },
  },
  trailer: {
    width: "1110px",
    minHeight: "400px",
    background: "#AA2CA812",
    paddingTop: 50,
    paddingLeft: 90,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 10,
      paddingLeft: 5,
    },
  },
  trailerContainer: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      width: "600px",
      flexWrap: "wrap",
      flexDirection: "column",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      width: "320px",
    },
    gridAutoFlow: "column",
    gridGap: 25,
    marginTop: "10px",
  },
  profileButton: {
    background:
      "transparent linear-gradient(90deg, #B91372 0%, #450B6B 100%) 0% 0% no-repeat padding-box",
    boxShadow: "0px 2px 4px #00000029",
    borderRadius: "52px",
    color: "#ffffff",
    fontSize: "16px",
    padding: "8px 20px",
    fontWeight: "500",
    marginTop: "20px",
  },
  buttonWrap: {
    marginTop: "40px",
  },
}));

const iconProps = {
  backgroundImage: `url(${IconSheet2})`,
  backgroundRepeat: "no-repeat",
  height: 12,
};

const marginBottom = "10px !important";

export const useSliderStyles = makeStyles((theme) => ({
  container: {
    "&.slickSlider": {
      display: "grid",
    },
  },
  wrap:{
    width: '1110px',
    display: 'flex',
    marginLeft: '20px',
    marginTop: '30px',
  },
  slide: {
    padding: "10px 0px 10px 0px !important",
    
    // border,
    borderTop: "none",
    "& .slick-slide > div": {
      background: "transparent",
      margin: "0px 8px !important",
      padding: "20px !important",
      marginBottom: "-30px !important"
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0px 0px !important",
      padding: "0 !important",
    },
    "& .slick-next:before, & .slick-prev:before": {
      color: "#AA2CA8",
      fontSize: "30px !important",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0 !important",
      },
    },
  },
}));
export const useBigCardStyles = makeStyles((theme) => ({
  card: {
    marginTop: 20,
    cursor: 'pointer'
  },
  image:{
    width: 300,
    height: 170,
    borderRadius: '10px',
  },
  title: {
    paddingTop: 8,
    paddingLeft: 10,
    objectFit: 'cover'
  },
  date: {
    paddingLeft: 10,
    color: "#00000080",
    marginTop: 2,
  },
  rating: {
    position: "absolute",
    background: "#0C7A29",
    top: -25,
    left: 44,
    borderRadius: 25,
    width: "62px",
    height: "21px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
}));

export const useSemiCardStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    width: "210px",
    maringright: "20px",
    backgroundColor: "#fff",
    boxShadow: "0px 3px 6px #00000029",
    borderRadius: "10px",
    marginBottom: 45,
  },
  image: {
    borderRadius: 10,
    width: "100%",
    marginBottom: "15px",
    heigth: 312,
  },
  title: {
    fontWeight: '500 !important',
    fontSize: '18px !important',
    marginLeft: '15px !important',
    marginRight: '10px !important',
  },
  rating: {
    position: "absolute",
    background: "#0C7A29",
    top: 295,
    left: 22,
    borderRadius: 25,
    width: "62px",
    height: "21px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  date: {
    paddingLeft: 15,
    color: "#00000080",
    marginTop: 2,
  },
}));

export const useSmallCardStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    width: "150px",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    paddingTop: 8,
    paddingLeft: 10,
  },
  date: {
    paddingLeft: 10,
    color: "#00000080",
    marginTop: 2,
  },
  smallImage:{
    width: 150,
    height: 225,
    borderRadius: '5px'
  },
  rating: {
    position: "absolute",
    background: ({ vote_average }) => `${
      vote_average >= 7.5 ? "#0C7A29" : vote_average >= 4 ? "#FFB008" : vote_average < 4 ? "#FF414E" : vote_average === 0 ? "#636363" : ''
    }`,
    top: -25,
    left: 44,
    borderRadius: 25,
    width: "62px",
    height: "21px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
}));

export const useFooterStyles = makeStyles((theme) => ({
  container: {
    background: "#AA2CA812 0% 0% no-repeat",
    display: "flex",
    flexDirection: "column",
    paddingTop: "20px",
    marginBottom: "55",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      "&>*:first-child": {
        marginBottom: "10px",
      },
    },
  },

  sections: {
    display: "grid",
    margin: "32px 180px 50px",
    gridTemplateColumns: "repeat(auto-fit, minmax(173px, 1fr))",
    gridGap: "20px",
    alignItems: "center",
    "&>*": {
      justifySelf: "center",
      alignSelf: "center",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "40px",
    },
  },

  text: {
    marginRight: "30px !important",
  },
  created: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "20px",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "10px",
    },
  },
  logo: {
    width: 120,
    height: 120,
  },
}));

export const useMovieStyles = makeStyles((theme) => ({
  about: {
    position: "absolute",
    top: "30px",
    left: "15%",

    display: "flex",
    [theme.breakpoints.up("xl")]: {
      left: "20%",
    },
    [theme.breakpoints.down("md")]: {
      left: "10%",
    },
  },
  heading: {
    fontWeight: "500 !important",
    marginBottom: "7px !important",
  },
  info: {
    marginTop: "60px",
    marginLeft: "40px",
    color: "#ffffff",
    marginRight: "20px",
  },
  buttons: {
    marginTop: "15px",
    display: "flex",
    alignItems: "center",
    "&>*:not(:last-child)": {
      marginRight: 15,
    },
  },
  rating: {
    width: 42,
    height: 42,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "15px",
    fontWeight: "500",

    boxShadow: "0 0 5px rgba(var(--jb7,0,0,0),.0975)",
  },
  saveIcon: {
    cursor: "pointer",
  },
  fab: {
    width: 42,
    height: 42,
    background: "#AA2CA8 !important",
    "&:hover": {
      background: "#AA2CA8 !important",
    },
  },

  image: {
    width: "300px",
    height: "450px",
    borderRadius: "10px",
  },
  trailer: {
    display: "flex",
    alignItems: "center",
    color: "#fff",
  },
  trailerVideo: {
    background: "transparent",
  },
  trailerText: {
    marginBottom: "5px",
  },
  sliderContainer: {
    "&.slickSlider": {
      display: "grid",
    },
  },
  seriesCast: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
  },
  slide: {
    padding: "10px 0px 20px 0px !important",
    marginBottom,
    // border,
    borderTop: "none",
    "& .slick-slide > div": {
      background: "transparent",
      margin: "0px 8px !important",
      padding: "15px !important",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0px 0px !important",
      padding: "0 !important",
    },
    "& .slick-next:before, & .slick-prev:before": {
      color: "#AA2CA8",
      fontSize: "30px !important",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0 !important",
      },
    },
  },
  actor: {
    width: "140px",
    height: "270px",
    background: "#FFFFFF",
    boxShadow: "2px 3px 6px #00000029",
    borderRadius: "10px",
  },
  imageCard: {
    width: "100%",
    borderRadiusTopRight: "10px !important",
    borderRadiusTopLeft: "10px !important",
    height: '175px',
    objectFit: 'cover',
  },
  realName: {
    fontSize: "14px",
    fontWeight: 500,
  },
  name: {
    fontSize: "13px",
    color: "#00000080",
    marginTop: 2,
  },
  imgTextContainer: {
    margin: "10px",
  },
  comments: {
    marginBottom: 40,
  },
  commentContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: "20px",
    marginTop: "20px",
  },
  commentImage: {
    width: "70px !important",
    height: "70px !important",
    marginRight: "20px !important",
  },
  commentsInfo: {
    display: "flex",
    flexDirection: "column",
  },
  commentsInfoHeader: {
    display: "flex",
    alignItems: "center",
  },
  commentName: {
    fontSize: "16px",
    fontWeight: 500,
    marginRight: "14px",
  },
  commentDate: {
    fontSize: "12pxs",
    color: "#00000080",
  },
  commentContent: {
    width: "85%",
  },
  addComment: {
    display: "flex",
    alignItems: "flex-end",
    marginLeft: "20px",
    marginTop: "20px",
    marginBottom: "20px",
  },
  urlInput: {
    margin: theme.spacing(1),
  },
  addCommentImage: {
    width: "70px !important ",
    height: "70px !important",
    marginRight: "20px !important",
  },
  commentButton: {
    marginBottom: 8,
  },
  moviesRecommendation: {
    width: "1040px",
    margin: "0 auto",
    marginTop: "50px",
    padding: "0 10px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      margin: "20px 5px",
    },
  },
}));

export const useSearchStyles = makeStyles((theme) => ({
  section: {
    width: "1110px",
    margin: "0 auto",
  },
  urlInput: {
    borderRadius: 5,
    width: 800,
  },

  searchField: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    fontSize: "14px !important",
  },
  searchButton: {
    marginBottom: "-5px",
  },
  underline: {
    "&::before": {
      border: "none !important",
    },
    "&::after": {
      border: "none !important",
    },
    "&:hover&:before": {
      border: "none !important",
    },
  },
  returnText:{
    width:'1110px',
    height: '35vw',
    paddingBottom: "300px",
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '-50px',
  },
  loading:{
    width:'1110px',
    height: '35vw',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
  },
  moviesWrapper: {
    
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 150px)",
    gridGap: 25,
    justifyContent: "center",
    marginTop: "30px",
    marginBottom: "30px",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px",
  },
}));

export const useMainSkeletonStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    borderRadius: "3px",
    marginLeft: "-1px",
    marginRight: '60px',
    width: "150px !important",
    marginBottom: '40px'
  },

  mediaSkeleton: {
    backgroundColor: "rgba(var(--c90,239,239,239),1)",
    backgroundImage:
      "url(data:image/gif;base64,R0lGODlhIAAgALMPAPj4+Pf39/X19fT09Pb29vPz8/39/fLy8vn5+fr6+vHx8fv7+/Dw8Pz8/O/v7+/v7yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAPACwAAAAAIAAgAAAEItDJSau9OOvNu/9gKI5kaZ5oqq5s675wLM90bd94ru+8HAEAIfkEBQIADwAsAAAAAAEAAgAABAOQsQgAIfkEBQIADwAsAAAAAAMABwAABAuwKHYYmw+z93bnEQAh+QQFAgAPACwAAAAABQANAAAEHFCMo5goh7FR6psexjxPNz7UmZGPR7rPScox+0QAIfkEBQIADwAsAAAAAAcAEgAABC0QBDKOYoCIchimxfUEQiWSHPM8oPiUlvqG8mPW9/rQ+hP3P51LWFsVjT1kMgIAIfkEBQIADwAsAAAAAAgAFQAABDswoUDGUQwBIsphGTUUmDMJVrl1n+OIJOMG6CU7Vezi6e2wJVcn6OrtHB4iUumwHZu+HdMxje6sLqwjAgAh+QQFAgAPACwAAAAACgAbAAAEV7CthAIZRzGJABHFwTBTdRXaMwGBgKVL94XM81DWgNY362Y8mS5lq/yID18I6RnybK3X89FaTk9I23H6AIls4IczbJOSH7QzOgsGqr9qNlhu44btYLwtAgAh+QQFAgAPACwAAAAADAAgAAAEdtCYthIKZBzFJkUAIRQH01EWNhTcM1VAIGgtCook8zy2yuo8mIwGbFhCq9aucpltgI8FSEZSRi+Z326XiDmtjy7uuX1gk9Bdk1h+hEaltjsL3lHJ7WxcnsG34XU7I4E7bHIPhnJahw9+cnuMhFuSO2mHlnKYbREAIfkEBQIADwAsAAAAAA4AIAAABIqwNWPaSiiQcRSTlYUAhFAczEdZmDYUnjNJFxAIXLxeY3kyDseutYEBhbSEDdc5VnikVyz4bDGnyMXodsKyMkWsrHbLHYMikqkZDPJcxrZbWWbLteqfPEiUntt0a2JBPS8oe4QudntLXX9tUXGIDnWDbVyLe2GPclecbWufbX6To5mIeqVBkqqniBEAIfkEBQIADwAsAAAAABAAIAAABKAQrdaMaSuhQMZRTDJV1IIAhFAcTDhZmMYNBeiMVwwEgmfjsVNqxXA4KLDMplMrHkk6ns+JDKJoNiNUKf04HTDMibfKgi9cphlcSux6XqMxZ0Kp4nK0TP2dR+FrTxp2RHJyQTNNhloZb2V9WoNMLItGaVOVN2N3gZZLWJBybl2dRm5DeJWfipkOG4ChcoSUrQ5XrK2ksXKou7yYtQ6cvkYRACH5BAUCAA8ALAAAAAASACAAAAS0kIC0WjOmrYQCGYfCBFP1ZBoCEEJxMAyAUFe2dV8hPrKJboCAALSb+TScVev1eBhrSNxAx2jSThagkFh9XG3J3K65WGCj21D3cUwFl2M29OaZxh+Ns3aobjbzPyosLndzHHVUfn4/CW9ciicoYUtri2BSiZCMb4SVTZcrU0yQWHQffaQ2KkKdpHimdp5+SI6opG6DtpANh2KyfnuPrmyClMNWmHekjWnKkMUuv4pSuq6c1aQRACH5BAUCAA8ALAAAAAAUACAAAATKcAgC0mrNmLYSCsRwKIwUVFeGLQhACMXBlESAWNnWfWFBOhMAIrXhJAABgehXQ2F0HhdM5nBQbheNkTfwMaqn4XN1TC6/DhtOtXN1f1Uhrrgzj9AOp4rTSsbgDlg5WyBveIFEZEhKd1VVa3QtL3+Hc1BcXo5ViUaLZ5oOnFGTVKBPl4WZpnsdi5SgDmNtPaWmWnUhjbBafK66oLceqYDAinbEmpFSr7AOqD3IyZ3Hh6ssy7XNhNDVpq3UzY4No1PdoLif4Zt9U9GgEQAh+QQFAgAPACwAAAAAFgAgAAAE5VCdIghIqzVj2kpIQAyHwkiDEFzZpi0IQAjFwZzFQAQItnWf0KhgckwqAESr40kAAgJSMadiaYAgGc3mcOQsvQynKRwQGd0UePlyQqVoR4rncwVl5mIXGXaR3yVxDlV1TDBPW3oOO31jQSJ5gg4rSldtiHBdXSuFLzEzNYoOST6OIJBnml1JbE2YgaoOfX5ZoFyxjVhlqbGdrlChkl2dd0O3sQtiupCwsQ6th8DNyD9/Q6Kqlr9R07Hah7bYmtWP18LZhm7c4ppjHp9b56qmu+ztl4D2XbpaNfLz1jI5Axgt0T9NEQAAIfkEBQIADwAsAAAAABcAIAAABPOQqVMEAWm99kxbCRIQw6Ew0jEIAaY1xrYgACEUx4MqxUAEiAzHAxKRCqfHpHJBvGKfBCAgKCUnq1ZmQwzVbgfG40HxAYKLYdQ4QIrJzPNTJqVa3z0WmruutZNjcWgwdCJVJm8PWS5cMjRUOICKP4MdayN/iQ8Wco1RU4eSm1pzHzQ2kZqUQpZFmG5jsS1OniCgd7FjpJ5eqGG5Y2esXWywwJ2En5CIwA97MH1Hv82VxJjMzVvJM6CpzQ/Dl0eiuaW2dtjN5qdg5LFprSGv7rnbdaGawA3b7Dj5+vGK0csF5Ry+bwSjgfn3TRwuhPW4LRsYKwIAIfkEBQIADwAsAAAAABkAIAAABP/QSXWKICCt1oxpS4IExHAojMRQgxBkW8ctCEAIxcGkzloMhABC0/mERqUCSkWxYBCxDygBCAhMyx7LBeMYRTacTqL9PYmeKXKg5K0qFwDUO6Nase6tkCg72thZPXBnG1JHdyc8Dk1cfIY1VjmBCmZ7hV9rbWQOg3JRdVVXiZsHLS+OMzU3kooOlUOXaiSAra5xczJToXibDqZduWCrY70XlkWySYFkt5+6kaO9QbB0fknE0nJomLPRvafONKGsvRLasYfKtWTadM+iy5vUueLD8WTUaem05WSo77z6OfhXT8y6TQvQiZilSaCDcHbgHSTzyZpBhxLc7fMmUCMkMfcDekUAACH5BAUCAA8ALAAAAAAbACAAAAT/0EmpThEEpNWaMc2SIAExHAozOUw1CIHGed2CAIRQHIw6tYUBIYDYeEAikqmQWrUsGABiBgolAAHBqflzwWQd5Ain461YimCmyPlYlQOmT/K8rKm1a3Y7Rx9eREY0SThxXD9Qa0ZVSXsofXVfgow3WTuHaGqBbWJwck4MiVJ4Vlhaj05eMZM1NzmXkGlCm0dvJYZ9DhV2o2F5pnxnqmA0DWOvZmcWs2y1jUuYEqJTvqWWqGdBMM2Dx3HJ2UJSi5232GeAxJSmsGcSzOS20LkTUUXVIsDnZ5KkNmTt3DkY0szNM1wCJcSgViyfo2grVvlzVYbeinGc5CFM6KBXQz2nFiCu4NYJILiEBfPA2SeQVYhKZUSuiAAAIfkEBQIADwAsAAAAAB0AIAAABP/QyenUKYKAtFozRrMkSEAMh8JQEmMNQrB1n7cgACEUB7OyrsKAEEBwPqFR6VRQsRyuSwaAoIVECUBAgHICX7GZJ0nK7XpPqEKoMXZA2OWg+aNEMW2rLbvt1idRMEVHNUo5c15AUm1HV0p9KX8tFhgyhI44WzyJgGtDg29kcnRpDItUelhaXJFPgWGXNjg6m5JqbKBIcSaItndTVWN7q36uYJapZbRoxrhuuo9MnJOnwTWqmq1fB4LPhcpzzIpsVI2ivNoslLCpN6u1aZ5Ez3DRvWkO1QnC2KzTE9zY8XO37J8EZ+Z2SbM1AQ+qgXz8MZQgSMw1gmcmSsiQqx4JXqQe8DkA1i5iMZHzYhlaplECozd75KTDh2xgpjMGKUQAACH5BAUCAA8ALAAAAAAfACAAAAT/0Mk51SmCgLRaM0azJEhADIfCUBRjDUKwdZ+3IAAhFAezshJXYUAIIDif0Kh0KqiAQQtGg6CFRAlAQIB6Ql0HmAxZW+Z2PWh0SEWCsMyB8wcETwFVz3Wk5aboLGBiR1ZwOXJeXxcZeG42JFtdgC1SMTN6NjhbPImBCmxGbkqQTZ2Bi1SFWH2SaoKWZHs4OpyTE0JEoR1vSyaItlGoeKp8kX+uL7CqJGc8wGu5hElwvnPIwnk1q5vHX8m6mGZNaa4XRI27o3HddZVjxJpopref0aLUpc8+2AmY237zgom5pO1GM3aeQEnjReqXGgeVUvkrBvAZxDDKJs5CYxGiwnu9I/I9dICNWBZjAScMiSGtDDNa5B6yQVewIUIoA2Nl6lNrpIMIACH5BAUCAA8ALAAAAAAgACAAAAT/0MlJ1SmCgLRaM0azJEhADIfCUCxjDUKwdZ+3IAAhFAezshNXYUAIIDif0Kh0KqiAQQtGg6CFRAlAQIB6Qh2uA0yGrC1zu95XIiQCjh0Qljlw/qDh6dtqy267d0BhY3AeSiQ5dV5fDBcZb0hXS38pgS1SMTOGNjhbPIuCCkNFhXKTTaCCjlR8WFpclWuDmWWSODqflhRtpJGHdHaymKybrpSpuy+0rYi4asKjRr5zJoq6Uat7xSOvucJiMYVmzXXPjBdupb/VsYyYZK033e14okTSceuo10HZR9t+YCHDNkZTDRG30gxkY69XPmr7ZDXSUwXgK0DfCtbihIYHP4bRJtRBtLbGwTBtB7kd+2gSHL5NZ5yxdICOSqQ+dOh9cQRvWyeFMyMAACH5BAUCAA8ALAAAAAAgACAAAAT/0MlJpTpFEJBWa4bRLAkSEENRrcw1CAHngd+CAIRQHGvVFgNCANEBiUgmVEHRm7QwGgBiJholAAHB4MBsOp6vWJGGxOkODO9XAdwQPSFrMqVIN58ZN7V2zW7rXmAwbx9HJTh0dndQbkVVSH5ciiwXGWJ7IzdZO4B3bEFDjoZzS5MsjFKYJFhakoEuMDKFNTc5nKYUP6CEcZBKnT14UVOzVqx/uE6wl8WHtmhqukK8oyeJr6jENMabrp4HYYRkzinQgRhBUqJy1t7BlbFjj5pnwJRtoXDVv8lO2QnFVkWy52OZrG02zNx6hY8aO37Rsqnq04pgLoPyaCk056nhOl/XH77lSRWQIjJs4TKWedZPgjR1cPjMcUcJCjOE9BY2iQAAIfkEBQIADwAsAAAAACAAIAAABP/QyUmpOkUQkFZrhtEsCRIIVSox1yAEnAd+CwIQqFqxxUAEiA5IRDIRBjoKC6MBIGSiUQJwQiZXrVfsQyzdBIUrtrcJekJS4yB8XWbKUNq0ehAvXUDhrHhb19tMZUJRRXQKbRcZMHqENicFB4dJPD55Z11qBQoMgG9OcVJUAgORnDp3Wow0NjiQm5MKZJZDaQFHmqYqbk1PXHKipK+nWYugXq0HubqxlWa0hbfCy4GfvqGPpbAHeM57x37KKQwYPk6DmLbB4UqJqaA1oq7rE5Q/zmjQa9K61EHWJMCyDdvm7h8rMAKXybqHLto8ev3ezRmVUByxLTNGHIT0cEyzc7UgHGrz1CsjQEMdUc3ytjEZIjLmzshRU3FHu2IG49WUEAEAIfkEBQIADwAsAgAAAB4AIAAABP/QyUmpOkUQkFZrhtEsCVCdEnMNQsB54LcgJlqpxUAESAeKJJqNosJoAAiYaFQKDCdFlssXCwKcTwdOh/SFmIgAIVvMbJKfJekqIK9aPSUYQGg/GcazV5YICwZ3FxlTciM0AX+BOTtxP2BiAwV3eUiFa4gDB0NRLS9pMjR1BZo2W4xeQH2QBQqlgkdoMUxsma0onISfDX10AqMMros8qI8EkQrAJ2Wwlk2+B8i3b8NyVsa/pRhcjV9BkNDJN6+5sjNso9HKCsLcqWHX6cqUPbqXf+DSB1Ke5aHP8UTW6aDmyBu8cDfmNaOFT52+TlTU+MMmjR0xg8cQQnl1ZiGmhuIaHhKswkvUAY0bF3XxoEaVMZABjZCTeA6mgwgAIfkEBQIADwAsBAAAABwAIAAABP/QyUmpOkUQkFZrhtEsVSkx1yAEnAd+pFmhxUAESAeKSyJTKIwGgHCJRr7fKbVqfXgJhHJZ2+Q8IaRUGcxYjbAEYBpU4XSvHmLMFVp1R3WAe8mw0PH1/EeznbFQCAEEbV5EYEgAg3xMd4gLawQCjFV/O1qDAzJdQ0VPYYoCmiZlTXgfUQCSBZsKlVeXcgQDrCWcX5+JAQIFB6SNsGmps72kGDZEcIGZBwq2daaPerzNz6/KmMQKDLZuybk9oQPN3ECNTi8jkdTbM65+sFmytO0z3p7p4bvj9ROljuDW9Spn7hqgbPQILrn3SMw+cu4OmAkWSBU1hVSQxQsjaBZEc0IHAOab1qtfBAAh+QQFAgAPACwGAAAAGgAgAAAE+tDJSak6RRCQVmuGUY0Scw1CwHlgQ45mMRAB0oGG+04mpgEIVk63c/RQqluLuIvNgLdQY1E0XjKb4GdILR5TNuG02/Rlo59FwntNrbbpdVMho4Vx0wTCawaK83svX0l/CwgAc3U1UTlqh4JtWYUJAAGQB0hvS3qVkIp3Uo4BBCQ9WH5weZUCpSdgSo2cBKwwGE+gsQijAzBthKmGq7wVTnaMgLsFtac2wJQBAgMHxK6/S8GzBdMUxYseoXrJCsR9WtfP0QfjPNWaXIfZ6tx0M954ogQDBQoM7OWTwtT1K1HtTgtHAOINJFgHyrc4uvIJ9JfB2rtV2vg5iAAAIfkEBQIADwAsCAAAABgAIAAABPDQyUmnOkUQkFZrRiU6zDUIAeeBY1UWAxEgHRi2UolpALIaN5zulKqBGricAraheYBI4SXT/H2SQ5TzY7gKd81at7GQ7opWspQ5E3cX5RYD3EsvEnITSsX93PNsW1B3CCM6VHV9ZAmFIlloiowAhksxbU9vko5TPD6KdwABmwdEW0eEAASOGDE9bosIAaoUh3tGYwsIoQIulTKCmbEEvLR0NJ8JuwO0epBHZLrDyxMvlsCwsgMFxYiez6ABAgMH1M1839ECBeRKga+E2QUKSsZ2yeHj8yTNpsGp6gcYtGslyA+jbAcUCKzlDJeucOsURgAAIfkEBQIADwAsCQAAABcAIAAABNfQyUmpOkUQkFaroMRcgxBwXgiOxUAESPep04hpAOLNtGOXJ5mhJ1K0NjHPsGfLIHdL2s+UbDSiKsYNKcSuLpkg1FthuWBdXkjrzEGtUpIJZTXAs8Zz1WBf4LdudVZ+a3Jigg2EX0doSn0JhYA6iAuQXwdAVVeJCQhrGC45aZWeZWBzMpuJCACLeqOdrWWSCZQJAAGmmKhvq7imjHuPCAEEs22TqpW4AhRTh8qsBM01eS/CnMQEA9WSvcsBAtxFu42CpADTBdVHokqDncUD6z6n0Ha+4QUHEQAh+QQFAgAPACwLAAAAFQAgAAAEwdDJSak6RRCAqpfMNQgBkHxeWAxEgJzoFGIat8SySJo37qgsTqLhm2U2iAURNxu5EsoiDQldooy7qoGpWLVeym2MMbU1GuJPM6tEj7usZzhdwSLbBjplXaqirXVwX1oGgDllSWeFhiA6copnahhBYGiFPXsXGX14Z5g5Xo95DQufIIhDf6Qwh048kKuBoZWjCwkde4idq7iNB65+iwsIAJmzhLzFvkdmqrYAAa0klX+2xASglFqetwHYP5pssMPQAhEAIfkEBQIADwAsDQAAABMAIAAABKnQyUmpOkWQyiW7gxB03FcMBEBSH6apqweKSCyfaR23WZrYrVAA8du5covdJRMAJJIrE2r4NPYAiEUjOms+tyQpgaoNL1/ZhsF8EDq1646YrJafkY16qUvU6isMGChYXwZxLGdefoZ7OHSGYCxHhHkGeYBdb5WXiI59apaRHpNpanlQMm0imqYNqA5zn5ALRbB3WIuntUE0X6a0OrY4hHC6OjyrvqELCAARACH5BAUCAA8ALA8AAAARACAAAASS0MlJqTqjaslu3lVXfCB3FUI5dRihmqOrsmjwsoNgzwdKALOTDlgSDQgBBM8HUIJww0RREUtKNzTBD7F4eqJdLPVobYh72ubCrIFa19jesZmAh4QBQL1haI+RCHt9IWhbCQ18dxhgiIMrf298jhyFao2TbnprfGwwZIFrBgadWVubo6RfkZypMXShiGFZeXusCxEAIfkEBQIADwAsEQAAAA8AIAAABIDQyUmpqliym+vu1HaA01aQmnKS4oC271EIrCLToDkQ7B3ktoHg19ERAEXb7Jg8CAOIZGEHzYiWgIQ1OERoMQzZDoBYgJXDrNmjonrXodvR22A704lFPdQmQPN7JXJkeoEOLXh6BnxTfm8NiymDZQ2QJVx/hZGHfWSABpFXiZWgEQAh+QQFAgAPACwTAAAADQAgAAAEc9DJSSWr2N1MN9fKZ4Uic5TK+TFKUR4uxx7D2tYyLMjpsGeswoAATBUEgSINWRQSAJjZ8RntIRFR2BCA7RiRgEQlOAwgxB3dE7HwLgPh9oRMMCfkFjV30Zhb4Xd9I052fCN6bA0Ghz6FioNbZ3yLUmCBihEAIfkEBQIADwAsFAAAAAwAIAAABFvQyUmrvTjrzSvbnxZijCKaGXOkykoqxXvEV3kMbyHUrc7fhNpsEPT0BAFLqUAEKGcCgpNiGyARRiYhgKVCpQlqyxoAhCdLIneBPkoRbEn1mog70u9EQ34s1xsRACH5BAUCAA8ALBYABgAKABoAAAQ/0MlJq704a8pyx5/FKCB5MceppKJSnMdbjcfQFvYcC/M68BzXgKArCALB2jGIIwAmNKMT6jsiqE3A1RE9AhIRACH5BAUCAA8ALBgACwAIABUAAAQp0MlJq704a3a59RSjfGPFHKaChkphHu4kHgNbCLJ65zSRFwOfY3YLRAAAIfkEBQIADwAsGgARAAYADwAABBjQyUmrvZdVTflUHTgxokMeo1Kkq6kcQwQAIfkEBQIADwAsHAAWAAQACgAABArQyUmrtWxmuZmKACH5BAVPAA8ALB4AHAACAAQAAAQE0MkpIwA7)",
    backgroundSize: "cover",

    height: "225px",
    border: 10,
    "&:before": {
      display: "block",
      content: '""',
      paddingBottom: "100%",
      width: "100%",
    },
  },
  title: {
    marginTop: 8,
    flexGrow: "0",
    height: "15px",
    marginBottom: "4px",
    width: "130px",
    backgroundColor: "rgba(var(--c90,239,239,239),1)",
  },
  release: {
    marginTop: 3,
    flexGrow: "0",
    height: "10px",
    marginBottom: "4px",
    width: "100px",
    backgroundColor: "rgba(var(--c90,239,239,239),1)",
  },
}));

export const useSecondSkeletonStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    position: "relative",
    borderRadius: "3px",
    marginLeft: "-1px",
    marginRight: "10px",
    width: "300px !important",
  },
  mediaSkeleton: {
    backgroundColor: "rgba(var(--c90,239,239,239),1)",
    backgroundImage:
      "url(data:image/gif;base64,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)",
    backgroundSize: "cover",
    display: "block",
    height: "175px",
    border: 10,
    "&:before": {
      display: "block",
      content: '""',
      paddingBottom: "100%",
      width: "100%",
    },
  },
  title: {
    marginTop: 8,
    flexGrow: "0",
    height: "30px",
    marginLeft: "20px",
    width: "130px",
    backgroundColor: "rgba(var(--c90,239,239,239),1)",
  },
  trailer: {
    marginLeft: "20px",
    marginTop: 3,
    flexGrow: "0",
    height: "10px",
    marginBottom: "4px",
    width: "100px",
    backgroundColor: "rgba(var(--c90,239,239,239),1)",
  },
}));

export const useTertiarySkeletonStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    position: "relative",
    borderRadius: "3px",
    marginLeft: "-1px",
    marginRight: "10px",
    width: "205pxs !important",
    height: "420px",
  },
  mediaSkeleton: {
    backgroundColor: "rgba(var(--c90,239,239,239),1)",
    backgroundImage:
      "url(data:image/gif;base64,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)",
    backgroundSize: "cover",
    display: "block",
    height: "312px",
    border: 10,
    "&:before": {
      display: "block",
      content: '""',
      paddingBottom: "100%",
      width: "100%",
    },
  },
  title: {
    marginTop: 8,
    flexGrow: "0",
    height: "30px",
    width: "170px",
    backgroundColor: "rgba(var(--c90,239,239,239),1)",
  },
  release: {
    flexGrow: "0",
    height: "20px",
    marginTop: "8px",
    width: "100px",
    backgroundColor: "rgba(var(--c90,239,239,239),1)",
  },
}));

export const useMoviesStyles = makeStyles((theme) => ({
  movies: {
    width: "1110px !important",
    margin: "0 auto !important",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 210px)",
    gridGap: 25,
    justifyContent: "center !important",
  },
  heading: {
    margin: '40px !important',
    marginBottom: '60px !important',
  },
}));

/* ExploreSuggestions component: /components/explore/ExploreSuggestions.js */
export const useExploreSuggestionsStyles = makeStyles((theme) => ({
  container: {
    width: 935,
  },
  typography: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
}));

/* ExploreGrid component: /components/explore/ExploreGrid.js */
export const useExploreGridStyles = makeStyles((theme) => ({
  article: {
    display: "grid",
    gridTemplateColumns: "minmax(auto, 935px)",
    width: "100vw",
  },
  postContainer: {
    [theme.breakpoints.down("sm")]: {
      gridGap: 2,
    },
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: 20,
  },
  typography: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
}));

/* Login page: /pages/login.js */
export const useLoginPageStyles = makeStyles({
  section: {
    display: "grid",
    placeItems: "center",
    height: "100vh",
  },
  card: {
    maxWidth: 348,
    padding: "16px 40px",
    marginBottom: 10,
  },
  cardHeader: {
    backgroundImage: `url(${IconSheet})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-98px 0",
    height: 51,
    width: 175,
    margin: "22px auto 12px",
  },
  textField: {
    marginBottom: 6,
  },
  button: {
    margin: "8px 0px",
  },
  typography: {
    margin: "10px 0px",
  },
  orContainer: {
    margin: "10px 0px",
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    gridGap: 18,
    placeItems: "center",
  },
  orLine: {
    justifySelf: "stretch",
    height: 1,
    background: "#e6e6e6",
  },
  facebookIcon: {
    height: 16,
    width: 16,
    marginRight: 8,
  },
  buttonColor: {
    color: "#385185",
  },
  buttonWhite: {
    color: "#ffffff",
  },
  signUpCard: {
    maxWidth: 348,
    padding: "16px 40px",
    marginBottom: 10,
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "2fr 1fr",
  },
});

// SignUp page: /pages/signup.js
export const useSignUpPageStyles = makeStyles({
  card: { maxWidth: 348, padding: "16px 40px", marginBottom: 10 },
  section: {
    display: "grid",
    placeItems: "center",
    height: "100vh",
  },
  cardHeader: {
    backgroundImage: `url(${IconSheet})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-98px 0",
    height: 51,
    width: 175,
    margin: "22px auto 12px",
  },
  cardHeaderSubHeader: {
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: 1.2,
    color: "#999",
    margin: "0 0 20px",
  },
  textField: {
    marginBottom: 6,
  },
  button: {
    margin: "10px 0px 16px 0px",
  },
  orContainer: {
    margin: "10px 0px",
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    gridGap: 18,
    placeItems: "center",
  },
  orLine: {
    justifySelf: "stretch",
    height: 1,
    background: "#e6e6e6",
  },
  loginCard: {
    maxWidth: 348,
    padding: "16px 40px",
    marginBottom: 10,
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "3fr 2fr",
  },
  loginButton: {
    justifySelf: "start",
  },
});

// Navbar Component /components/shared/Navbar.js
export const useNavbarStyles = makeStyles((theme) => ({
  appBar: {
    background: "#ffffff !important",
    color: "#000000",
    display: "flex",
    alignItems: "center",
    order: 0,
    zIndex: "100 !important",
  },
  navLink1: {
    fontSize: "20px !important",
    cursor: "pointer",
    paddingBottom: "5px !important",
    color: '#000 !important'
  },
  navLink: {
    fontSize: "20px !important",
    cursor: "pointer",
    paddingBottom: "5px !important",
  },
  section: {
    alignItems: "center",
    display: "flex",
    height: 54,
    maxWidth: 1110,
    width: "100%",
    justifyContent: "center",
    padding: "0px 20px",
  },
  logoContainer: {
    display: "flex",
    flex: "1 9999 0%",
    minWidth: 40,
  },
  logoWrapper: {
    flex: "0 0 auto",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "stretch",
    color: "#000000 !important",
  },
  logo: {
    marginTop: 8,
    maxHeight: "100%",
    maxWidth: "100%",
    objectFit: "contain",
  },
  input: {
    height: 28,
    fontSize: 14,
    background: "rgba(var(--b3f,250,250,250),1)",
    border: "solid 1px rgba(var(--b6a,219,219,219),1)",
    borderRadius: 3,
    color: "rgba(var(--i1d,38,38,38),1)",
    outline: 0,
    padding: "3px 3px 3px 26px",
    zIndex: 2,
  },
  linksContainer: {
    alignContent: "center",
    alignItems: "center",
    display: "flex",
    flex: "1 0 0%",
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },
  linksWrapper: {
    postion: "relative",
    display: "flex",
    paddingLeft: 24,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
    },
    alignItems: "center",
    whiteSpace: "nowrap",
    "&>*:not(:last-child)": {
      marginRight: 22,
    },
  },
  resultContainer: { width: 215 },
  resultWrapper: {
    display: "flex",
    alignItems: "center",
    height: "50px",
    padding: "8px 16px",
  },
  avatarWrapper: {
    margin: "0 10px 0 0",
  },
  nameWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  icon: {
    position: "relative",
    "&:not(:first-child)": {
      marginLeft: 22,
    },
  },
  listContainer: {
    background: "rgba(var(--cdc,255,255,255),1)",
    borderRadius: "5px",
    border: "solid 1px rgba(var(--f23,255,255,255),1)",
    boxShadow: "0 0 5px rgba(var(--jb7,0,0,0),.0975)",
    height: "105px !important",

    padding: "0",
    position: "absolute",
    top: "54px !important",
    whiteSpace: "normal",
    width: "154px !important",
    // [theme.breakpoints.down("sm")]: {
    //   width: "100% !important",
    //   right: 0,
    // },
  },
  listWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "154px !important",
    alignItems: "flex-start",
    paddingLeft: "20px",
    paddingTop: "10px",
    color: "#000 !important",
    "&>*:not(:last-child)": {
      marginBottom: 8,
    },
  },

  clearIcon: {
    backgroundImage: `url(${IconSheet})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-250px -98px",
    height: 20,
    width: 20,
    cursor: "pointer",
  },
  searchIcon: {
    backgroundImage: `url(${IconSheet})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-167px -306px",
    height: 10,
    width: 10,
    left: 11,
    position: "absolute",
    top: 9,
    zIndex: 2,
  },
  notifications: {
    position: "relative",
    "&::after": {
      right: 10,
      width: 4,
      bottom: "-5px",
      height: 4,
      margin: "0 auto",
      position: "absolute",
      background: "#ed4956",
      transition: "bottom .2s ease-in-out",
      borderRadius: 2,
      content: '""',
    },
  },
  profileActive: {
    border: "1px solid rgba(var(--i1d,38,38,38),1)",
    borderRadius: "50%",
    height: 28,
    marginLeft: "-3px",
    marginTop: "-3px",
    position: "absolute",
    width: "28px !important",
  },
  profileImage: {
    width: "22px !important",
    height: "22px !important",
    marginBottom: "5px !important",
  },
  followers: {
    backgroundImage: `url(${IconSheet})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-249px -160px",
    height: 16,
    width: 16,
    margin: "0 5px",
    display: "block",
  },
  likes: {
    backgroundImage: `url(${IconSheet})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-385px -126px",
    height: 18,
    width: 18,
    margin: "0 5px",
    display: "block",
  },
  tooltipContainer: {
    display: "flex",
    alignItems: "center",
    "& div": {
      margin: "0 5px",
    },
  },
  tooltip: {
    display: "flex",
    alignItems: "center",
  },
  resultLink: {
    background: "#fafafa",
    width: "100%",
    borderBottom: "solid 1px rgba(var(--b38,219,219,219),1)",
    "&:hover": {
      background: "rgba(var(--b3f,250,250,250),1)",
    },
  },
  progressBar: {
    top: 0,
    zIndex: 1031,
    left: 0,
    height: 3,
    background:
      "#27c4f5 linear-gradient(to right,#27c4f5,#a307ba,#fd8d32,#70c050,#27c4f5)",
    backgroundSize: "500%",
    animation:
      "2s linear infinite $LoadingBarProgress,.5s ease-out $LoadingBarEnter",
    transformOrigin: "left",
    width: "100%",
  },
  progressContainer: {
    position: "absolute",
    zIndex: 2000,
    width: "100%",
    pointerEvents: "none",
  },
  progressBackground: {
    boxShadow: "0 0 10px #29d, 0 0 5px #29d",
    display: "block",
    height: "100%",
    opacity: 1,
    position: "absolute",
    right: 0,
    transform: "rotate(3deg) translate(0px, -4px)",
    width: 100,
  },
  "@keyframes LoadingBarProgress": {
    "0%": {
      backgroundPosition: "0% 0",
    },
    to: {
      backgroundPosition: "125% 0",
    },
  },
  "@keyframes LoadingBarEnter": {
    "0%": {
      transform: "scaleX(0)",
    },
    to: {
      transform: "scaleX(1)",
    },
  },
}));

export const RedTooltip = withStyles({
  popper: {
    zIndex: "1100 !important",
  },
  arrow: {
    color: "#ed4956",
  },
  tooltip: {
    backgroundColor: "#ed4956",
    color: "#fff",
  },
})(Tooltip);

export const PurpleTooltip = withStyles({
  popper: {
    zIndex: "1100 !important",
  },
  arrow: {
    color: "#AA2CA8 !important",
  },
  tooltip: {
    backgroundColor: "#AA2CA8 !important",
    color: "#fff !important",
    fontSize: "14px !important",
  },
})(Tooltip);

export const WhiteTooltip = withStyles({
  arrow: {
    color: "#fff",
    filter: "drop-shadow(1px 0px 2px #ccc)",
  },
  tooltip: {
    backgroundColor: "#fff",
    color: "#000",
    padding: 0,
    pointerEvents: "all",
    boxShadow: "0 0 5px 1px rgba(var(--jb7,0,0,0),.0975)",
  },
})(Tooltip);

/* Layout component: /components/shared/Layout.js */
export const useLayoutStyles = makeStyles((theme) => ({
  section: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    minHeight: "100%",
    overflow: "hidden",
  },
  main: {
    display: "flex",

    flexDirection: "column",
    alignItems: "stretch",
    flexShrink: 0,
    position: "relative",
    padding: 0,
    order: 4,
  },
  childrenWrapper: {
    paddingTop: 30,
    display: "flex",
    margin: "0 auto",
    flexFlow: "row nowrap",
    maxWidth: "1110px !important",
  },
  image: {
    height: "500px",
    position: "relative",
  },
  children: {
    width: "100%",
  },
}));

/* PostModal component: /components/post/PostModal.js */
export const usePostModalStyles = makeStyles((theme) => ({
  overlay: {
    position: "fixed !important",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5) !important",
    zIndex: "1200 !important",
    padding: "0 40px !important",
    pointerEvents: "auto",
  },
  close: {
    padding: 12,
    top: 0,
    right: 0,
    position: "fixed",
    zIndex: 1201,
    cursor: "pointer",
  },
}));

/* FollowButton component: /components/shared/FollowButton.js */
export const useFollowButtonStyles = makeStyles({
  button: {
    height: 30,
    width: 75,
    padding: "0px 16px",
    marginTop: ({ side }) => (side ? 0 : 10),
  },
});

/* FeedPost component: /components/feed/FeedPost.js */
export const useFeedPostStyles = makeStyles((theme) => ({
  article: {
    border: "1px solid #e6e6e6",
    background: "#ffffff",
    marginBottom: 60,
    [theme.breakpoints.down("xs")]: {
      border: "unset",
      marginBottom: 0,
    },
  },
  postHeader: {
    borderBottom: "1px solid rgba(var(--ce3,239,239,239),1)",
    display: "grid",
    gridAutoFlow: "column",
    gridTemplateColumns: "auto minmax(auto, 20px)",
    gridGap: 10,
    alignItems: "center",
    padding: 16,
  },
  moreIcon: {
    height: 24,
    width: 18,
    justifySelf: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },
  image: {
    width: "100%",
  },
  postButtons: {
    display: "grid",
    gridAutoFlow: "column",
    gridTemplateColumns: "24px 24px 24px minmax(24px, auto)",
    gridGap: 16,
    padding: "6px 0px",
  },
  postButtonsWrapper: {
    padding: "0px 16px 8px",
  },
  commentUsername: {
    fontWeight: 600,
  },
  datePosted: {
    fontSize: 10,
  },
  likes: {
    fontWeight: 600,
    "&:hover": {
      cursor: "pointer",
    },
  },
  like: {
    animation: "$like-button-animation 0.45s",
    animationTimingFunction: "ease-in-out",
    transform: "scale(1)",
  },
  liked: {
    animation: "$liked-button-animation 0.45s",
    animationTimingFunction: "ease-in-out",
    transform: "scale(1)",
  },
  "@keyframes like-button-animation": {
    "0%": { transform: "scale(1)" },
    "25%": { transform: "scale(1.2)" },
    "50%": { transform: "scale(0.95)" },
    "100%": { transform: "scale(1)" },
  },
  "@keyframes liked-button-animation": {
    "0%": { transform: "scale(1)" },
    "25%": { transform: "scale(1.2)" },
    "50%": { transform: "scale(0.95)" },
    "100%": { transform: "scale(1)" },
  },
  textField: {
    padding: "10px 0px",
  },
  root: {
    fontSize: 14,
  },
  underline: {
    "&::before": {
      border: "none",
    },
    "&::after": {
      border: "none",
    },
    "&:hover&:before": {
      border: "none",
    },
  },
  commentContainer: {
    display: "grid",
    gridAutoFlow: "column",
    gridTemplateColumns: "auto minmax(auto, 56px)",
    padding: "0px 0px 0px 16px",
  },
  commentButton: {
    width: 48,
    padding: "unset",
  },
  moreButton: {
    color: "#999",
    padding: 0,
    "&:hover": {
      background: "transparent",
    },
  },
  saveIcon: {
    justifySelf: "right",
  },
  commentsLink: {
    color: "#999",
    margin: "5px 0",
  },
  collapsed: {
    display: "flex",
    alignItems: "center",
  },
  expanded: {
    display: "inline-block",
  },
  caption: {
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", Helvetica, Arial, sans-serif`,
    fontSize: 14,
  },
  captionWrapper: {
    display: "flex",
    alignItems: "center",
    wordBreak: "break-all",
  },
  username: {
    fontWeight: 600,
    marginRight: 5,
  },
}));

export const usePostStyles = makeStyles((theme) => ({
  moreIcon: {
    height: 24,
    width: 18,
    justifySelf: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },
  image: {
    width: "100%",
  },
  postButtons: {
    display: "grid",
    gridAutoFlow: "column",
    gridTemplateColumns: "24px 24px 24px minmax(24px, auto)",
    gridGap: 16,
    order: 2,
    padding: "6px 16px 0",
  },
  container: {
    padding: "0px 16px 8px",
  },
  username: {
    fontWeight: 600,
  },
  datePosted: {
    fontSize: 10,
    order: 4,
    padding: "6px 16px",
  },
  comment: {
    order: 5,
  },
  likes: {
    fontWeight: 600,
    order: 3,
    padding: "0 16px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  like: {
    animation: "$like-button-animation 0.45s",
    animationTimingFunction: "ease-in-out",
    transform: "scale(1)",
  },
  liked: {
    animation: "$liked-button-animation 0.45s",
    animationTimingFunction: "ease-in-out",
    transform: "scale(1)",
  },
  "@keyframes like-button-animation": {
    "0%": { transform: "scale(1)" },
    "25%": { transform: "scale(1.2)" },
    "50%": { transform: "scale(0.95)" },
    "100%": { transform: "scale(1)" },
  },
  "@keyframes liked-button-animation": {
    "0%": { transform: "scale(1)" },
    "25%": { transform: "scale(1.2)" },
    "50%": { transform: "scale(0.95)" },
    "100%": { transform: "scale(1)" },
  },
  textField: {
    padding: "10px 0px",
  },
  root: {
    fontSize: 14,
  },
  underline: {
    "&::before": {
      border: "none",
    },
    "&::after": {
      border: "none",
    },
    "&:hover&:before": {
      border: "none",
    },
  },
  commentContainer: {
    display: "grid",
    gridAutoFlow: "column",
    gridTemplateColumns: "auto minmax(auto, 56px)",
    padding: "0px 0px 0px 16px",
  },
  commentButton: {
    width: 48,
    padding: "unset",
  },
  moreButton: {
    color: "#999",
    "&:hover": {
      background: "transparent",
    },
  },
  saveIcon: {
    justifySelf: "right",
  },
  postContainer: {
    background: "#fff",
    width: "100%",
    [theme.breakpoints.only("xs")]: {
      marginTop: "-35px !important",
    },
  },
  article: {
    display: "flex",
    border: "1px solid rgba(var(--b6a,219,219,219),1)",
    borderBottomRightRadius: "3px",
    borderTopRightRadius: "3px",
    position: "relative",
    flexDirection: "column",
    width: "100%",
  },
  postHeader: {
    borderLeft: "1px solid rgba(var(--ce3,239,239,239),1)",
    borderBottom: "1px solid rgba(var(--ce3,239,239,239),1)",
    height: "72px",
    padding: "16px",
    right: "0",
    width: "335px",
    display: "flex",
    top: 0,
    position: "absolute",
    marginRight: 0,
    alignItems: "center",
    [theme.breakpoints.only("xs")]: {
      width: "100% !important",
      position: "relative !important",
    },
  },
  postImage: {
    display: "flex",
    width: "calc(100% - 335px)",
    [theme.breakpoints.only("xs")]: {
      width: "initial !important",
      position: "relative !important",
      margin: "0 auto",
      textAlign: "center",
      "& img": {
        maxHeight: "200px !important",
        maxWidth: "200px !important",
        objectFit: "contain !important",
      },
    },
  },
  postButtonsWrapper: {
    borderLeft: "1px solid rgba(var(--ce3,239,239,239),1)",
    bottom: "0",
    boxSizing: "border-box",
    position: "absolute",
    flexDirection: "column",
    display: "flex",
    right: "0",
    top: "72px",
    width: "335px",
    [theme.breakpoints.only("xs")]: {
      width: "100% !important",
      position: "relative !important",
      top: "0px !important",
    },
  },
  postCaptionContainer: {
    display: "flex",
    margin: "0 0 auto",
    order: 1,
    overflowX: "hidden",
    flexGrow: 1,
    overflow: "hidden",
    [theme.breakpoints.only("xs")]: {
      display: "none !important",
    },
  },
  postCaption: {
    overflowY: "scroll",
    paddingLeft: "24px",
    paddingRight: "24px",
    paddingTop: "5px",
  },
}));

/* LoadingScreen component: /components/shared/LoadingScreen.js */
export const useLoadingScreenStyles = makeStyles({
  section: {
    height: "100%",
    position: "absolute",
    width: "100%",
    top: 0,
    zIndex: 9999,
    background: "#fafafa",
    display: "grid",
    placeItems: "center",
  },
});

/* UserCard component: /components/shared/UserCard.js */
export const useUserCardStyles = makeStyles({
  avatar: {
    width: ({ avatarSize = 44 }) => avatarSize,
    height: ({ avatarSize = 44 }) => avatarSize,
  },
  typography: {
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  wrapper: {
    display: "grid",
    gridAutoFlow: "column",
    gridTemplateColumns: "min-content auto",
    gridGap: 12,
    alignItems: "center",
    width: "100%",
  },
  nameWrapper: {
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
});

/* Suggestions: /components/feed/FeedSideSuggestions.js */
export const useFeedSideSuggestionsStyles = makeStyles((theme) => ({
  article: {
    margin: "12px 0",
    gridTemplateColumns: "minmax(auto, 600px)",
    justifyContent: "center",
  },
  card: {
    display: "grid",
    gridAutoFlow: "column",
    gridTemplateColumns: "minmax(auto, 500px)",
    gridGap: 10,
    alignItems: "center",
    padding: "8px 16px",
  },
  typography: {
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  paper: {
    padding: "8px 0",
  },
}));

// OptionsDialog component: /components/shared/OptionsDialog.js
export const useOptionsDialogStyles = makeStyles((theme) => ({
  dialogScrollPaper: {
    display: "grid !important",
    gridTemplateColumns: "minmax(auto, 496px) !important",
  },
  button: {
    padding: "12px 8px",
  },
  redButton: {
    color: theme.palette.error.main,
    padding: "12px 8px",
    fontWeight: "bold",
  },
}));

// ProfilePicture component: /components/shared/ProfilePicture.js
export const useProfilePictureStyles = makeStyles({
  person: {
    color: "#ffffff !important",
    height: ({ size = 150 }) => size,
    width: ({ size = 150 }) => size,
  },
  wrapper: {
    background: "#DBDBDB",
    width: ({ size = 150 }) => size,
    height: ({ size = 150 }) => size,
    borderRadius: "50%",
    display: "grid",
    position: "relative !important",
    marginTop: "20px",
    placeItems: "center !important",
    "&:hover": {
      cursor: ({ isOwner }) => (isOwner ? "pointer" : "default"),
    },
  },
  section: {
    display: "grid",
    justifyContent: "center",
  },
  image: {
    height: ({ size = 150 }) => size,
    width: ({ size = 150 }) => size,
    borderRadius: "50%",
  },
});
// EditProfilePage: /pages/edit-profile.js
const sectionItem = {
  display: "grid",
  gridAutoFlow: "column",
  gridGap: 30,
  placeItems: "start end",
  marginBottom: 16,
  gridTemplateColumns: "minmax(auto, 150px) minmax(auto, 340px)",
};
const typography = {
  fontWeight: 600,
};
const justifySelfStart = {
  justifySelf: "start",
};
const form = {
  display: "grid",
};

export const useEditProfilePageStyles = makeStyles(theme => ({
  section: {
    display: "grid",
    gridAutoFlow: "column",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "minmax(48px, max-content) 0px auto"
    },
    [theme.breakpoints.up("sm")]: {
      gridTemplateColumns: "minmax(220px, max-content) auto"
    },
    border: "1px solid #dbdbdb"
  },
  permanentDrawerPaper: {
    borderRight: "1px solid #dbdbdb !important",
    left: "unset !important",
    top: "unset !important",
    position: "relative !important"
  },
  permanentDrawerRoot: {
    height: "100% !important",
    "& div": {
      zIndex: "unset !important"
    }
  },
  temporaryDrawer: {
    "& div": {
      width: "220px !important"
    }
  },
  listItemSelected: {
    borderLeft: "2px solid black",
    "& span": {
      fontWeight: "600 !important"
    }
  },
  listItemButton: {
    paddingTop: "10px !important",
    paddingBottom: "10px !important"
  },
  menuButton: {
    [theme.breakpoints.up("sm")]: {
      display: "none !important"
    },
    marginLeft: "unset !important",
    "&:hover": {
      background: "none !important"
    }
  },
  container: {
    background: "#ffffff",
    display: "grid",
    justifyContent: "start",
    padding: "30px !important"
  },
  sectionItem: {
    ...sectionItem,
    [theme.breakpoints.down("xs")]: {
      display: "block"
    }
  },
  form,
  typography,
  justifySelfStart,
  sectionItemWrapper: {
    ...sectionItem,
    [theme.breakpoints.down("xs")]: {
      display: "unset"
    }
  },
  textFieldInput: {
    padding: "10px !important"
  },
  textField: {
    alignSelf: "center"
  },
  pictureSectionItem: {
    ...sectionItem,
    placeItems: "center end",
    [theme.breakpoints.down("xs")]: {
      gridGap: 20,
      gridTemplateColumns: "minmax(auto, 38px) minmax(auto, 340px)"
    }
  },
  typographyChangePic: {
    "&:hover": {
      cursor: "pointer"
    }
  }
}));

export const useFeedPostSkeletonStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    position: "relative",
    width: "100%",
    borderRadius: "3px",
    border: "1px solid rgba(var(--b6a,219,219,219),1)",
    backgroundColor: "rgba(var(--cdc,255,255,255),1)",
    marginLeft: "-1px",
    marginRight: "-1px",
  },
  headerSkeleton: {
    display: "flex",
    flexDirection: "row",
    height: "60px",
    padding: "16px",
    alignItems: "center",
  },
  avatarSkeleton: {
    backgroundColor: "rgba(var(--c90,239,239,239),1)",
    borderRadius: "50%",
    flexGrow: "0",
    height: "30px",
    marginRight: "12px",
    width: "30px",
  },
  headerTextSkeleton: {
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
    justifyContent: "center",
  },
  primaryTextSkeleton: {
    flexGrow: "0",
    height: "10px",
    marginBottom: "4px",
    width: "140px",
    backgroundColor: "rgba(var(--c90,239,239,239),1)",
  },
  secondaryTextSkeleton: {
    backgroundColor: "rgba(var(--c90,239,239,239),1)",
    flexGrow: "0",
    height: "10px",
    width: "100px",
  },
  mediaSkeleton: {
    backgroundColor: "rgba(var(--c90,239,239,239),1)",
    backgroundImage:
      "url(data:image/gif;base64,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)",
    backgroundSize: "cover",
    display: "block",
    "&:before": {
      display: "block",
      content: '""',
      paddingBottom: "100%",
      width: "100%",
    },
  },
});

// PostSkeleton component: /components/post/PostSkeleton.js
export const usePostSkeletonStyles = makeStyles((theme) => ({
  container: {
    overflow: "hidden",
    position: "relative",
    borderRadius: "3px",
    border: "1px solid rgba(var(--b6a,219,219,219),1)",
    backgroundColor: "rgba(var(--cdc,255,255,255),1)",
    marginLeft: "-1px",
    marginRight: "-1px",
    display: "grid",
    width: "100%",
    gridTemplateColumns: "calc(100vw - 335px) 335px",
    [theme.breakpoints.only("xs")]: {
      marginTop: "-35px",
      gridTemplateColumns: "100vw",
      height: "350px",
    },
  },
  headerSkeleton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 72,
    padding: 16,
    borderBottom: "1px solid rgb(239,239,239)",
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      position: "relative",
    },
  },
  avatarSkeleton: {
    backgroundColor: "rgba(var(--c90,239,239,239),1)",
    borderRadius: "50%",
    flexGrow: "0",
    height: "30px",
    marginRight: "12px",
    width: "30px",
  },
  headerTextSkeleton: {
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
    justifyContent: "center",
    height: 72,
    padding: 16,
  },
  primaryTextSkeleton: {
    flexGrow: "0",
    height: "10px",
    marginBottom: "4px",
    width: "140px",
    backgroundColor: "rgba(var(--c90,239,239,239),1)",
  },
  secondaryTextSkeleton: {
    backgroundColor: "rgba(var(--c90,239,239,239),1)",
    flexGrow: "0",
    height: "10px",
    width: "100px",
  },
  mediaSkeleton: {
    [theme.breakpoints.only("xs")]: {
      gridRow: 2,
    },
    backgroundColor: "rgba(var(--c90,239,239,239),1)",
    backgroundImage:
      "url(data:image/gif;base64,R0lGODlhIAAgALMPAPj4+Pf39/X19fT09Pb29vPz8/39/fLy8vn5+fr6+vHx8fv7+/Dw8Pz8/O/v7+/v7yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAPACwAAAAAIAAgAAAEItDJSau9OOvNu/9gKI5kaZ5oqq5s675wLM90bd94ru+8HAEAIfkEBQIADwAsAAAAAAEAAgAABAOQsQgAIfkEBQIADwAsAAAAAAMABwAABAuwKHYYmw+z93bnEQAh+QQFAgAPACwAAAAABQANAAAEHFCMo5goh7FR6psexjxPNz7UmZGPR7rPScox+0QAIfkEBQIADwAsAAAAAAcAEgAABC0QBDKOYoCIchimxfUEQiWSHPM8oPiUlvqG8mPW9/rQ+hP3P51LWFsVjT1kMgIAIfkEBQIADwAsAAAAAAgAFQAABDswoUDGUQwBIsphGTUUmDMJVrl1n+OIJOMG6CU7Vezi6e2wJVcn6OrtHB4iUumwHZu+HdMxje6sLqwjAgAh+QQFAgAPACwAAAAACgAbAAAEV7CthAIZRzGJABHFwTBTdRXaMwGBgKVL94XM81DWgNY362Y8mS5lq/yID18I6RnybK3X89FaTk9I23H6AIls4IczbJOSH7QzOgsGqr9qNlhu44btYLwtAgAh+QQFAgAPACwAAAAADAAgAAAEdtCYthIKZBzFJkUAIRQH01EWNhTcM1VAIGgtCook8zy2yuo8mIwGbFhCq9aucpltgI8FSEZSRi+Z326XiDmtjy7uuX1gk9Bdk1h+hEaltjsL3lHJ7WxcnsG34XU7I4E7bHIPhnJahw9+cnuMhFuSO2mHlnKYbREAIfkEBQIADwAsAAAAAA4AIAAABIqwNWPaSiiQcRSTlYUAhFAczEdZmDYUnjNJFxAIXLxeY3kyDseutYEBhbSEDdc5VnikVyz4bDGnyMXodsKyMkWsrHbLHYMikqkZDPJcxrZbWWbLteqfPEiUntt0a2JBPS8oe4QudntLXX9tUXGIDnWDbVyLe2GPclecbWufbX6To5mIeqVBkqqniBEAIfkEBQIADwAsAAAAABAAIAAABKAQrdaMaSuhQMZRTDJV1IIAhFAcTDhZmMYNBeiMVwwEgmfjsVNqxXA4KLDMplMrHkk6ns+JDKJoNiNUKf04HTDMibfKgi9cphlcSux6XqMxZ0Kp4nK0TP2dR+FrTxp2RHJyQTNNhloZb2V9WoNMLItGaVOVN2N3gZZLWJBybl2dRm5DeJWfipkOG4ChcoSUrQ5XrK2ksXKou7yYtQ6cvkYRACH5BAUCAA8ALAAAAAASACAAAAS0kIC0WjOmrYQCGYfCBFP1ZBoCEEJxMAyAUFe2dV8hPrKJboCAALSb+TScVev1eBhrSNxAx2jSThagkFh9XG3J3K65WGCj21D3cUwFl2M29OaZxh+Ns3aobjbzPyosLndzHHVUfn4/CW9ciicoYUtri2BSiZCMb4SVTZcrU0yQWHQffaQ2KkKdpHimdp5+SI6opG6DtpANh2KyfnuPrmyClMNWmHekjWnKkMUuv4pSuq6c1aQRACH5BAUCAA8ALAAAAAAUACAAAATKcAgC0mrNmLYSCsRwKIwUVFeGLQhACMXBlESAWNnWfWFBOhMAIrXhJAABgehXQ2F0HhdM5nBQbheNkTfwMaqn4XN1TC6/DhtOtXN1f1Uhrrgzj9AOp4rTSsbgDlg5WyBveIFEZEhKd1VVa3QtL3+Hc1BcXo5ViUaLZ5oOnFGTVKBPl4WZpnsdi5SgDmNtPaWmWnUhjbBafK66oLceqYDAinbEmpFSr7AOqD3IyZ3Hh6ssy7XNhNDVpq3UzY4No1PdoLif4Zt9U9GgEQAh+QQFAgAPACwAAAAAFgAgAAAE5VCdIghIqzVj2kpIQAyHwkiDEFzZpi0IQAjFwZzFQAQItnWf0KhgckwqAESr40kAAgJSMadiaYAgGc3mcOQsvQynKRwQGd0UePlyQqVoR4rncwVl5mIXGXaR3yVxDlV1TDBPW3oOO31jQSJ5gg4rSldtiHBdXSuFLzEzNYoOST6OIJBnml1JbE2YgaoOfX5ZoFyxjVhlqbGdrlChkl2dd0O3sQtiupCwsQ6th8DNyD9/Q6Kqlr9R07Hah7bYmtWP18LZhm7c4ppjHp9b56qmu+ztl4D2XbpaNfLz1jI5Axgt0T9NEQAAIfkEBQIADwAsAAAAABcAIAAABPOQqVMEAWm99kxbCRIQw6Ew0jEIAaY1xrYgACEUx4MqxUAEiAzHAxKRCqfHpHJBvGKfBCAgKCUnq1ZmQwzVbgfG40HxAYKLYdQ4QIrJzPNTJqVa3z0WmruutZNjcWgwdCJVJm8PWS5cMjRUOICKP4MdayN/iQ8Wco1RU4eSm1pzHzQ2kZqUQpZFmG5jsS1OniCgd7FjpJ5eqGG5Y2esXWywwJ2En5CIwA97MH1Hv82VxJjMzVvJM6CpzQ/Dl0eiuaW2dtjN5qdg5LFprSGv7rnbdaGawA3b7Dj5+vGK0csF5Ry+bwSjgfn3TRwuhPW4LRsYKwIAIfkEBQIADwAsAAAAABkAIAAABP/QSXWKICCt1oxpS4IExHAojMRQgxBkW8ctCEAIxcGkzloMhABC0/mERqUCSkWxYBCxDygBCAhMyx7LBeMYRTacTqL9PYmeKXKg5K0qFwDUO6Nase6tkCg72thZPXBnG1JHdyc8Dk1cfIY1VjmBCmZ7hV9rbWQOg3JRdVVXiZsHLS+OMzU3kooOlUOXaiSAra5xczJToXibDqZduWCrY70XlkWySYFkt5+6kaO9QbB0fknE0nJomLPRvafONKGsvRLasYfKtWTadM+iy5vUueLD8WTUaem05WSo77z6OfhXT8y6TQvQiZilSaCDcHbgHSTzyZpBhxLc7fMmUCMkMfcDekUAACH5BAUCAA8ALAAAAAAbACAAAAT/0EmpThEEpNWaMc2SIAExHAozOUw1CIHGed2CAIRQHIw6tYUBIYDYeEAikqmQWrUsGABiBgolAAHBqflzwWQd5Ain461YimCmyPlYlQOmT/K8rKm1a3Y7Rx9eREY0SThxXD9Qa0ZVSXsofXVfgow3WTuHaGqBbWJwck4MiVJ4Vlhaj05eMZM1NzmXkGlCm0dvJYZ9DhV2o2F5pnxnqmA0DWOvZmcWs2y1jUuYEqJTvqWWqGdBMM2Dx3HJ2UJSi5232GeAxJSmsGcSzOS20LkTUUXVIsDnZ5KkNmTt3DkY0szNM1wCJcSgViyfo2grVvlzVYbeinGc5CFM6KBXQz2nFiCu4NYJILiEBfPA2SeQVYhKZUSuiAAAIfkEBQIADwAsAAAAAB0AIAAABP/QyenUKYKAtFozRrMkSEAMh8JQEmMNQrB1n7cgACEUB7OyrsKAEEBwPqFR6VRQsRyuSwaAoIVECUBAgHICX7GZJ0nK7XpPqEKoMXZA2OWg+aNEMW2rLbvt1idRMEVHNUo5c15AUm1HV0p9KX8tFhgyhI44WzyJgGtDg29kcnRpDItUelhaXJFPgWGXNjg6m5JqbKBIcSaItndTVWN7q36uYJapZbRoxrhuuo9MnJOnwTWqmq1fB4LPhcpzzIpsVI2ivNoslLCpN6u1aZ5Ez3DRvWkO1QnC2KzTE9zY8XO37J8EZ+Z2SbM1AQ+qgXz8MZQgSMw1gmcmSsiQqx4JXqQe8DkA1i5iMZHzYhlaplECozd75KTDh2xgpjMGKUQAACH5BAUCAA8ALAAAAAAfACAAAAT/0Mk51SmCgLRaM0azJEhADIfCUBRjDUKwdZ+3IAAhFAezshJXYUAIIDif0Kh0KqiAQQtGg6CFRAlAQIB6Ql0HmAxZW+Z2PWh0SEWCsMyB8wcETwFVz3Wk5aboLGBiR1ZwOXJeXxcZeG42JFtdgC1SMTN6NjhbPImBCmxGbkqQTZ2Bi1SFWH2SaoKWZHs4OpyTE0JEoR1vSyaItlGoeKp8kX+uL7CqJGc8wGu5hElwvnPIwnk1q5vHX8m6mGZNaa4XRI27o3HddZVjxJpopref0aLUpc8+2AmY237zgom5pO1GM3aeQEnjReqXGgeVUvkrBvAZxDDKJs5CYxGiwnu9I/I9dICNWBZjAScMiSGtDDNa5B6yQVewIUIoA2Nl6lNrpIMIACH5BAUCAA8ALAAAAAAgACAAAAT/0MlJ1SmCgLRaM0azJEhADIfCUCxjDUKwdZ+3IAAhFAezshNXYUAIIDif0Kh0KqiAQQtGg6CFRAlAQIB6Qh2uA0yGrC1zu95XIiQCjh0Qljlw/qDh6dtqy267d0BhY3AeSiQ5dV5fDBcZb0hXS38pgS1SMTOGNjhbPIuCCkNFhXKTTaCCjlR8WFpclWuDmWWSODqflhRtpJGHdHaymKybrpSpuy+0rYi4asKjRr5zJoq6Uat7xSOvucJiMYVmzXXPjBdupb/VsYyYZK033e14okTSceuo10HZR9t+YCHDNkZTDRG30gxkY69XPmr7ZDXSUwXgK0DfCtbihIYHP4bRJtRBtLbGwTBtB7kd+2gSHL5NZ5yxdICOSqQ+dOh9cQRvWyeFMyMAACH5BAUCAA8ALAAAAAAgACAAAAT/0MlJpTpFEJBWa4bRLAkSEENRrcw1CAHngd+CAIRQHGvVFgNCANEBiUgmVEHRm7QwGgBiJholAAHB4MBsOp6vWJGGxOkODO9XAdwQPSFrMqVIN58ZN7V2zW7rXmAwbx9HJTh0dndQbkVVSH5ciiwXGWJ7IzdZO4B3bEFDjoZzS5MsjFKYJFhakoEuMDKFNTc5nKYUP6CEcZBKnT14UVOzVqx/uE6wl8WHtmhqukK8oyeJr6jENMabrp4HYYRkzinQgRhBUqJy1t7BlbFjj5pnwJRtoXDVv8lO2QnFVkWy52OZrG02zNx6hY8aO37Rsqnq04pgLoPyaCk056nhOl/XH77lSRWQIjJs4TKWedZPgjR1cPjMcUcJCjOE9BY2iQAAIfkEBQIADwAsAAAAACAAIAAABP/QyUmpOkUQkFZrhtEsCRIIVSox1yAEnAd+CwIQqFqxxUAEiA5IRDIRBjoKC6MBIGSiUQJwQiZXrVfsQyzdBIUrtrcJekJS4yB8XWbKUNq0ehAvXUDhrHhb19tMZUJRRXQKbRcZMHqENicFB4dJPD55Z11qBQoMgG9OcVJUAgORnDp3Wow0NjiQm5MKZJZDaQFHmqYqbk1PXHKipK+nWYugXq0HubqxlWa0hbfCy4GfvqGPpbAHeM57x37KKQwYPk6DmLbB4UqJqaA1oq7rE5Q/zmjQa9K61EHWJMCyDdvm7h8rMAKXybqHLto8ev3ezRmVUByxLTNGHIT0cEyzc7UgHGrz1CsjQEMdUc3ytjEZIjLmzshRU3FHu2IG49WUEAEAIfkEBQIADwAsAgAAAB4AIAAABP/QyUmpOkUQkFZrhtEsCVCdEnMNQsB54LcgJlqpxUAESAeKJJqNosJoAAiYaFQKDCdFlssXCwKcTwdOh/SFmIgAIVvMbJKfJekqIK9aPSUYQGg/GcazV5YICwZ3FxlTciM0AX+BOTtxP2BiAwV3eUiFa4gDB0NRLS9pMjR1BZo2W4xeQH2QBQqlgkdoMUxsma0onISfDX10AqMMros8qI8EkQrAJ2Wwlk2+B8i3b8NyVsa/pRhcjV9BkNDJN6+5sjNso9HKCsLcqWHX6cqUPbqXf+DSB1Ke5aHP8UTW6aDmyBu8cDfmNaOFT52+TlTU+MMmjR0xg8cQQnl1ZiGmhuIaHhKswkvUAY0bF3XxoEaVMZABjZCTeA6mgwgAIfkEBQIADwAsBAAAABwAIAAABP/QyUmpOkUQkFZrhtEsVSkx1yAEnAd+pFmhxUAESAeKSyJTKIwGgHCJRr7fKbVqfXgJhHJZ2+Q8IaRUGcxYjbAEYBpU4XSvHmLMFVp1R3WAe8mw0PH1/EeznbFQCAEEbV5EYEgAg3xMd4gLawQCjFV/O1qDAzJdQ0VPYYoCmiZlTXgfUQCSBZsKlVeXcgQDrCWcX5+JAQIFB6SNsGmps72kGDZEcIGZBwq2daaPerzNz6/KmMQKDLZuybk9oQPN3ECNTi8jkdTbM65+sFmytO0z3p7p4bvj9ROljuDW9Spn7hqgbPQILrn3SMw+cu4OmAkWSBU1hVSQxQsjaBZEc0IHAOab1qtfBAAh+QQFAgAPACwGAAAAGgAgAAAE+tDJSak6RRCQVmuGUY0Scw1CwHlgQ45mMRAB0oGG+04mpgEIVk63c/RQqluLuIvNgLdQY1E0XjKb4GdILR5TNuG02/Rlo59FwntNrbbpdVMho4Vx0wTCawaK83svX0l/CwgAc3U1UTlqh4JtWYUJAAGQB0hvS3qVkIp3Uo4BBCQ9WH5weZUCpSdgSo2cBKwwGE+gsQijAzBthKmGq7wVTnaMgLsFtac2wJQBAgMHxK6/S8GzBdMUxYseoXrJCsR9WtfP0QfjPNWaXIfZ6tx0M954ogQDBQoM7OWTwtT1K1HtTgtHAOINJFgHyrc4uvIJ9JfB2rtV2vg5iAAAIfkEBQIADwAsCAAAABgAIAAABPDQyUmnOkUQkFZrRiU6zDUIAeeBY1UWAxEgHRi2UolpALIaN5zulKqBGricAraheYBI4SXT/H2SQ5TzY7gKd81at7GQ7opWspQ5E3cX5RYD3EsvEnITSsX93PNsW1B3CCM6VHV9ZAmFIlloiowAhksxbU9vko5TPD6KdwABmwdEW0eEAASOGDE9bosIAaoUh3tGYwsIoQIulTKCmbEEvLR0NJ8JuwO0epBHZLrDyxMvlsCwsgMFxYiez6ABAgMH1M1839ECBeRKga+E2QUKSsZ2yeHj8yTNpsGp6gcYtGslyA+jbAcUCKzlDJeucOsURgAAIfkEBQIADwAsCQAAABcAIAAABNfQyUmpOkUQkFaroMRcgxBwXgiOxUAESPep04hpAOLNtGOXJ5mhJ1K0NjHPsGfLIHdL2s+UbDSiKsYNKcSuLpkg1FthuWBdXkjrzEGtUpIJZTXAs8Zz1WBf4LdudVZ+a3Jigg2EX0doSn0JhYA6iAuQXwdAVVeJCQhrGC45aZWeZWBzMpuJCACLeqOdrWWSCZQJAAGmmKhvq7imjHuPCAEEs22TqpW4AhRTh8qsBM01eS/CnMQEA9WSvcsBAtxFu42CpADTBdVHokqDncUD6z6n0Ha+4QUHEQAh+QQFAgAPACwLAAAAFQAgAAAEwdDJSak6RRCAqpfMNQgBkHxeWAxEgJzoFGIat8SySJo37qgsTqLhm2U2iAURNxu5EsoiDQldooy7qoGpWLVeym2MMbU1GuJPM6tEj7usZzhdwSLbBjplXaqirXVwX1oGgDllSWeFhiA6copnahhBYGiFPXsXGX14Z5g5Xo95DQufIIhDf6Qwh048kKuBoZWjCwkde4idq7iNB65+iwsIAJmzhLzFvkdmqrYAAa0klX+2xASglFqetwHYP5pssMPQAhEAIfkEBQIADwAsDQAAABMAIAAABKnQyUmpOkWQyiW7gxB03FcMBEBSH6apqweKSCyfaR23WZrYrVAA8du5covdJRMAJJIrE2r4NPYAiEUjOms+tyQpgaoNL1/ZhsF8EDq1646YrJafkY16qUvU6isMGChYXwZxLGdefoZ7OHSGYCxHhHkGeYBdb5WXiI59apaRHpNpanlQMm0imqYNqA5zn5ALRbB3WIuntUE0X6a0OrY4hHC6OjyrvqELCAARACH5BAUCAA8ALA8AAAARACAAAASS0MlJqTqjaslu3lVXfCB3FUI5dRihmqOrsmjwsoNgzwdKALOTDlgSDQgBBM8HUIJww0RREUtKNzTBD7F4eqJdLPVobYh72ubCrIFa19jesZmAh4QBQL1haI+RCHt9IWhbCQ18dxhgiIMrf298jhyFao2TbnprfGwwZIFrBgadWVubo6RfkZypMXShiGFZeXusCxEAIfkEBQIADwAsEQAAAA8AIAAABIDQyUmpqliym+vu1HaA01aQmnKS4oC271EIrCLToDkQ7B3ktoHg19ERAEXb7Jg8CAOIZGEHzYiWgIQ1OERoMQzZDoBYgJXDrNmjonrXodvR22A704lFPdQmQPN7JXJkeoEOLXh6BnxTfm8NiymDZQ2QJVx/hZGHfWSABpFXiZWgEQAh+QQFAgAPACwTAAAADQAgAAAEc9DJSSWr2N1MN9fKZ4Uic5TK+TFKUR4uxx7D2tYyLMjpsGeswoAATBUEgSINWRQSAJjZ8RntIRFR2BCA7RiRgEQlOAwgxB3dE7HwLgPh9oRMMCfkFjV30Zhb4Xd9I052fCN6bA0Ghz6FioNbZ3yLUmCBihEAIfkEBQIADwAsFAAAAAwAIAAABFvQyUmrvTjrzSvbnxZijCKaGXOkykoqxXvEV3kMbyHUrc7fhNpsEPT0BAFLqUAEKGcCgpNiGyARRiYhgKVCpQlqyxoAhCdLIneBPkoRbEn1mog70u9EQ34s1xsRACH5BAUCAA8ALBYABgAKABoAAAQ/0MlJq704a8pyx5/FKCB5MceppKJSnMdbjcfQFvYcC/M68BzXgKArCALB2jGIIwAmNKMT6jsiqE3A1RE9AhIRACH5BAUCAA8ALBgACwAIABUAAAQp0MlJq704a3a59RSjfGPFHKaChkphHu4kHgNbCLJ65zSRFwOfY3YLRAAAIfkEBQIADwAsGgARAAYADwAABBjQyUmrvZdVTflUHTgxokMeo1Kkq6kcQwQAIfkEBQIADwAsHAAWAAQACgAABArQyUmrtWxmuZmKACH5BAVPAA8ALB4AHAACAAQAAAQE0MkpIwA7)",
    backgroundSize: "cover",
    display: "block",
    maxWidth: 600,
    "&:before": {
      display: "block",
      content: '""',
      paddingBottom: "100%",
      width: "100%",
    },
  },
}));

export const useNotificationListStyles = makeStyles((theme) => ({
  listContainer: {
    background: "rgba(var(--cdc,255,255,255),1)",
    borderRadius: "3px",
    border: "solid 1px rgba(var(--f23,255,255,255),1)",
    boxShadow: "0 0 5px rgba(var(--jb7,0,0,0),.0975)",
    maxHeight: "362px !important",
    minHeight: "100px !important",
    overflowX: "hidden",
    overflowY: "auto",
    padding: "0",
    position: "absolute",
    top: "54px !important",
    whiteSpace: "normal",
    maxWidth: "500px !important",
    width: "500px !important",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      right: 0,
    },
  },
  listItem: {
    background: "#fafafa",
    borderBottom: "solid 1px rgba(var(--b38,219,219,219),1)",
    "&:hover": {
      background: "rgba(var(--b3f,250,250,250),1)",
    },
    color: "black !important",
    width: "100% !important",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    minHeight: "40px !important",
    padding: "6px 8px 7px",
    position: "relative",
    justifyContent: "space-between",
  },
  listItemWrapper: {
    display: "flex",
    alignItems: "center",
    height: "50px",
    padding: "8px 16px",
  },
  avatarWrapper: {
    margin: "0 10px 0 0",
  },
  nameWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  typography: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "140px !important",
    },
  },
}));

// Profile page: /pages/profile.js
export const useProfilePageStyles = makeStyles((theme) => {
  const followingSectionLarge = {
    display: "grid",
    gridAutoFlow: "column",
    gridGap: 40,
    gridTemplateColumns:
      "minmax(auto, max-content) minmax(auto, max-content) minmax(auto, max-content)",
  };
  const followingTextLarge = {
    display: "grid",
    gridGap: 5,
    gridAutoFlow: "column",
    gridTemplateColumns: "minmax(auto, max-content) minmax(auto, max-content)",
  };
  return {
    container: {
      maxWidth: 935,
    },
    followingSection: {
      [theme.breakpoints.up("sm")]: {
        ...followingSectionLarge,
      },
      [theme.breakpoints.down("xs")]: {
        display: "grid",
        gridAutoFlow: "column",
        padding: "10px 0",
      },
    },
    followingText: {
      [theme.breakpoints.up("sm")]: {
        ...followingTextLarge,
      },
      [theme.breakpoints.down("xs")]: {
        display: "grid",
        justifyItems: "center",
        "& p": {
          fontSize: "0.9rem",
        },
      },
    },
    followingCount: {
      fontWeight: "600 !important",
    },
    cardLarge: {
      background: "transparent !important",
      border: "unset !important",
      display: "grid !important",
      gridAutoFlow: "column !important",
      gridTemplateColumns: "minmax(auto, 290px) minmax(auto, 645px)",
    },
    cardContentLarge: {
      display: "grid",
      gridGap: 20,
    },
    cardSmall: {
      background: "transparent !important",
      border: "unset !important",
      [theme.breakpoints.down("xs")]: {
        width: "100vw",
      },
    },
    sectionSmall: {
      display: "grid",
      gridAutoFlow: "column",
      marginBottom: 16,
      gridTemplateColumns: "77px auto",
      gridGap: 20,
    },
    typography: {
      fontWeight: "600 !important",
    },
    section: {
      "& p": {
        [theme.breakpoints.down("xs")]: {
          fontSize: "0.9rem",
        },
      },
    },
    usernameSection: {
      display: "grid",
      gridGap: 10,
      gridAutoFlow: "column",
      gridTemplateColumns: "minmax(auto, max-content) minmax(auto, 112px) 30px",
      alignItems: "center",
    },
    username: {
      fontSize: "28px !important",
      fontWeight: "300 !important",
    },
    button: {
      lineHeight: "unset !important",
      height: "30px !important",
    },
    settings: {
      height: 30,
      width: 30,
    },
    settingsWrapper: {
      "&:hover": {
        cursor: "pointer",
      },
    },
    usernameDivSmall: {
      display: "grid",
      // gridGap: 20,
      gridAutoFlow: "column",
      // gridTemplateColumns: "minmax(auto, max-content) minmax(auto, 112px) 30px",
      alignItems: "center",
      gridTemplateColumns: "minmax(auto, max-content) 30px",
      gridGap: 10,
    },
    dialogScrollPaper: {
      display: "grid !important",
      gridTemplateColumns: "minmax(auto, 480px) !important",
    },
    dialogPaper: {
      borderRadius: 12,
    },
    dialogTitle: {
      textAlign: "center",
    },
    wrapper: {
      display: "grid",
      justifyContent: "center",
      padding: "32px 16px 16px",
    },
    avatar: {
      width: 90,
      height: 90,
    },
    unfollowDialogScrollPaper: {
      display: "grid",
      gridTemplateColumns: "minmax(auto, 496px)",
    },
    cancelButton: {
      padding: "12px 8px !important",
    },
    unfollowButton: {
      color: `${theme.palette.error.main} !important`,
      padding: "12px 8px !important",
    },
    unfollowDialogText: {
      padding: "16px 16px 32px !important",
    },
    arrowIcon: {
      backgroundImage: `url(${IconSheet})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "-187px -306px",
      height: "6px",
      width: "9px",
    },
    buttonSmall: {
      width: "30px",
      height: "30px",
      minWidth: "30px",
    },
    buttonSelected: {
      width: "30px !important",
      height: "30px !important",
      minWidth: "30px !important",
      opacity: "0.7 !important",
    },
  };
});

const commonIconProps = {
  backgroundImage: `url(${IconSheet2})`,
  backgroundRepeat: "no-repeat",
  height: 12,
};

export const useProfileTabsStyles = makeStyles((theme) => {
  const postsIconSmallGrey = {
    ...commonIconProps,
    backgroundImage: `url(${IconSheet})`,
    backgroundPosition: "-331px -199px",
    backgroundSize: "355px 344px",
    height: 24,
    width: 24,
  };
  const savedIconSmallGrey = {
    ...commonIconProps,
    backgroundImage: `url(${IconSheet})`,
    backgroundPosition: "-50px -320px",
    backgroundSize: "355px 344px",
    height: 24,
    width: 24,
  };
  return {
    tabs: {
      borderBottom: "1px solid rgba(var(--b38,219,219,219),1)",
    },
    section: {
      [theme.breakpoints.up("sm")]: {
        marginTop: 24,
      },
    },
    tabsIndicator: {
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
      top: 0,
      backgroundColor: "#000000 !important",
    },
    tabRoot: {
      margin: "0px 20px",
      opacity: 0.5,
    },
    tabLabelIcon: {
      minHeight: "unset !important",
    },
    tabWrapper: {
      flexDirection: "row !important",
    },
    postsIconLarge: {
      ...commonIconProps,
      backgroundPosition: "-189px -366px",
      backgroundSize: "410px 396px",
      width: 12,
    },
    likeIcon: {
      width: 12,
    },

    savedIconLarge: {
      ...commonIconProps,
      backgroundSize: "410px 396px",
      backgroundPosition: "-401px 0",
      width: 10,
    },
    postsIconSmall: postsIconSmallGrey,
    postsIconSmallBlue: {
      ...postsIconSmallGrey,
      backgroundPosition: "-331px -174px",
    },
    savedIconSmall: savedIconSmallGrey,
    savedIconSmallBlue: {
      ...savedIconSmallGrey,
      backgroundPosition: "0px -320px",
    },
    savedPostsSection: {
      paddingTop: 60,
      display: "grid",
      justifyContent: "center",
    },
    noContent: {
      display: "grid",
      placeItems: "center",
      gridTemplateColumns: "minmax(auto, 345px)",
      "& *": {
        marginBottom: 16,
      },
    },
    savePhotoIcon: {
      ...commonIconProps,
      height: 62,
      width: 62,
      backgroundSize: "410px 396px",
      backgroundPosition: "-189px -273px",
    },
    image: {
      width: "100%",
      userSelect: "none",
    },
    imageWrapper: {
      position: "relative",
    },
    postMeta: {
      [theme.breakpoints.down("xs")]: {
        gridAutoFlow: "row",
        alignContent: "space-evenly",
      },
      position: "absolute",
      display: "grid",
      placeItems: "center",
      gridAutoFlow: "column",
      width: "100%",
      height: "100%",
      justifyContent: "space-evenly",
      "&:hover": {
        background: "rgba(0,0,0,0.6)",
        cursor: "pointer",
        "& > div": {
          opacity: 1,
        },
      },
    },
    postMetaItems: {
      color: "#ffffff",
      display: "grid",
      gridAutoFlow: "column",
      gridGap: 5,
      placeItems: "center",
      opacity: 0,
    },
    likes: {
      ...commonIconProps,
      backgroundPosition: "-328px -239px",
      backgroundSize: "355px 344px",
      height: 16,
      width: 16,
    },
    comments: {
      ...commonIconProps,
      backgroundPosition: "-327px -203px",
      backgroundSize: "355px 344px",
      height: 16,
      width: 18,
    },
    profilePostsSection: {
      display: "felx",
      justifyContent: "center",
      paddingTop: 60,
    },
    noPicDivAlt: {
      display: "grid",
      placeItems: "center",
      "& div": {
        marginBottom: 16,
      },
    },
    uploadPhotoIcon: {
      ...commonIconProps,
      backgroundSize: "410px 396px",
      backgroundPosition: "0px -273px",
      height: 62,
      width: 62,
    },
    article: {
      display: "grid",
      gridTemplateColumns: "minmax(auto, 935px)",
    },
    postContainer: {
      [theme.breakpoints.down("sm")]: {
        gridGap: 2,
      },
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gridGap: 20,
    },
  };
});

// GridPost component: /components/shared/GridPost.js
export const useGridPostStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
    userSelect: "none",
  },
  gridPostContainer: {
    position: "relative",
  },
  gridPostOverlay: {
    [theme.breakpoints.down("xs")]: {
      gridAutoFlow: "row",
      alignContent: "space-evenly",
    },
    position: "absolute",
    display: "grid",
    placeItems: "center",
    gridAutoFlow: "column",
    width: "100%",
    height: "98.5%",
    justifyContent: "space-evenly",
    "&:hover": {
      borderRadius: 10,
      background: "rgba(0,0,0,0.6)",
      cursor: "pointer",
      "& > div": {
        opacity: 1,
      },
    },
  },
  gridPostInfo: {
    color: "#ffffff",
    display: "grid",
    gridAutoFlow: "column",
    gridGap: 5,
    placeItems: "center",
    opacity: 0,
  },
  likes: {
    ...iconProps,
    backgroundPosition: "-328px -239px",
    backgroundSize: "355px 344px",
    height: 16,
    width: 16,
  },
  comments: {
    ...iconProps,
    backgroundPosition: "-327px -203px",
    backgroundSize: "355px 344px",
    height: 16,
    width: 18,
  },
}));

export const useMorePostsFromUserStyles = makeStyles((theme) => ({
  article: {
    display: "grid",
    gridTemplateColumns: "minmax(auto, 935px)",
    width: "100vw",
  },
  postContainer: {
    [theme.breakpoints.down("sm")]: {
      gridGap: 2,
    },
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: 20,
  },
  typography: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
  container: {
    paddingTop: "6vh",
  },
  link: {
    color: "#262626",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));
