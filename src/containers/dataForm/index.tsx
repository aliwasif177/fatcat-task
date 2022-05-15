import { useEffect, useState } from "react";
import { data } from "../../constants/data";
import dataService from "../../services/dataService";
import { DataRenderer } from "../dataRenderer";


const DataFrom: React.FC = () => {


    const [initialData, setInitialData] = useState<[any]>(dataService.parseFormData(data))

    return (
        <div className="App">
            <div className="row">
                {initialData && initialData.map((dat, i) => {
                    return (
                        <>
                            <div className="col-6">
                                <div key={i} className='py-5'>
                                    <h1 className="text-primary">
                                        {`Block ${i}`}
                                    </h1>
                                    <DataRenderer dataProps={dat} />
                                </div>
                            </div>
                        </>

                    )
                })}
            </div>
        </div>
    );
}

export default DataFrom;
