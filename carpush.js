let carPush = -1;
let rate = -1;
let chargeTimes = []
let currentTime;
let currentDateString;
let carPosition;
//creating the arrays for different push speeds
const chargeTimes6 = ['02:00', '06:00', '10:00', '14:00', '18:00', '22:00'];
const chargeTimes7 = ['01:26', '04:52', '08:18', '11:44', '15:10', '18:36', '22:00'];
const chargeTimes8 = ['00:30', '03:30', '06:30', '09:30', '12:30', '15:30', '18:30', '21:30'];
const chargeTimes9 = ['00:30', '03:10', '05:50', '08:30', '11:10', '13:50', '16:30', '19:10', '21:50'];
const chargeTimes10 = ['00:14', '02:38', '05:02', '07:26', '09:50', '12:14', '14:38', '17:02', '19:26', '21:50'];
const chargeTimes11 = ['00:48', '02:59', '05:10', '07:20', '09:31', '11:42', '13:53', '16:04', '18:15', '20:26', '22:37'];
const chargeTimes12 = ['00:15', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];
const chargeTimes13 = ['01:45', '03:40', '05:30', '07:20', '09:10', '11:00', '12:50', '14:40', '16:30', '18:20', '20:10', '22:00', '23:50'];
const chargeTimes14 = ['00:33', '02:16', '04:00', '05:43', '07:20', '09:03', '10:46', '12:30', '14:13', '15:56', '17:40', '19:23', '21:05', '22:50'];

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
            break;
        case 7:
            //array
            chargeTimes = [];
            chargeTimes = chargeTimes7;
            break;
        case 8:
            //array
            chargeTimes = [];
            chargeTimes = chargeTimes8;
            break;
        case 9:
            //array
            chargeTimes = [];
            chargeTimes = chargeTimes9;
            break;
        case 10:
            //array
            chargeTimes = [];
            chargeTimes = chargeTimes10;
            break;
        case 11:
            //array
            chargeTimes = [];
            chargeTimes = chargeTimes11;
            break;
        case 12:
            //array
            chargeTimes = [];
            chargeTimes = chargeTimes12;
            break;
        case 13:
            //array
            chargeTimes = [];
            chargeTimes = chargeTimes13;
            break;
        case 14:
            //arrray
            chargeTimes = [];
            chargeTimes = chargeTimes14;
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

function output(){
    //output to certain things
    console.log('output')
    document.getElementById('chargeRateDisplay').innerHTML = rate;
    clearHTML("chargeTimesDisplay")
    chargeTimes.forEach(displayChargeTimes);
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
