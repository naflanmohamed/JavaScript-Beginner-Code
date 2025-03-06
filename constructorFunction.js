function student(name, rollno){
  this.name = name;
  this.rollno = rollno;
}


var st = new student('hello',10);

console.log(st.name);
console.log(st.rollno);

