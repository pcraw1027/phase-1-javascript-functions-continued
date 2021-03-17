// Your code here
function saturdayFun(activity) {
    if (activity == undefined) {
        activity = "roller-skate"
    }
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity) {
    if (activity == undefined) {
        activity = "go to the office"
    }
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(outParam="*") {
    return function(inParam="special") {
        return `You are ${outParam}${inParam}${outParam}!`
    }
}