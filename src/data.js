import { v4 as uuid } from "uuid";

export const defaultUser = {
  id: uuid(),
  username: "username",
  name: "name",
  profile_image:
    "https://scontent-ort2-2.cdninstagram.com/v/t51.2885-19/s150x150/82559664_3161307737426774_8687807477812559872_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_ohc=llb3VCRb-mkAX_XTEi3&oh=64f0323db646c01299e513e3337b83ff&oe=5E8620BF",
  // profile_image:
  // "https://instagram.com/static/images/anonymousUser.jpg/23e7b3b2a737.jpg"
};

export function getDefaultUser() {
  return {
    id: uuid(),
    username: "username",
    name: "name",
    profile_image:
      "https://scontent-ort2-2.cdninstagram.com/v/t51.2885-19/s150x150/82559664_3161307737426774_8687807477812559872_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_ohc=llb3VCRb-mkAX_XTEi3&oh=64f0323db646c01299e513e3337b83ff&oe=5E8620BF",
  };
}

export const defaultNotifications = [
  {
    id: uuid(),
    type: "follow",
    user: defaultUser,
    created_at: "2020-02-29T03:08:14.522421+00:00",
  },
  {
    id: uuid(),
    type: "follow",
    user: defaultUser,
    created_at: "2020-02-29T03:08:14.522421+00:00",
  },
];

export const defaultCurrentUser = {
  id: uuid(),
  username: "me",
  name: "myself",
  profile_image:
    "https://scontent-ort2-2.cdninstagram.com/v/t51.2885-19/s150x150/82559664_3161307737426774_8687807477812559872_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_ohc=llb3VCRb-mkAX_XTEi3&oh=64f0323db646c01299e513e3337b83ff&oe=5E8620BF",
  website: "https://instagram-senco.herokuapp.com",
  email: "me@gmail.com",
  bio: "This is my bio",
  phone_number: "555-555-5555",
  followers: [defaultUser],
  following: [defaultUser],
};

export function getSmallCard() {
  return {
    id: uuid(),
    title: "Marvel's Agents of S.H.I.E.L.D",
    date: "Sep 24, 2013",
    image: "https://i.ibb.co/j6GS0gV/ImgSmall.png",
  };
}

export function getTrailerCard() {
  return {
    id: uuid(),
    title: "Greyhound",
    image: "https://i.ibb.co/gdYHvx5/Img-Trailer.png",
  };
}

export const actor = {
  id: uuid(),
  image: 'https://i.ibb.co/jH8SF2m/imgActor.png',
  realName: 'Ian De Caestecker',
  name: 'Leo Fitz'
}

export const defaultMovie = {
  id: uuid(),
  title: "Marvel's Agents of S.H.I.E.L.D. (2013)",
  genres: ["Drama", "Sci-Fi & Fantasy", "Action & Adventure"],
  time: "43 min",
  movieImage: "https://i.ibb.co/17nwkLf/imgLarge.png",
  backgroundImage: "https://i.ibb.co/BHpXCkS/movie-Large.png",
  rating: "6.7",
  trailer: "https://youtu.be/-pNgAZVrf40",
  overview: "Agent Phil Coulson of S.H.I.E.L.D. (Strategic Homeland Intervention, Enforcement and Logistics Division) puts together a team of agents to investigate the new, the strange and the unknown around the globe, protecting the ordinary from the extraordinary.",
  directors: ["Joss Whedon", "Jed Whedon", "Mauriss Tahncharoan"],
  seriesCast: [actor]
};
