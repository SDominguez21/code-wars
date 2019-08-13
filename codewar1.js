var cities = ["miami", "barcelona", "madrid", "amsterdam", "berlin", "sao paulo", "lisbon", "mexico city", "paris"];

function capitalizeCitiesNames(arrayOfCities){
  return arrayOfCities.map(oneCity => oneCity.charAt(0).toUpperCase()+ oneCity.slice(1));

}
capitalizeCitiesNames(Cities);
lets startingNums = [0,1,2,3,4,5,6]; 

// function addOneToEach(arrayToStartWith){

let finalArray = startingNums.map((eachNumber, index)=>{
return eachNumber**2;
})
console.log(startingNums);
console.log(finalArray);
//  }

const students = [
    {
      name: "Tony Parker",
      firstProject: 80,
      secondProject: 75,
      finalExam: 90
    },
    {
      name: "Marc Barchini",
      firstProject: 84,
      secondProject: 65,
      finalExam: 65
    },
    {
      name: "Claudia Lopez",
      firstProject: 45,
      secondProject: 95,
      finalExam: 99
    },
    {
      name: "Alvaro Briattore",
      firstProject: 82,
      secondProject: 92,
      finalExam: 70
    },
    {
      name: "Isabel Ortega",
      firstProject: 90,
      secondProject: 32,
      finalExam: 85
    },
    {
      name: "Francisco Martinez",
      firstProject: 90,
      secondProject: 55,
      finalExam: 78
    },
    {
      name: "Jorge Carrillo",
      firstProject: 83,
      secondProject: 77,
      finalExam: 90
    },
    {
      name: "Miguel López",
      firstProject: 80,
      secondProject: 75,
      finalExam: 75
    },
    {
      name: "Carolina Perez",
      firstProject: 85,
      secondProject: 72,
      finalExam: 67
    },
    {
      name: "Ruben Pardo",
      firstProject: 89,
      secondProject: 72,
      finalExam: 65
    }
]

let sanitizedGradeBook = students.map((eachStudentObject)=>{

  let sanitizedStudent = {};
  sanitizedStudent.name = eachStudentObject.name;
  sanitizedStudent.finalExam = eachStudentObject.finalExam;
  return sanitizedStudent;
  the return statement inside the map is not what you are getting at the end, it's what is going into the new array a bunch of times 
})

console.log(sanitizedGradeBook);

____________________________________________


