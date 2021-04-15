#create a JSON in doGet Servlet

 

        // defining the PrintWriter object
        PrintWriter out = response.getWriter();
        // setting the response type
        response.setContentType("application/json");
        // converting object to json using Gson api.
        out.println(new Gson().toJson(service.getAllProductsSorted()));

 

          <dependency>
            <groupId>com.google.code.gson</groupId>
            <artifactId>gson</artifactId>
            <version>2.8.5</version>
        </dependency>

 

#cookies

 

 /** Sending cookie
         * Cookie cookie = new Cookie(“Name”, “Jack”);
         * response.addCookie(cookie);
         * cookie.setMaxAge(seconds); //only for permanent cookies
         * • A zero value causes an existing permanent cookie to be deleted.
         *
         * Reading cookies
         * for (Cookie cookie : request.getCookies()) {
         *  if (cookie.getName().equals(“Name”)) {
         *  String userName= cookie.getValue(); } }
         */
/*
{"Employees":
[
{"EmpId":1,"SSN":"123-45-67","FullName":"Usain Bolt","PhoneNo":"","DateOfBirth":1996-12-3," DateOfEmployment ":2014-1-4
,"Level":16,"Salary":15,005.95,"Email":""},
{"EmpId":2,"SSN":"123-45-68","FullName":" Anna-Marie Rodriguez ","PhoneNo":"(641) 451-0001","DateOfBirth":2000-5-21," DateOfEmployment ":2000-5-21
,"Level":13,"Salary":4,562.00,"Email":"amrod@gmail.mx"},
{"EmpId":3,"SSN":"123-45-69","FullName":" Victor Luiz Garcia ","PhoneNo":"","DateOfBirth":1998-11-7," DateOfEmployment ":2013-11-7
,"Level":12,"Salary":17,750.05,"Email":""}

]}
*/

/*
        
<tag>
    <name>showCardBox</name>
    <tag-class>edu.miu.test.cardBoxTag</tag-class>
    <body-content>scriptless</body-content> 
  </tag>

Which is a correct usage of the tag on a JSP page?

Option A.
<cbx:showCardBox><%= request.getAttribute(“msgBox”) %></cbx:showCardBox>

Option B.
<cbx:showCardBox>${msgBox}</cbx:showCardBox>


*/