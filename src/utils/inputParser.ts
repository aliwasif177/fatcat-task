import { regexes } from "../constants/regex"

const formInputParser = (key:string , value:any) => {
    
    if(value){
    if(value.toString().match(regexes.emailRegex)){

        return {
            name:key,
            value:value,
            placeholder:key,
            type:'email'
        }
        
    }
     if(value.toString().match(regexes.boolRegex)){
        return {
            name:key,
            value:value,
            placeholder:key,
            type:'radio'
        }

    }
    else if(value.toString().match(regexes.numberRegex) || value.toString().match(regexes.decimalRegex)){
        return {
            name:key,
            value:value,
            placeholder:key,
            type:'number'
        }

    }
    else if(value.toString().match(regexes.dateRegex)){
        return {
            name:key,
            value:value,
            placeholder:key,
            type:'date'
        }

    }
    else if(value.toString().match(regexes.textRegex)){
        return {
            name:key,
            value:value,
            placeholder:key,
            type:'text'
        }

    }
    else if(value.toString().length>30){
        return {
            name:key,
            value:value,
            placeholder:key,
            type:'textarea'
        }

    }
    else{
        return {
            name:key,
            value:value,
            placeholder:key,
            type:'text'
        }

    }

}






}
export default {
    formInputParser
}