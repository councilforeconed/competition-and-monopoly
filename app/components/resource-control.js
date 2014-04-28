export default Ember.Component.extend({
  
  classNames: ['resource'],
  
  industryName: function () {
    return ['No Industry', 'Industry A', 'Industry B'][this.get('industry')];
  }.property('industry'),
  
  actions: {
    changeIndustry: function (industry) {
      this.set('industry', industry);
    }
  }
  
});