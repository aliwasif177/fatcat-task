import { FormProvider, useForm } from "react-hook-form"
import { TextArea } from "../../components/form/textArea"
import { TextInput } from "../../components/form/textInput"
import inputParser from "../../utils/inputParser"

const DataRenderer = (props: any) => {
    const form = useForm({
        mode: 'all',
        defaultValues: props.dataProps,
        shouldUnregister: true,
    });
    return (
        <div>
            <div>
                <>
                    <FormProvider {...form}>
                        <form>
                            {Object.keys(props.dataProps).map((key, index) => {
                                console.log(props.dataProps[key].value)
                                return (
                                    <>
                                        <div key={index} >
                                            {inputParser.formInputParser(key, props.dataProps[key])?.type === 'textarea' ?

                                                <TextArea name={key} {...inputParser.formInputParser(key, props.dataProps[key])} />
                                                :
                                                <TextInput name={key}
                                                    {...inputParser.formInputParser(key, props.dataProps[key])}
                                                />
                                            }
                                        </div>
                                        <div>

                                            {props.dataProps[key]}
                                        </div>
                                    </>
                                )
                            })}
                        </form>
                    </FormProvider>
                </>

            </div>



        </div>


    )



}

export { DataRenderer }