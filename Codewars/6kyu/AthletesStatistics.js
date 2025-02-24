/**You are the "computer expert" of a local Athletic Association (C.A.A.). Many teams of runners come to compete. Each time you get a string of all race results of every team who has run. For example here is a string showing the individual results of a team of 5 runners:

"01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"

Each part of the string is of the form: h|m|s where h, m, s (h for hour, m for minutes, s for seconds) are positive or null integer (represented as strings) with one or two digits. Substrings in the input string are separated by , or ,.

To compare the results of the teams you are asked for giving three statistics; range, average and median.

Range : difference between the lowest and highest values. In {4, 6, 9, 3, 7} the lowest value is 3, and the highest is 9, so the range is 9 − 3 = 6.

Mean or Average : To calculate mean, add together all of the numbers in a set and then divide the sum by the total count of numbers.

Median : In statistics, the median is the number separating the higher half of a data sample from the lower half. The median of a finite list of numbers can be found by arranging all the observations from lowest value to highest value and picking the middle one (e.g., the median of {3, 3, 5, 9, 11} is 5) when there is an odd number of observations. If there is an even number of observations, then there is no single middle value; the median is then defined to be the mean of the two middle values (the median of {3, 5, 6, 9} is (5 + 6) / 2 = 5.5).

Your task is to return a string giving these 3 values. For the example given above, the string result will be

"Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"

of the form: "Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"`

where hh, mm, ss are integers (represented by strings) with each 2 digits.

Remarks:
if a result in seconds is ab.xy... it will be given truncated as ab.
if the given string is "" you will return "" */

function formatTime(time){
    time = `${Math.trunc(time/3600)}|${Math.trunc((time-Math.trunc(time/3600)*3600)/60)}|${Math.trunc(time%60)}`;
    time = time.split('|').map(num=> num.length===1 ? '0'+num : num).join('|');
    return time;
  }
  
  function stat(strg) {
    if (strg === '')
      return '';
    let average = 0;
    let range = 0;
    let median = 0;
    
    const scores = strg.split(',').map(score => {
        const temp = score.trim().split('|');
        return (temp[0]*3600 + temp[1]*60 + Math.trunc(temp[2]));
    });
    
    scores.sort((a,b)=> a-b);
    
    range = scores[scores.length-1] - scores[0];
    median = (scores.length %2 !==0) ? scores[Math.trunc(scores.length/2)] : Math.trunc((scores[scores.length/2] + scores[scores.length/2 -1]) /2);
    average = Math.trunc(scores.reduce((sum, score) => sum + score, 0)/scores.length);
   
    range = formatTime(range);
    median = formatTime(median);
    average = formatTime(average);
    
    return `Range: ${range} Average: ${average} Median: ${median}`;
  }