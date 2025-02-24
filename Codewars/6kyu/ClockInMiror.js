/**in the same manner:

05:25 --> 06:35

01:50 --> 10:10

11:58 --> 12:02

12:01 --> 11:59

Please complete the function WhatIsTheTime(timeInMirror), where timeInMirror is the mirrored time (what Peter sees) as string.

Return the real time as a string.

Consider hours to be between 1 <= hour < 13.

So there is no 00:20, instead it is 12:20.

There is no 13:20, instead it is 01:20. */
function WhatIsTheTime(timeInMirror)
{
    let [hours, minutes] = timeInMirror.split(':');

    minutes = (minutes!='00') ? (60 - minutes) : 0;
    hours = (minutes=='00') ? (12 - hours) : (12 - hours -1) ;
    minutes = (minutes<10) ? ('0' + minutes) : minutes;
    hours = (hours===-1) ? 11 : (hours===0) ? 12 : (hours<10) ? ('0' + hours) : hours;
    
  return `${hours}:${minutes}`;
}