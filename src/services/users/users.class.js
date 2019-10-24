// This is the database adapter service class
const { Service } = require('feathers-nedb');
// We need this to create the MD5 hash
const crypto = require('crypto');

// The Gravatar image service
const gravatarUrl = 'https://s.gravatar.com/avatar';
// The size query. Our chat needs 60px images
const query = 's=60';

exports.Users = class Users extends Service {
    create(data, params) {
        // this is the information we want from the user signup data
        const {email,password,githubId} = data;
        // gravatar uses MD5 hashes from email to get image
        const hash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
        // the full avatar URL
        const avatar = `${gravatarUrl}/${hash}?${query}`;
        // the complete user
        const userData = {
            email,
            password,
            githubId,
            avatar
        };

        // Call the original create with existing params and new data
        return super.create(userData, params);
    };  
};
