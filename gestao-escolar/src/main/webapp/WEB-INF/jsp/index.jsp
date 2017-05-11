<!DOCTYPE HTML>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<html>
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Pragma" content="no-cache"> 
    <meta http-equiv="Cache-Control" content="no-cache"> 
    <meta http-equiv="Expires" content="Sat, 09 May 2017 00:00:00 GMT">
    
    <title>Gestão Escolar | Home</title>
    
    <link href="static/css/bootstrap.min.css" rel="stylesheet">
     <link href="static/css/style.css" rel="stylesheet">
    
    <!--[if lt IE 9]>
		<script src="static/js/html5shiv.min.js"></script>
		<script src="static/js/respond.min.js"></script>
	<![endif]-->
</head>
<body>

	<div role="navigation">
		<div class="navbar navbar-inverse">
			<a href="/" class="navbar-brand">Gestão Escolar</a>
			<div class="navbar-collapse collapse">
				<ul class="nav navbar-nav">
					<li><a href="new-presenca">Marcar Presença</a></li>
					<li><a href="all-presencas">Planilha de presenças</a></li>
				</ul>
			</div>
		</div>
	</div>
	
	<c:choose>
		<c:when test="${mode == 'MODE_HOME'}">
			<div class="container" id="homeDiv">
				<div class="jumbotron text-center">
					<h1>Gestão escolar</h1>
					<h2>O seu sistema de gestão escolar</h2>
				</div>
			</div>
		</c:when>
		<c:when test="${mode == 'MODE_PRESENCAS'}">
			<div class="container text-center" id="presencasDiv">
				<h3>Presenças</h3>
				<hr>
				<div class="table-responsive">
					<table class="table table-striped table-bordered text-left">
						<thead>
							<tr>
								<th>Id</th>
								<th>Name</th>
								<th>Date Created</th>
								<th>Presença</th>
								<th>Edit</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody>
							<c:forEach var="presenca" items="${presencas}">
								<tr>
									<td>${presenca.id}</td>
									<td>${presenca.name}</td>
									<td><fmt:formatDate pattern="yyyy-MM-dd HH:mm:ss" value="${presenca.dateCreated}"/></td>
									<td>${presenca.presencaConfirmada}</td>
									<td><a href="update-presenca?id=${presenca.id}"><span class="glyphicon glyphicon-pencil"></span></a></td>
									<td><a href="delete-presenca?id=${presenca.id}"><span class="glyphicon glyphicon-trash"></span></a></td>
								</tr>
							</c:forEach>
						</tbody>
					</table>
				</div>
			</div>
		</c:when>
		<c:when test="${mode == 'MODE_NEW' || mode == 'MODE_UPDATE'}">
			<div class="container text-center">
				<h3>Atualizar Status</h3>
				<hr>
				<form class="form-horizontal" method="POST" action="save-presenca">
					<input type="hidden" name="id" value="${presenca.id}"/>
					<div class="form-group">
						<label class="control-label col-md-3">Name</label>
						<div class="col-md-7">
							<input type="text" class="form-control" name="name" value="${presenca.name}"/>
						</div>				
					</div>
					<div class="form-group">
						<label class="control-label col-md-3">Presenca Confirmada</label>
						<div class="col-md-7">
							<input type="radio" class="col-sm-1" name="presencaConfirmada" value="true" checked/>
							<div class="col-sm-1">Presente</div>
							<input type="radio" class="col-sm-1" name="presencaConfirmada" value="false"/>
							<div class="col-sm-1">Ausente</div>
						</div>				
					</div>		
					<div class="form-group">
						<input type="submit" class="btn btn-primary" value="Save"/>
					</div>
				</form>
			</div>
		</c:when>		
	</c:choose>

	<script src="static/js/jquery-1.11.1.min.js"></script>    
    <script src="static/js/bootstrap.min.js"></script>
</body>
</html>