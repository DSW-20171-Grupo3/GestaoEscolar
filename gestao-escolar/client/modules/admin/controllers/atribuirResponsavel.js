Template.atribuirResponsavel.helpers({
  nome() {
    console.log(this.user[0].profile.name);
    return this.user[0].profile.name;
  },
  alunoVinculado() {
    console.log(this.user[0].profile.vinculados);

    return Alunos.find({_id: {
      $in: this.user[0].profile.vinculados
    }});
  },
  getAlunos() {
    // return AlunoSearch.getData()

    return AlunoSearch.getData({
      transform: function(matchText, regExp) {
        return matchText.replace(regExp, "<b>$&</b>")
      }
    });
  },
  name() {
    return this.nome;
  }
});

Template.atribuirResponsavel.events({
  "keyup #queryAluno": _.throttle(function(e) {
    var text = $(e.target).val().trim();
    if(text=='') {
      AlunoSearch.reset();
    } else {
      AlunoSearch.search(text);
    }
  }, 200),
  'click .addAluno'(e, t) {
    e.preventDefault();
    // console.log("##");
    const userId = Template.parentData(2).data.user[0]._id;
    Meteor.call('vincularUsuario', userId, this._id, function(err, res){
      if (err) {
        console.log(err);
      } else {
        toastr.success('Aluno vinculado com sucesso');
      }
    });


  },
  'click .removeAluno'(e, t) {
    e.preventDefault();
    // console.log("##");
    const userId = Template.parentData(2).data.user[0]._id;
    Meteor.call('desvincularUsuario', userId, this._id, function(err, res){
      if (err) {
        console.log(err);
      } else {
        toastr.success('Aluno desvinculado com sucesso');
      }
    });


  }
});
