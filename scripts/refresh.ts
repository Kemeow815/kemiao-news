import sources from "../shared/sources.json"

Promise.all(Object.keys(sources).map(id =>
  fetch(`https://new.kemiao.online/api/s?id=${id}`),
)).catch(console.error)
