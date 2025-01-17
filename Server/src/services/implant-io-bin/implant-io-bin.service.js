// Initializes the `implant-io-bin` service on path `/implant-io-bin`
const createService = require('./implant-io-bin.class.js');
const hooks = require('./implant-io-bin.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/implant/bin/:pipeId', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('/implant/bin/:pipeId');

  service.hooks(hooks);

};
