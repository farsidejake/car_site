let carPush = -1;
let rate = -1;
let chargeTimes = []; //did not have ;
let chargeDisplayTime = [];
let currentTime;
let currentDateString;
let carPosition;
let timeDisplay = 1;  //1 == 24 hour -1 == 12 hour
//creating the arrays for different push speeds
const chargeTimes6 = ['02:00', '06:00', '10:00', '14:00', '18:00', '22:00'];
const chargeTimes6_12hr = ['2:00 AM', '6:00 Am', '10:00 Am', '2:00 PM', '6:00 PM', '10:00 PM'];

const chargeTimes7 = ['01:26', '04:52', '08:18', '11:44', '15:10', '18:36', '22:00'];
const chargeTimes7_12hr = ['1:26 Am', '4:52 Am', '8:18 AM', '11:44 AM', '3:10 PM', '6:36 PM', '10:00 PM'];

const chargeTimes8 = ['00:30', '03:30', '06:30', '09:30', '12:30', '15:30', '18:30', '21:30'];
const chargeTimes8_12hr = ['12:30 AM', '3:30 AM', '6:30 AM', '9:30 AM', '12:30 PM', '3:30 PM', '6:30 PM', '9:30 PM'];

const chargeTimes9 = ['00:30', '03:10', '05:50', '08:30', '11:10', '13:50', '16:30', '19:10', '21:50'];
const chargeTimes9_12hr = ['12:30 AM', '3:10 AM', '5:50 AM', '8:30 AM', '11:10 AM', '1:50 PM', '4:30 PM', '7:10 PM', '9:50 PM'];

const chargeTimes10 = ['00:14', '02:38', '05:02', '07:26', '09:50', '12:14', '14:38', '17:02', '19:26', '21:50'];
const chargeTimes10_12hr = ['12:14 AM', '2:38 AM', '5:02 AM', '7:26 AM', '9:50 AM', '12:14 PM', '2:38 PM', '5:02 PM', '7:26 PM', '9:50 PM'];

const chargeTimes11 = ['00:48', '02:59', '05:10', '07:20', '09:31', '11:42', '13:53', '16:04', '18:15', '20:26', '22:37'];
const chargeTimes11_12hr = ['12:48 AM', '2:59 AM', '5:10 AM', '7:20 AM', '9:31 AM', '11:42 AM', '1:53 PM', '4:04 PM', '6:15 PM', '8:26 PM', '10:37 PM'];

const chargeTimes12 = ['00:15', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];
const chargeTimes12_12hr = ['12:15 AM', '2:00 AM', '4:00 AM', '6:00 AM', '8:00 AM', '10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM', '8:00 PM', '10:00 PM'];

const chargeTimes13 = ['01:45', '03:40', '05:30', '07:20', '09:10', '11:00', '12:50', '14:40', '16:30', '18:20', '20:10', '22:00', '23:50'];
const chargeTimes13_12hr = ['1:45 AM', '3:40 AM', '5:30 AM', '7:20 AM', '9:10 AM', '11:00 AM', '12:50 PM', '2:40 PM', '4:30 PM', '6:20 PM', '8:10 PM', '10:00 PM', '11:50 PM'];

const chargeTimes14 = ['00:33', '02:16', '04:00', '05:43', '07:20', '09:03', '10:46', '12:30', '14:13', '15:56', '17:40', '19:23', '21:05', '22:50'];
const chargeTimes14_12hr = ['12:33 AM', '2:16 AM', '4:00 AM', '5:43 AM', '7:20 AM', '9:03 AM', '10:46 AM', '12:30 PM', '2:13 PM', '3:56 PM', '5:40 PM', '7:23 PM', '9:05 PM', '10:50 PM'];

function getRadioValue(){

    carPush = Number(document.querySelector('input[name="car_push"]:checked').value);
    console.log(carPush);
    
}

function selectChargeTimes(){
    //switch statement
    switch(carPush) {
        case 6:
            //array
            chargeTimes = [];
            chargeTimes = chargeTimes6;
            chargeDisplayTime = [];
            if (timeDisplay == 1){chargeDisplayTime = chargeTimes6;}
            else {chargeDisplayTime = chargeTimes6_12hr;}
            break;
        case 7:
            //array
            chargeTimes = [];
            chargeTimes = chargeTimes7;
            chargeDisplayTime = [];
            if (timeDisplay == 1){chargeDisplayTime = chargeTimes7;}
            else {chargeDisplayTime = chargeTimes7_12hr;}
            break;
        case 8:
            //array
            chargeTimes = [];
            chargeTimes = chargeTimes8;
            chargeDisplayTime = [];
            if (timeDisplay == 1){chargeDisplayTime = chargeTimes8;}
            else {chargeDisplayTime = chargeTimes8_12hr;}
            break;
        case 9:
            //array
            chargeTimes = [];
            chargeTimes = chargeTimes9;
            chargeDisplayTime = [];
            if (timeDisplay == 1){chargeDisplayTime = chargeTimes9;}
            else {chargeDisplayTime = chargeTimes9_12hr;}
            break;
        case 10:
            //array
            chargeTimes = [];
            chargeTimes = chargeTimes10;
            chargeDisplayTime = [];
            if (timeDisplay == 1){chargeDisplayTime = chargeTimes10;}
            else {chargeDisplayTime = chargeTimes10_12hr;}
            break;
        case 11:
            //array
            chargeTimes = [];
            chargeTimes = chargeTimes11;
            chargeDisplayTime = [];
            if (timeDisplay == 1){chargeDisplayTime = chargeTimes11;}
            else {chargeDisplayTime = chargeTimes11_12hr;}
            break;
        case 12:
            //array
            chargeTimes = [];
            chargeTimes = chargeTimes12;
            chargeDisplayTime = [];
            if (timeDisplay == 1){chargeDisplayTime = chargeTimes12;}
            else {chargeDisplayTime = chargeTimes12_12hr;}
            break;
        case 13:
            //array
            chargeTimes = [];
            chargeTimes = chargeTimes13;
            chargeDisplayTime = [];
            if (timeDisplay == 1){chargeDisplayTime = chargeTimes13;}
            else {chargeDisplayTime = chargeTimes13_12hr;}
            break;
        case 14:
            //arrray
            chargeTimes = [];
            chargeTimes = chargeTimes14;
            chargeDisplayTime = [];
            if (timeDisplay == 1){chargeDisplayTime = chargeTimes14;}
            else {chargeDisplayTime = chargeTimes14_12hr;}
            break;
    }
    return chargeTimes;

}

function findPreviousCharge(times){
    //get currnet time
    //pull out the hour
    //pull out the minutes
    //check against list of times... hours >= listHour
    // if(currentHour == listHour) {if(currentMinute <= list minute)}
    //will also need a if list hour is the last list item.. and also first list item to handle wrapping
    currentTime = new Date();
    console.log(currentTime);
    currentDateString = currentTime.toDateString();
    console.log(currentDateString);
    //bellow is code from chatGP
    const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
    let mostRecent = null;
    let smallestDiff = Infinity;
    
    for (const time of times){
      const [h,m] = time.split(":").map(Number);
      const timeMinutes = h * 60 + m;

      //calculate the difference from now allowinf for wrapping around midnight
      let diff = currentMinutes - timeMinutes;
      if (diff < 0) {
        diff += 24 * 60; //wrap around midnight
      }
      
      //we want the smallest positive difference
      if (diff < smallestDiff){
        smallestDiff = diff;
        mostRecent = time;
    }
    
  }
  console.log("mostRecent time:", mostRecent);
  return mostRecent;

}

function timeMath(mostRecent){
    //to avoid certain failure conditions...
    //time.length - 1     goes to last element
    // so if(currentTime < time[0] && currentTime > time[time.length - 1])  set previous charge to time[time.length -1]
    rate = 24 / carPush;
    console.log('maths')
    currentTime = new Date();
    const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
    const [h,m] = mostRecent.split(":").map(Number);
    const recentMinutes = h * 60 + m;
    let diff = currentMinutes - recentMinutes; //should be time since last charge in minutes
    console.log("diff: ", diff);

   carPosition = diff * (120 / (rate * 60));
  console.log("carPosition: ", carPosition);
}

function main(){
    //actual start point
    getRadioValue();
    selectChargeTimes();

    //findPreviousCharge(chargeTimes);
    timeMath(findPreviousCharge(chargeTimes));

    output();
}

function toggle_time_display(){
  if (timeDisplay == 1){
    timeDisplay = -1;
    main();
  }
  else if (timeDisplay == -1){
    timeDisplay = 1;
    main();
  }
  else{
    timeDisplay = 1;
    main();
  }
}

function output(){
    //output to certain things
    console.log('output')
    document.getElementById('chargeRateDisplay').innerHTML = rate;
    clearHTML("chargeTimesDisplay")
    chargeDisplayTime.forEach(displayChargeTimes);
    document.getElementById('carPositionDisplay').innerHTML = carPosition;

};

function displayChargeTimes(time){
    //display the charge times on page in nice way, when a button is pressed -- not activated in main()
    //maybe activated in main... will decide later.
    //need a way to clear text... when I press the button, so it doesn't keep adding lines.
    let p = document.createElement('p');
    p.innerText = time;
    document.querySelector('#chargeTimesDisplay').appendChild(p); 
}

function clearHTML(elementID){
    document.getElementById(elementID).innerHTML = "";
}
