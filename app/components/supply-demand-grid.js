/* globals d3 */

export default Ember.Component.extend({

  classNames: ['supply-demand-grid'],

  points: [
    [ 35, 8],
    [ 85, 40],
    [ 133, 130],
    [ 178, 160],
    [ 227, 190],
    [ 275, 220],
    [ 320, 248],
    [ 370, 280],
    [ 415, 308],
    [ 465, 337],
    [ 510, 337],
    [ 555, 337],
    [ 600, 337],
    [ 645, 337],
    [ 690, 337],
    [ 735, 337],
  ],

  lineData: function () {
    return this.get('points').map(function (p) {
      return { x: p[0], y: p[1] };
    });
  }.property('points'),

  lineFunction: d3.svg.line().x(function(d) { return d.x; }).y(function(d) { return d.y; }).interpolate('linear'),

  didInsertElement: function () {
    var svg = d3.select(this.$('svg').get(0));
    this.set('svg', svg);

    var lineFunction = this.get('lineFunction');
    var lineData = this.get('lineData');

    svg.append('path')
      .attr('d', lineFunction(lineData))
      .attr('stroke', 'rgba(86, 185, 197, 0.8)')
      .attr('stroke-linecap', 'round')
      .attr('stroke-width', 8)
      .attr('fill', 'none');

    var industryA = svg.append('circle').attr({
      r: 15,
      cx: -100,
      cy: -100,
      fill: 'rgba(94, 138, 185, 0.7)'
    });

    var industryB = svg.append('circle').attr({
      r: 15,
      cx: -100,
      cy: -100,
      fill: 'rgba(196, 51, 49, 0.7)'
    });

    this.set('A', industryA);
    this.set('B', industryB);
  },

  updatePositionBasedOnResourcesSold: function () {
    var a = this.translateResourcesSoldToGraphPosition(this.get('industryA'));
    var b = this.translateResourcesSoldToGraphPosition(this.get('industryB'));

    // If A and B overlap, then make A a little bigger; otherwise, go back to
    // the normal radius.
    if (this.get('industryA') === this.get('industryB')) {
      this.get('A').attr({r: 20});
    } else {
      this.get('A').attr({r: 15});
    }

    this.get('A').transition().attr(a);
    this.get('B').transition().attr(b);
  }.observes('industryA', 'industryB'),

  translateResourcesSoldToGraphPosition: function (resourcesSold) {
    var point = this.get('points')[resourcesSold];
    if (resourcesSold === 0) {
      return { cx: -100, cy: -100 };
    }
    return { cx: point[0], cy: point[1] };
  }

});
