export default Ember.Component.extend({
  
  classNames: ['resource'],
  classNameBindings: ['isIndustryA:industry-a', 'isIndustryB:industry-b', 'isNoIndustry:industry-none'],
  
  isIndustryA: function () {
    return this.get('industry') === 1;
  }.property('industry'),
  
  isIndustryB: function () {
    return this.get('industry') === 2;
  }.property('industry'),
  
  isNoIndustry: function () {
    return this.get('industry') === 0;
  }.property('industry'),
  
  industryName: function () {
    return ['No Industry', 'Industry A', 'Industry B'][this.get('industry')];
  }.property('industry'),
  
  actions: {
    changeIndustry: function (industry) {
      this.set('industry', industry);
    }
  }
  
});