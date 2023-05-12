export const likeOrDislike = (buttons) => {
  let state = "Nothing"; 
  buttons.forEach(button => { 
    if (button === "Like") { 
      if (state === "Like") { 
        state = "Nothing"; 
      } else { 
        state = "Like"; 
      } 
    } else if (button === "Dislike") { 
      if (state === "Dislike") { 
        state = "Nothing"; 
      } else { 
        state = "Dislike"; 
      } 
    } 
  }); 
  return state; 
};