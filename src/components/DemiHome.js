import Button from './Button';
import {ReceiveIcon, ScanIcon, SendIcon} from '@bitcoin-design/bitcoin-icons-react/filled';
import React from 'react';

export default function DemiHome({parentCallback}){
  return(
    <div className="flex flex-col justify-between items-center h-full">
      <img src="WalletArt.png" alt="" className="w-64 mt-32" />
      <div className="flex flex-row space-x-4 items-center justify-center pb-8">
        <Button>
          <span className="flex flex-row space-x-2"><span>Send</span> <SendIcon className="w-6 h-6" /></span>
        </Button>
        <Button onClick={()=>(parentCallback('scan'))}>
          <span className="flex flex-row space-x-2"><span>Scan</span> <ScanIcon className="w-6 h-6" /></span>
        </Button>
        <Button>
          <span className="flex flex-row space-x-2"><span>Receive</span> <ReceiveIcon className="w-6 h-6" /></span>
        </Button>
      </div>
    </div>
  )
}