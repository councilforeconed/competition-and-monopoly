export default Ember.Component.extend({

  didInsertElement: function () {
    var self = this;

    this.$('input[value=%@]'.fmt(this.get('resourceOwners')))
      .attr('checked', true);

    this.$('input').on('change', function (e) {
      self.set('resourceOwners', $(this).val());
    });
  },

  willDestroyElement: function () {
    this('input').off('change');
  }

});
