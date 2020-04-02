/**
 * The bot recursively scrapes Reddit then asynchronously posts/deletes thoughts.
 *
 * @author Daniel DiVenere
 * @since  4/1/20
 */

const { getShowerThoughts, postThought, deletePost } = require('./services');
const { userId, DELAY, whenDelete } = require('./config');

/**
 * Deletes one thought at time and waits for
 * DELAY amount of time.
 *
 * @param {array} toDelete List of thoughts to delete.
 */
function slowlyDelete(toDelete) {
  let i = 0;

  const deletingInterval = setInterval(() => {
    if (toDelete[i]) {
      deletePost(toDelete[i].id);
    } else {
      clearInterval(deletingInterval);
    }
    i++;
  }, DELAY);
}

/**
 * Handles the majority of the bot logic.
 * Posts, deletes, sets intervals, etc.
 *
 * @param {array} thoughts Freshly scraped thoughts to post to ThoughtBin.
 */
function bot(thoughts) {
  let i = 0;
  let toDelete = [];

  const postingInterval = setInterval(() => {
    const newThought = {
      userId,
      content: thoughts[i],
    };

    // If we haven't exhuasted our current list of thoughts, post another one.
    if (i < thoughts.length) {
      postThought(newThought)
        .then((thought) => {
          // Add this thought to the deleting queue
          toDelete.push(thought);

          i++;
        });

      // Once we reach a certain threshold, start deleting thoughts.
      if (toDelete.length > whenDelete) {
        slowlyDelete(toDelete);
        toDelete = [];
      }
    } else {
      clearInterval(postingInterval);
      main();
    }
  }, DELAY);
}

/**
 * Recursive initiation function.
 */
async function main() {
  const thoughts = await getShowerThoughts();
  bot(thoughts);
}

main();
