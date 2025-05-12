const waysToCorner = (N, M) => {    
    const dp = Array(N).fill().map(() => Array(M).fill(0));
    dp[0][0] = 1;
    for (let i = 0; i < N; i++) 
        for (let j = 0; j < M; j++) {
            if (i >= 2 && j >= 1) dp[i][j] += dp[i - 2][j - 1];
            if (i >= 1 && j >= 2) dp[i][j] += dp[i - 1][j - 2];
    }
    console.log(dp[N-1][M-1]);
    return(dp[N-1][M-1]);

};

waysToCorner(31, 34);