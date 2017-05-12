Template.perfil.helpers({
  ano() {
    return Meteor.user().createdAt.getFullYear();
  },
  mes() {
    var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[Meteor.user().createdAt.getMonth()];
  },
  alunos() {
    if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
      return Alunos.find();
    } else {
      return Alunos.find({_id: {
        $in: Meteor.user().profile.vinculados
      }});
    }
  }
});

Template.perfil.events({
  'click .emitReport'(e, t) {
    e.preventDefault();
    console.log(this._id);
    const myData = Alunos.findOne(this._id);
    Blaze.saveAsPDF(Template.report, {
    filename: "report.pdf", // optional, default is "document.pdf"
    data: myData, // optional, render the template with this data context
  });
  }
});

Template.perfil.helpers({
  observe: function () {
        var query = Alunos.find({});
        query.observeChanges({
          added: function (id, nome, matricula) {
            $('ul').append(`<li>${nome} - ${matricula}</li>`);
          },
          changed: function (id, nome, matricula) {
            $('ul').append(`<li>${nome} - ${matricula}</li>`);
          },
          removed: function (id, nome, matricula) {
            $('ul').append(`<li>${nome} - ${matricula}</li>`);
          }
        });
    },
});
