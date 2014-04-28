import Resource from 'appkit/models/resource-model';

export default Ember.Route.extend({
  model: function () {
    
    var resources = [];
    
    // Create 14 resources.
    for (var i = 14 - 1; i >= 0; i--) {
      resources.push(Resource.create());
    }
    return resources;
    
  }
});
