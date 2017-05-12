Meteor.publish("user", function(){
  return Meteor.users.find({_id: this.userId}, {
    fields: {
      services: 0,
    }
  });
});

Meteor.publish("turma", function(id){
  return Turmas.find(id);
});
