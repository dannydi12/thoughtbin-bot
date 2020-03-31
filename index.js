const { getShowerThoughts, postThought, deletePost } = require('./services');
const { userId, DELAY, whenDelete } = require('./config');

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

function bot(thoughts) {
  let i = 0;
  let toDelete = [];

  const postingInterval = setInterval(() => {
    const newThought = {
      userId,
      content: thoughts[i],
    };
    if (i < thoughts.length) {
      postThought(newThought)
        .then((thought) => {
          toDelete.push(thought);
          i++;
        });
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


async function main() {
  const thoughts = await getShowerThoughts();
  bot(thoughts);
}

main();
