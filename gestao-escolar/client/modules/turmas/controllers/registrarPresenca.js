Template.registrarPresenca.onRendered(()=>{
  const self = Template.instance();
  this.$('.datepicker').datepicker();
});

Template.registrarPresenca.helpers({
  ano() {
    return Meteor.user().createdAt.getFullYear();
  },
  mes() {
    var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[Meteor.user().createdAt.getMonth()];
  },
  alunosNaTurma() {
    return Alunos.find({_id: {
      $in: this.Alunos
    }});
  },
  materias() {
    return Materias.find({_id: {
      $in: this.Materias
    }});
  }
});

Template.registrarPresenca.events({
  'click .savePresence'(e, t) {
    e.preventDefault();
    let materia = $('#sel1').val();
    let dia = $('.datepicker').val();
    let turma = this._id;
    let alunos = {};
    this.Alunos.forEach((aluno) => {
      // alunos.push({
      //   aluno: $(`#${aluno}`).parent().hasClass('active')
      // });
      alunos[aluno] = $(`#${aluno}`).parent().hasClass('active');
    });

    Meteor.call('insertPresence', materia, dia, turma, alunos, function(err, res) {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
        toastr.success('Chamada feita com sucesso!');
      }
    });



  }
});
