Alunos = new Mongo.Collection('alunos');

Alunos.attachSchema({
  nome: {
    type: String,
  },
  matricula: {
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
