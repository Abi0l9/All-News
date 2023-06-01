export const sortByPublishedAt = ({ articles }) => {
  if (articles) {
    const sorted = articles.sort((articleA, articleB) => {
      const first = new Date(articleA.publishedAt);
      const second = new Date(articleB.publishedAt);

      return second - first;
    });
    return sorted;
  }
};

export const timeReleased = (time) => {
  if (time) {
    const oldTime = new Date(time).toISOString();
    const old = new Date(oldTime);

    const nowTime = new Date().toISOString();
    const now = new Date(nowTime);

    let difference = (now - old) / 1000;
    difference /= 60 * 60;

    const hours = Math.round(difference);

    if (hours <= 24) {
      return `${hours} hours ago`;
    } else if (hours > 24) {
      const days = Math.round(hours / 24);
      const res = days === 1 ? `Day ` : "Days ";
      return `${days} ${res} ago`;
    }
  }
};
