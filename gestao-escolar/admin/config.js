AdminConfig = {
  skin: 'blue',
  name: 'Gestão Escolar',
  nonAdminRedirectRoute: 'home',
  adminEmails: ['mat.mello93@gmail.com'],
  dashboard: {

  },
  collections: {
    'Meteor.users': {
      showInSideBar: false,
      extraFields: ['roles'],
      tableColumns: [
        {label:'Nome', name:'profile.name'},
        {label:'Email', name:'emails[0].address'},
        {label:'Entrou em', name:'createdAt', template: 'createdAt'},
      ],
      routes: {
        edit: {
          // onBeforeAction() {
          //   console.log(Session.get('admin_doc'));
          //   this.next();
          // },
          // waitOn() {
          //
          // },
          onAfterAction() {
            // console.log('RODOU AGORA');
          },
        }
      },
      templates: {
      //   new: {
      //     name: 'AdminUsersNew'
      //   },
        edit: {
          name: 'atribuirResponsavel',
          data() {
            console.log("user: ");
            console.log(Session.get('admin_doc'));
            return {
              user: Meteor.users.find(Router.current().params._id).fetch(),
              roles: Roles.getRolesForUser(Router.current().params._id),
              otherRoles: _.difference(_.map(Meteor.roles.find().fetch(), role => role.name), Roles.getRolesForUser(Router.current().params._id)),
            };
          },
        }
      },
      label: 'Usuários',
      color: 'blue',
      icon: 'user',
      // showWidget: false,
    },
    Alunos: {
    showWidget: true,
    showInSideBar: false,
    omitFields: ['criadoEm'],
    label: 'Alunos',
    icon: 'user',
    color: 'green',
    routes: {
    },
    tableColumns: [{label:'Nome', name:'nome'}, {label: 'Matrícula', name: 'matricula' }],
  },
  Turmas: {
  showWidget: true,
  showInSideBar: false,
  omitFields: ['criadoEm'],
  label: 'Turmas',
  icon: 'users',
  color: 'purple',
  routes: {
  },
  tableColumns: [{label:'Nome', name:'nome'},{label:'Registrar Presença', name:'_id', template:'registerPresenceButn'}],
},
Materias: {
showWidget: true,
showInSideBar: false,
omitFields: ['criadoEm'],
label: 'Matérias',
icon: 'book',
color: 'yellow',
routes: {
},
tableColumns: [{label:'Nome', name:'nome'}],
},
}
};


// AdminDashboard.addSidebarItem('Alunos', AdminDashboard.path('/alunos'), { icon: 'user' });
AdminDashboard.addSidebarItem('Alunos', {
  icon: 'user',
  urls: [
      { title: 'Criar', url: AdminDashboard.path('/alunos/new') },
      { title: 'Ver todos', url: AdminDashboard.path('/alunos') },
    ]
});

AdminDashboard.addSidebarItem('Turmas', {
  icon: 'users',
  urls: [
      { title: 'Criar', url: AdminDashboard.path('/turmas/new') },
      { title: 'Ver todos', url: AdminDashboard.path('/turmas') },
    ]
});

AdminDashboard.addSidebarItem('Matérias', {
  icon: 'book',
  urls: [
      { title: 'Criar', url: AdminDashboard.path('/materias/new') },
      { title: 'Ver todos', url: AdminDashboard.path('/materias') },
    ]
});
