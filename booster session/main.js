nameofthestudent=[];
function submit()
{
    var name1=document.getElementById("name_of_the_student_1").value;
    var name2=document.getElementById("name_of_the_student_2").value;
    var name3=document.getElementById("name_of_the_student_3").value;
    var name4=document.getElementById("name_of_the_student_4").value;
    
     nameofthestudent.push(name1);
     nameofthestudent.push(name2);
     nameofthestudent.push(name3);
     nameofthestudent.push(name4);
     console.log(nameofthestudent);
     document.getElementById("display").innerHTML=nameofthestudent; 



}
