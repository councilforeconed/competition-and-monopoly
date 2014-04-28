export default Ember.ArrayController.extend({
  
  industryA: function() {
    var industry = this.filter(function(resource) {
      return resource.get('industry') === 1;
    });
    return industry.get('length');
  }.property('@each.industry'),
  
  industryB: function() {
    var industry = this.filter(function(resource) {
      return resource.get('industry') === 2;
    });
    return industry.get('length');
  }.property('@each.industry'),
  
  noIndustry: function() {
    var industry = this.filter(function(resource) {
      return resource.get('industry') === 0;
    });
    return industry.get('length');
  }.property('@each.industry'),
  
  pricePerUnit: function () {
    var prices = [undefined, 11, 8, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1, 1, 1];
    return {
      industryA: prices[this.get('industryA')],
      industryB:prices[this.get('industryB')]
    };
  }.property('@each.industry', 'industryA', 'industryB'),
  
  societalBenefit: function () {
    var ppu = this.get('pricePerUnit');
    var industryA = this.get('industryA') * ppu.industryA;
    var industryB = this.get('industryB') * ppu.industryB;
    
    if (isNaN(industryA)) industryA = 0;
    if (isNaN(industryB)) industryB = 0;
    
    var total = industryA + industryB;
    return total;
  }.property('@each.industry', 'industryA', 'industryB', 'pricePerUnit')
  
});