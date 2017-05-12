SearchSource.defineSource('alunos', function(searchText, options) {
  var options = {limit: 20};

  if(searchText) {
    var regExp = buildRegExp(searchText);
    var selector = {$or: [
      {nome: regExp},
      {matricula: regExp}
    ]};

    return Alunos.find(selector, options).fetch();
  } else {
    return Alunos.find({}, options).fetch();
  }
});

function buildRegExp(searchText) {
  // this is a dumb implementation
  var parts = searchText.trim().split(/[ \-\:]+/);
  return new RegExp("(" + parts.join('|') + ")", "ig");
}
