import React, {useState} from 'react';
import {QrReader} from 'react-qr-reader';
import useClippy from 'use-clippy';
import {ClipboardIcon} from '@heroicons/react/solid';
import Button from './Button';

export default function DemiScan({parentCallback}){
  const [template, setTemplate] = useState('')
  const [clipboard, setClipboard] = useClippy('')

  const handlePaste = (event) => {
    // alert(event)
    console.log(event)
    console.log(clipboard)
    setTemplate(clipboard)
  }
  
  /*
  Test paste value
  bitcoin:bc1qylh3u67j673h6y6alv70m0pl2yz53tzhvxgg7u?amount=0.00001&label=sbddesign%3A%20For%20lunch%20Tuesday&message=For%20lunch%20Tuesday&lightning=lnbc10u1p3pj257pp5yztkwjcz5ftl5laxkav23zmzekaw37zk6kmv80pk4xaev5qhtz7qdpdwd3xger9wd5kwm36yprx7u3qd36kucmgyp282etnv3shjcqzpgxqyz5vqsp5usyc4lk9chsfp53kvcnvq456ganh60d89reykdngsmtj6yw3nhvq9qyyssqjcewm5cjwz4a6rfjx77c490yced6pemk0upkxhy89cmm7sct66k8gneanwykzgdrwrfje69h9u5u0w57rrcsysas7gadwmzxc8c6t0spjazup6
  */
  
  const [text, setText] = useState('')

  function updateText(e){
    setText(e.target.value)
  }
  
  return(
    <div className="flex flex-col justify-between items-center w-full h-full">

      <div className="w-full h-100">
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
      <div className="flex flex-row items-center justify-center p-4">
        <input
          type="text"
          value={template}
          placeholder="Paste bitcoin payment request or other data"
          className="p-4 text-neutral-800 rounded-lg w-full m-8"
          onChange={updateText}
        />
        <Button onClick={handlePaste}>
          <span className="sr-only">Paste</span>
          <ClipboardIcon className="w-8 h-8" />
        </Button>
      </div>
      
    </div>
  )
}