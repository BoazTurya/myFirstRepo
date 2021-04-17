<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>

<%@ include file = "/WEB-INF/fragments/header.jsp" %>

	<div class="container">
		<br> <br>

		<form action="./contactUs" method='post'>
			<div class="form-group">
				<label for="fullName">*Name</label> 
				<input type="text" class="form-control" id="fullName" placeholder="e.g Boaz Turya" name="fullName">
			</div>
			<div class="form-group">
				<label for="">*Gender</label><br> <input type="radio" id="male"
					value="male" name="gender"> <label for="male">Male</label>
				<input type="radio" id="female" value="female" name="gender">
				<label for="female">Female</label>
			</div>
			<div class="form-group">
				<label for="category">*Category</label> <select class="form-control"
					name="category" id="category">
					<option value="">:::</option>
					<option value="feedback">FeedBack</option>
					<option value="inquiry">Inquiry</option>
					<option value="complaint">Complaint</option>
				</select>
			</div>
			<div class="form-group">
				<label for="message">*Message</label>
				<textarea class="form-control" name="message" id="message" rows="5"></textarea>
			</div>
			<input type="submit" class="btn form-control" id="btnSubmit"
				value="Submit" style = "background-color:aqua">
		</form>
		<br> <br> <br>
	</div>
<%@ include file = "/WEB-INF/fragments/footer.jsp" %>
</body>
</html>