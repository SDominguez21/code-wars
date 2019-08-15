let timeThing= '2h 22min';
let other = '2h';
let otherOther = '90min';


function timeStringToMin(timeSting){
  if(timeString.indexOf('h') > -1) && timeString.indexOf('min') > -1) {

  let timeArray = timeString.split('h');
  timeArray[0] = parseInt(timeAray[0]);
  timeArray[1] = parseInt(timeArray[1]);
  let totalMinutes = (timeArray[0]*60 + timeArray[1]).toString();
  return totalMinutes;
} else if(timeString.indexOf('h')) > -1 {
  let numberOfHours = parseInt(timeString);
  let totalMinutes = numberOfHours * 60;
} else {
}
  return totalMinutes;
  // console.log(timeArray[1]);
}


timeStringToMin(other);