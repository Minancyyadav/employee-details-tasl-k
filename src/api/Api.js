import { Api_url } from "./Url";

export const signupData = async (signup_data)=>{
    const postHeader = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        }
        ,
        body:JSON.stringify(signup_data)
    }

    const response = await fetch(`${Api_url.add_url}`,postHeader)

    return await response.json();
}

export const getAllEmployee = async()=>
{
    const getHeader = {
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    }
    const response  = await fetch(`${Api_url.get_url}`,getHeader)
    
    return await response.json()
}


export const deleteEmployee = async (id) => {
    console.log(id)
        const deleteHeader = {
            method: 'Delete',
            headers: {
                'Content-Type':'application/json'
            }
        }
        const response = await fetch(`${Api_url.delete_url}/${id}`, deleteHeader)
        console.log(response)
        return await response.json()
    }

    export const loadUser = async (id) => {
        console.log(id)
            const getHeader = {
                method: 'GET',
                headers: {
                    'Content-Type':'application/json'
                    
                }
            }
            const response = await fetch(`${Api_url.single_url}/${id}`, getHeader)
            console.log(response)
            return await response.json()
        }

    export const updateEmployees = async (id , updateData) => {
        console.log(id,updateData)
        delete updateData._id
        const postHeader = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
        }
        const response = await fetch(`${Api_url.update_url}/${id}`, postHeader)
        return await response.json();
    }