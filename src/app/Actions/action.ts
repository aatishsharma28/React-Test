import AjaxService from '../Services/Ajax.service';

let service=new AjaxService();

export function getUsersData(query){
    // service.getUsersData(query).then((res)=>{
    //     console.log("Data",res)
    // })
    let type='GET_USERS'
    return function(dispatch){
        // console.log("Service",service)
        return service.getUsersData(query).then((res)=>{
            dispatch({type:type,payload:res.data.items})
        })
        .catch((error)=>{
            console.log("Error",error)
        })
    }
}