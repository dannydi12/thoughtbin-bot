/**
 * Where all the fetch requests live. Welcome home :)
 *
 * @author Daniel DiVenere
 * @since  4/1/20
 */


const axios = require('axios');
const { TOKEN, URL } = require('./config');

/**
 * Gets the shower thoughts from r/ShowerThoughts.
 */
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

/**
 * This will post to ThoughtBin no matter how much you beg it not too.
 *
 * @param {Object} newThought To post to ThoughtBin.
 */
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

/**
 * This function makes it look like ThoughtBot never existed :O
 *
 * @param {number} id ID of thought to delete.
 */
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
