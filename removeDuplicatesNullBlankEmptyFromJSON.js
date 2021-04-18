/* Program to read the JSON file and print only the valid content
// Eliminates 'duplicates', null', "", blank 
// program by Mallikarjuna
*/ 
var i, j
// fs to read the JSON file
const fs = require('fs')
// reference to JSON file 
let rawdata = fs.readFileSync('F:/Syniti/data.json');

// parse the data into a variable
let student = JSON.parse(rawdata)

    
// shoould take the first record and then compare with all records
// if any one of fields don't match, then it is not a duplicate record.
// if the fields match, it ia duplicate record and remove the record from JSON
// first it should take the first record and then compare with all other records
// if a duplicate is found remove the first record
// this will be a new JSON and find the length of this
// and then do the above steps

    for (i=0; i<student.length; i++){

        for (j=i+1;j<student.length; j++){

            if ((student[i].name) === (student[j].name)){

                if ((student[i].address) === (student[j].address)){

                    if ((student[i].zip) === (student[j].zip)) {

                    //remove the record
                    
                    student.splice(i,1);
                    
                    }else{
                        // exit this and continue   
                    }
                }else{
                    // exit this and continue
                }
            }else{
                // exit this and continue    
            }
        }
    }
 
    // validates against null, blank and "" content in the JSON file
    
    // first find the length of the JSON file and loop through it
    for (i = 0; i < student.length; i++) {
        // JSON file values - name, address and zip
        // check whther the element contains null, blank or empty value
        // if found skip else print
        if ((student[i].name == null) || (student[i].name == "") || (student[i].name == " ")
        
        || (student[i].address == null) || (student[i].address == "") || (student[i].address == " ")
    
        || (student[i].zip == null) || (student[i].zip == "") || (student[i].zip == " ")
            
        ) {
            //console.log("record with null, blank and empty") - for testing purposes
        }else {
            // prints the valid JSON content to console
            console.log("the record without duplicate, null, blank and empty: "+student[i].name+", "+student[i].address+", "+student[i].zip+", "+student[i].id)
        }
    }

