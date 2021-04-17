<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%@ include file = "/WEB-INF/fragments/header.jsp" %>	
<br>

<div>
		Name: ${fullName}<br>
		Gender: ${gender}<br>
		Category: ${category}<br>
		Message: ${message}<br>
		
	
	</div>
<%@ include file = "/WEB-INF/fragments/footer.jsp" %>
</body>
</html>