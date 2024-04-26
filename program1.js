function smallestMissingPositiveInteger(A) {


    // Implement the function smallest_missing_positive_integer
    let n = A.length;
        let present = new Array(n+1);
        
        
        for(let i=0;i<n+1;i++)
        {
            present[i]=false;
        }
        for (let i = 0; i < n; i++)
        {
            if (A[i] > 0 && A[i] <= n)
            {
                present[A[i]] = true;
            }
        }
        for (let i = 1; i <= n; i++)
        {
            if (!present[i])
            {
                return i;
            }
        }
        // If the original array was of the
        // type {1, 2, 3} in its sorted form
        return n + 1;
  
  }
  
  module.exports = smallestMissingPositiveInteger;

