// export interface IExtractedFile {
//     original_file: string;
//     original_file_name: string;
//     uuid: string;
//     original_file_uuid: string;
//     dossier_file_uuid: string;
//     extracted_files: string[];
//     status: string;
//     last_update: string;
//     created_at: string;
//     exceptions: ExtractedFileExceptions;
//   }
export interface FormFieldProps {
    name: string;
    label?: string;
    mode?: string;
    type?:string;
    min?:number;
    required?: boolean;
    searchable?: boolean;
    fieldDescription?:string;
    placeholder?:string;
    disabled?:boolean;
  }

  export  { }