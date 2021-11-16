import { createStore} from "redux";


const ADD = "ADD"
const MINUS = "MINUS"

const countModify = (count= 0, action) =>{
    switch(action.type){
        case ADD:
            return count +=1
        case MINUS:
            return count -= 1
    }
}

const store = createStore(countModify);


store.dispatch({type: "ADD"})