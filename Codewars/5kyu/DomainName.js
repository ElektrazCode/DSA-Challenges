/** DESCRIPTION:
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"*/
function domainName(url){
    console.log(url);
    let startIndex = url.indexOf('www.') !== -1 ? url.indexOf('www.') + 4 :
                     url.indexOf('//') !== -1 ? url.indexOf('//') + 2 : 0;
    return url.slice(startIndex, url.indexOf('.', startIndex));
  }