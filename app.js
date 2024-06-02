let q1='javascript is programming language'
let q2='html has no attributes'
let q3='css can be internal'
let q4='we can use javascript keywords as variable name'
let q5='we cannot leave space between variable name'
let a1='yes'
let a2='no'
let a3='yes'
let a4='no'
let a5='yes'
let score=0
let totalscore=5
alert('Answer the following questions in yes/no')
const response1=prompt(q1)
const response2=prompt(q2)
const response3=prompt(q3)
const response4=prompt(q4)
const response5=prompt(q5)
if(response1===a1){score++}
if(response2===a2){score++}
if(response3===a3){score++}
if(response4===a4){score++}
if(response5===a5){score++}
let percent= score/totalscore*100
alert(percent)





