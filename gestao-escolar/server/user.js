class UserFactory {

  createUser(role, name, email, password) {
    if (role == 'admin'){
      Accounts.createUser({
        password: password,
        email: email,
        profile: {
          name: name,
          sexo: "",
          nascimento: "",
          telefone: "",
          vinculados: [],
        }
      }, function(error, res) {
        if(error) {
          console.log(error);
        } else {
          Roles.addUsersToRoles(res, 'admin', Roles.GLOBAL_GROUP);
        }
      });
    } else {
      Accounts.createUser({
        password: password,
        email: email,
        profile: {
          name: name,
          sexo: "",
          nascimento: "",
          telefone: "",
          vinculados: [],
        }
      }, function(error, res) {
        if(error) {
          console.log(error);
        }
      });
    }

  }
}

export default UserFactory;
