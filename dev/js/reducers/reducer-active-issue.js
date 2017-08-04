export default function(state=null, action){
    switch(action.type){
        case "ISSUE_SELECTED":
        //console.log(action.payload);
        return action.payload;
        break;
    }
    return state;
}