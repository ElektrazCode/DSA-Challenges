/**You will be given weights and values of n items. You have to put these items in a knapsack in such a way that you get maximum value. You have to pick the item completely or leave it. You should not break or take a fraction of an item (0 - 1 property)

Implement the function int knapSack(int c, int n, int wt[], int val[]) which takes 4 arguments. 
c  - capacity of knapsack
n  -  number of items
wt[]  - weights of n items
val[]  - values of n items  

You have to return the maximum value that we can get by filling up knapsack following 0 - 1 property. 
Example

input: 
 7
4
1, 3, 4, 5
1, 4, 5, 7

output: 
 7

input: 
 30
4
5 12 20 10
50 60 140 60

output: 
 200 */

function knapSack(c, r, wt, val)
{
    let dp = new int[r+1][c+1];
    
    for(let i=0; i<=r; i++){
        for(let j=0; j<=c; j++){
            if (i==0 || j==0)
                dp[i][j]=0;
            else if(wt[i-1]<= j)
                dp[i][j]= Math.max(val[i-1]+dp[i-1][j-wt[i-1]],dp[i-1][j]);
            else
                dp[i][j]= dp[i-1][j];
        }
    }
    return dp[r][c];
}