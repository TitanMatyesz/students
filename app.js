import express from 'express';

const app = express();
const PORT = 3030;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const students = [
    { id: 1, name: 'Alice', subject: 'Math'},
    { id: 2, name: 'Bob', subject: 'Literature'},
    { id: 3, name: 'Charlie', subject: 'History'},
];

app.get('/students', (req, res) => {res.status(200).json(students)});

app.get("/students/:id", (req, res) => {
    const id = +req.params.id
    const  diak = students.find(x=>x.id===id)
    if(!diak){
        return res.status(404).json({message: "Student not found"})
    }
    res.status(200).json(diak)
})
app.post('/students/:id', (req, res) => {
    const {name, subject} = req.body;
    if(!name || !subject)
    {
        res.status(404).json({message: "Name and subject required!"})
    }
    const id = students[students.length]-1?.id+1;
    const diak = {id, name, subject};
    students.push(diak);
    res.status(201).json(diak);
})
app.put("/students/:id", (res, req) =>{
    if(!diak){
        res.status(404).json({message: "Error"})
    }
    const {name, subject} = req.body;
    if(!name || !subject)
    {
        res.status(404).json({message: "Name and subject required!"})
    }
    diak.name = name;
    diak.subject = subject; 
    res.status(201).json(diak);   
})