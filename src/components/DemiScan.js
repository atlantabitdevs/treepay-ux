import React, {useState} from 'react';
import {QrReader} from 'react-qr-reader';
import Modal from '@material-ui/core/Modal';

export default function DemiScan({parentCallback}){
  const [template, setTemplate] = useState('')
  
  return(
    <div className="flex flex-col justify-between items-center w-full h-full">

      <div className="w-full">
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              alert(result?.text)
              setTemplate(result?.text);
            }
            if (!!error) {
              console.info(error);
            }
          }}
          style="width: 100%; height: 100%;"
        />
      </div>
        

    </div>
  )
}