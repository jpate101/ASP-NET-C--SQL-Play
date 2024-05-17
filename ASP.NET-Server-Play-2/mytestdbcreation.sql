#create database mytestdb;
#create  table Department(
#DepartmentId int auto_increment,
#DepartmentName nvarchar(500),
#primary key(DepartmentId)
#);
#insert into Department(DepartmentName) values ('IT');
#insert into Department(DepartmentName) values ('Support');



#create  table Employee(
#EmployeeId int auto_increment,
#EmployeeName nvarchar(500),
#Department nvarchar(500),
#DateOfJoining datetime,
#PhoteFileName nvarchar(500),
#primary key(EmployeeId)
#);

#insert into Employee(EmployeeName,Department,DateOfJoining,PhoteFileName) 
#values('bob','IT','2021-06-21','anonymous.png');

#select * from Department;
#select * from Employee;


