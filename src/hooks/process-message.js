// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const {data} = context;

    // throw an error if we didn't get a text
    if(!data.text) throw new Error('A message must have text');

    // the logged in user
    const {user} = context.params;
    // The actual message text
    // Make sure that messages are no longer than 400 chars
    const text = data.text.substring(0, 400);

    // update the original data (so people can't add additional stuff)
    context.data = {
      text,
      // set the user id
      userId: user._id,
      // add current date
      createdAt: new Date().getTime()
    };

    return context;
  };
};
