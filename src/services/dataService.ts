
import inputParser from "../utils/inputParser";

const parseFormData = (data : any) => {
    if(!data){
        return
    }
let parsedObject: any = [];

data.map((dat : any,index:number)=>{
    

        // console.log(dat)
// console.log(dat)

let currentObject : any = {}
        Object.keys(dat).forEach((key,index)=>{
            

            if(typeof dat[key] !== 'object' && dat[key].constructor !== Array && dat[key]){
                // console.log(key)

                currentObject[key] =   dat[key]
                // console.log('currentObject ===>' ,'keyyy== >', key, dat[key])
                                
                            


            }



        })
        parsedObject.push(currentObject)


})
console.log(parsedObject)



return parsedObject



    // console.log(parsedObject)
    

}

export default {
    parseFormData
}


