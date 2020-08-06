export const limitMovieText = (title, limit = 32) => {
  if(title === undefined) return 'Not Found'
  const newTitle = [];
  if (title.length > limit) {
      title.split(' ').reduce((acc, cur) => {
          if (acc + cur.length <= limit) newTitle.push(cur);
          return acc + cur.length;
      }, 0);
      return `${newTitle.join(' ')} ...`
  }
  return title;
}