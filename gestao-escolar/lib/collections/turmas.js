Turmas = new Mongo.Collection('turmas');

Turmas.attachSchema({
  nome: {
    type: String,
  },
  Alunos: {
    type: [String],
    label: 'Alunos',
    autoform: {
      options: function(){
        return _.map(Alunos.find().fetch(), function(aluno){
          return {
            label: aluno.nome,
            value: aluno._id,
          };
        });
      }
    }
  },
  Materias: {
    type: [String],
    label: 'Matérias',
    autoform: {
      options: function(){
        return _.map(Materias.find().fetch(), function(materia){
          return {
            label: materia.nome,
            value: materia._id,
          };
        });
      }
    }
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
