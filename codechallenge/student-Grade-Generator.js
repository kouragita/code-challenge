// //Write a function that prompts the user to input student marks. 
// //The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 
// //A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40

//we need a fumction that gets grade 

function getgrade(){
    //define a window input
    let marks = prompt("your marks:");
    
    //convet the input('') into a number
    marks = Number(marks);

    //check if the inut is valid (0-100)
    if(isNaN(marks) || marks <0 || marks > 100){
        alert('invalid');

        return;
    }

    //determine the grade

    let grade;
    if (marks > 79){
        grade = "A";
    }
    else if (marks >= 60){
        grade = "B"
    }
    else if (marks >= 50){
        grade = "C"
    }
    else if (marks >= 40){
    grade = "D"
    }
    else if (marks <=39){
        grade = "E"
    }

    //output
    alert("Grade " +grade)
}

getgrade()

  