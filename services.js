const axios = require('axios');
const { TOKEN, URL } = require('./config');

async function getShowerThoughts() {
  const response = await axios.get('https://www.reddit.com/r/showerthoughts/top.json', {
    params: {
      sort: 'top',
      t: 'day',
      limit: '100',
    },
  });

  console.log('Fetched thoughts');

  const allData = response.data.data.children;
  const thoughts = allData.map((post) => post.data.title);
  return thoughts;
}

async function postThought(newThought) {
  const response = await axios({
    method: 'POST',
    url: URL,
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(newThought),
    json: true,
  });

  console.log(`Posted new thought id ${response.data.id}`);

  return response.data;
}

async function deletePost(id) {
  await axios({
    method: 'DELETE',
    url: `${URL}/${id}`,
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
    },
  });

  console.log(`Deleted post id ${id}`);
}

module.exports = {
  getShowerThoughts,
  postThought,
  deletePost,
};
