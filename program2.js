
function areDistinct(str, i, j)
{
    var visited = new Array(256);

    for(var k = i; k <= j; k++)
    {
        if (visited[str.charAt(k) ] == true)
            return false;
            
        visited[str.charAt(k)] = true;
    }
    return true;
}

function longestSubstring(s) {


    // Implementation of longestSubstring function
    var n = str.length;
    
    // Result
    var res = 0; 
    
    for(var i = 0; i < n; i++)
        for(var j = i; j < n; j++)
            if (areDistinct(str, i, j))
                res = Math.max(res, j - i + 1);
                
    return res;
}

module.exports = { longestSubstring };
