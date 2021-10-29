export const countModify = (count = 0, action) => {
    switch(action.type){
        case "Add":
            return count + 1;
        case "Minus":
            return count - 1;
        default:
            return count;
    }
}