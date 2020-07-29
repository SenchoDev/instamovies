export const limitRecipeTitle = (title, limit = 32) => {
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