/**
 * array used as database, since focus is on the auth-implementation
 */
database = ( function() {
    const dataStore = [
        {
            username: "anders",
            password: "password"
        }
    ]
    const addUser = (entry) => dataStore.push(entry)
    const validateUser = (entry) => {
        console.log(entry.password)
        let isValid = false
        dataStore.forEach(element=>{
            if(element.password=== entry.password && element.username===entry.username){
                isValid = true;
            } 
        })
        if (isValid){
            
            return true
        }else{
            return false
        }
        
    }
    const getAll = () => {return dataStore}
    return {addUser, validateUser, getAll}
}() );

module.exports = database;