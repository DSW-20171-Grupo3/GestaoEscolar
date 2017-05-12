Materias = new Mongo.Collection('materias');

Materias.attachSchema({
  nome: {
    type: String,
  },
  criadoEm: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      }
    },
    autoform: {
          // type: 'hidden',
        }
  },
});
