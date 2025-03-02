/** DESCRIPTION:
A traveling salesman has to visit clients. He got each client's address e.g. "432 Main Long Road St. Louisville OH 43071" as a list.

The basic zipcode format usually consists of two capital letters followed by a white space and five digits. The list of clients to visit was given as a string of all addresses, each separated from the others by a comma, e.g. :

"123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432".

To ease his travel he wants to group the list by zipcode.

Task
The function travel will take two parameters r (addresses' list of all clients' as a string) and zipcode and returns a string in the following format:

zipcode:street and town,street and town,.../house number,house number,...

The street numbers must be in the same order as the streets where they belong.

If a given zipcode doesn't exist in the list of clients' addresses return "zipcode:/"

Examples
r = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432"

travel(r, "OH 43071") --> "OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432"

travel(r, "NY 56432") --> "NY 56432:High Street Pollocksville/786"

travel(r, "NY 5643") --> "NY 5643:/"*/
function travel(r, zipcode) {
  
    if(!zipcode || !(/[A-Z]{2} [0-9]{5}/).test(zipcode)) 
      return `${zipcode}:/`;
  
    const addresses = r.split(',');
    let addAtZip = addresses.filter(address => address.includes(zipcode));
  
    if (!addAtZip) 
      return `${zipcode}:/`
  
    addAtZip = addAtZip.map(address => [address.slice(0, address.indexOf(' ')), address.slice(address.indexOf(' ')+1, address.indexOf(zipcode)-1), address.slice(address.indexOf(zipcode))]);
  
    return `${zipcode}:${addAtZip.map(a => a[1]).join(',')}/${addAtZip.map(a=> a[0]).join(',')}`;
  }