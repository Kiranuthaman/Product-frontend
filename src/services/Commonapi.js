import axios from "axios"

export const commonApi = async(httpRequest , url , reqData)=>
{
    const reqConfig = 
    {
        method : httpRequest,
        url,
        data : reqData , 
        headers:{"Content-Type":"application/json"}
    }
    return await axios(reqConfig).then((result) => 
      {return result}
    ).catch((err)=>
    {return err}
    )
}