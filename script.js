//Resume in JSON format
//1.For Loop Execution see Below
//Declare a variable 
var data=[
    {
        "name":"Nandhuprayag",
        "Fathersname":"Selvaraj A",
        "Email":"khokho95@gmail.com",
        "Mobile":"+919597818437",
        "Address":[
            {
                "House No":"B5",
                "Street":"Lalgudi Nagar",
                "Area":"vannavil ",
                "city":"coimabtore"
            }] 


    },
    {
        "Objective":"To become an indispensable part of an esteemed industry where I can utilize my technical as well as academic efficiency"
    },
    {
        "Educational Summary":[
            {
                "Year Passed":"2012-2016",
                "College":"KSRangasamy college of technology",
                "University":"Anna",
                "Status":"Autonomous",
                "CGPA":"8.05"
            },
            {
                "Year Passed":"2010-2012",
                "School":"Srinivasa Vidhyalaya lalgudi national",
                "Board":"HSC",
                "Percentage":"86.8%"
            },
            {
                "Year Passed":"2000-2010",
                "School":"Srinivasa Vidhyalaya lalgudi national",
                "Board":"SSLC",
                "Percentage":"88.8%"
            }]
    },
    {
        "Awards & Achievements":[
            {
                "Year":"2014-2016",
                "Competition":"Won gold medal in open State KHO-KHO tournaments conducted by Thayagarajar college"
            },
            {
                "Participation":"Junior and Senior Marathon in 2006 -2008"
            },
            {
                "Trophies":"won gold medal in the open tournament in erode open khokho match in 2017 "
            }]
    }
]
//Displaying all data
console.log("Printing the Output data")
console.log(data)
// console.log(data[2]["Educational Summary"][0].CGPA)


//Use For LOOP to Execute
console.log("Execution For Loop")
for(var i=0;i<data.length;i++)//Initializing and Checking condition// Increment Take place
{
    console.log(data[i]);//Loop (body) Execution 
}

console.log("Execution For in Loop")
//For in LOOP 
for (let key in data) {
    console.log(key+":"+data[key]);
}

console.log("Execution ForEach Loop")
//For Each Loop
data.forEach((element)=>//using arrow function 
{
    console.log(element);
})




















































// var n1={"name":"nandhu","age":"24","sex":"male"};
// var n2={"name":"brahma","age":"26","sex":"male"};

// var sum=[
//     { 
//         "nsme":"bheema",
//         "age":"24",
//         "sex":"male",
//         "address":[
//             {
//                 "type":"offcice",
//                 "street":"pollachi",
//                 "city":"cobai"
//             },
//             {
//                 "type":"house",
//                 "street":"gandhinagar",
//                 "city":"udumalai"
//             }]
//     }]


    // sum.forEach(element => {
    //     console.log(element.address[0].type);
    // });

    // for(let i=0;i<sum.length;i++)
    // {
    //     console.log(sum[i])
    // }

    // for (const key in sum) {
    //     console.log(key,sum[key])
    // }
    