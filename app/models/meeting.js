import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('data'),

  report: DS.belongsTo('report'),
});