Meteor.methods({
  insertPresence:function(materia, dia, turma, alunos){
    console.log(alunos);

     return Presences.insert({
       materia: materia,
       dia: dia,
       turma: turma,
       alunos: alunos,
     });
  }
});

Meteor.methods({
  vincularUsuario:function(userId, vinculado){
    return Meteor.users.update({
      _id: userId
    }, {
      $addToSet: {
        'profile.vinculados': vinculado
      }
    });
  }
});

Meteor.methods({
  desvincularUsuario:function(userId, vinculado){
    return Meteor.users.update({
      _id: userId
    }, {
      $pull: {
        'profile.vinculados': vinculado
      }
    });
  }
});
