Template.report.helpers({
  presences() {
    // console.log(Presences.find({`alunos.${this._id}`: true}));

    return Presences.find();
  },
  isAluno() {
    let userId = Template.parentData(1)._id;

    let aluno = this.alunos[userId];
    return aluno == false || aluno == true;

  },

  materia() {
    return Materias.findOne(this.materia).nome;
  },
  turma() {
    return Turmas.findOne(this.turma).nome;
  },
  isPresence() {
    let userId = Template.parentData(1)._id;

    let aluno = this.alunos[userId];
    return aluno ? 'Presente' : 'Ausente';
  }

});
