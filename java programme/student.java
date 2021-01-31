#4.	WAP to take class student having data member name, roll & branch. Print the details using class and the object concept.

public class student{
 String name;
 int roll;
 String branch;

public static void main(String args[])
{
student s=new student();
s.name="swayam prakash sahoo";
s.roll=26;
s.branch="ECE";
System.out.println("Name of student : " +s.name);
System.out.println("Roll of student : " +s.roll);
System.out.println("Branch of student : " +s.branch);
}
}