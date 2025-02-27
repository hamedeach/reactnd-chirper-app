
const logger =(store)=>(next)=>(action)=>{
    console.group(action.type)
    console.log('The Action is : ',action)
    const returnValue =next(action);
    console.log('The New State is :',store.getState())
    console.groupEnd();
    return returnValue

}

export default logger;