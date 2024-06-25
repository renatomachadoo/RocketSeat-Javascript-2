const students = [
  {
    name : "Renato",
    result1: 9.4,
    result2: 5.5
  },
  {
    name : "Gonçalo",
    result1: 5,
    result2: 6
  },
  {
    name : "Francisco",
    result1: 3,
    result2: 2
  },
]

function calculateResult(note1, note2, name){
  const average = ((note1+note2)/2)
  if(average > 7){
    return alert(`Parabéns ${name}, foste aprovado com ${average}`)
  }else{
    return alert(`Infelizmente não conseguites, ${name}, a tua média é ${average}`)
  }
}

for (let student of students){
  calculateResult(student.result1, student.result2, student.name)
}