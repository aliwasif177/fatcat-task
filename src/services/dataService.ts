

const parseFormData = (data : any) => {
    if(!data){
        return
    }
let parsedObject: any = [];

data.map((dat : any,index:number)=>{
let currentObject : any = {}
        Object.keys(dat).forEach((key,index)=>{
            if(typeof dat[key] !== 'object' && dat[key].constructor !== Array && dat[key]){
                currentObject[key] =   dat[key]
            }
        })
        parsedObject.push(currentObject)
})
        return parsedObject
}

export default {
    parseFormData
}


