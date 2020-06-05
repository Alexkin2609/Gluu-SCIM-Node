module.exports = {


  friendlyName: 'Find in gluu',


  description: '',


  inputs: {

  },


  exits: {

    success:{
      success: true,
      description: 'The request to Gluu was successful.',
      statusCode: 200
    },
    error:{
      success: true,
      description: 'There was an error in the Gluu request.',
      statusCode: 404
    },

  },


  fn: async function (inputs, exits) {

    var config = {
      keyAlg: 'E2684', // Algorithm type.
      domain: 'https://toid.tergar.org/', // Gluu server URL.
      privateKey: '~/assets/certs/final-private-key.key', // Value can be buffer or path of private key.
      clientId: '@!5DFB.CE0F.C94B.777E!0001!B09F.F896!0008!3F40.77E4', // scim_rp_client's client id.
      keyId: '3a9a0138-e123-4866-84d5-314340fe2684', // JWKS key id.
    };
    
    var scim = require('scim-node')(config);

    // Process data or handle error using promise.
    await scim.scim2.getUsersCount()
      .then((res) => {
        console.log(res);
        return exits.success(res);
      })
      .catch((error) => {
        return exits.error(error);
      });

  }


};