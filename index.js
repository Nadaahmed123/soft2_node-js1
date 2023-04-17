import express, { response } from 'express';
const app=express();
const students=[
    {
        id:1,
        name:"nada",
        city:"shebien"
    },
    {
        id:2,
        name:"noha",
        city:"tanta"
    },
    {
        id:3,
        name:"ali",
        city:"shebien"
    },
    {
        id:4,
        name:"eman",
        city:"shebien"
    }
]
const studentsFunction= (request,response) => {
    let output= '<ul>';
  for(let i=0 ;i<students.length;i++){
    const student=students[i];
    output+='<li>' + student.name + '</li>';

  }

    output+='</ul>';
    response.send(output);
};
app.get('/students',studentsFunction)

app.listen(5001);