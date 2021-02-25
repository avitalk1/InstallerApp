import "./styles.css";
import React, {useState, useEffect} from 'react';
import {API} from 'aws-amplify';
import { withAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import QRCode from "qrcode.react";
import {createInstllerInfo} from './graphql/mutations';
const initInfoData = {
  installerUsername: '',
  HouseID:'',
  isActive: false
}
function App() {
  const [infoData, setInfoData] = useState(initInfoData)
  // const [isReadyForSubmit, setIsReadyForSubmit] = useState(false);
  const [isQRGenerated, setIsQRGenerated] = useState(false)
  
  async function createInfoData() {
    if(!infoData.installerUsername || !infoData.HouseID) return
    await API.graphql({query: createInstllerInfo, variables:{input: infoData} })
    setInfoData(initInfoData)
    setIsQRGenerated(false)
  }
  function handeGenerateQRCode() {
    console.log('handeGenerateQRCode')
    setIsQRGenerated(true);
  }
  function handleDownloadQRCode () {
    const canvas = document.querySelector('.QRCode-container > canvas');
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${infoData.HouseID}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
  return (
    <div className="App">
      <h1>Generate House QR</h1>
      <div className="input-container">
        <input
          onChange = {event => setInfoData({...infoData, 'installerUsername': event.target.value})}
          placeholder='Installer Username'
          value={infoData.installerUsername}
        />
        <input
          onChange = {event => setInfoData({...infoData, 'HouseID': event.target.value})}
          placeholder='Main Device ID'
          value={infoData.HouseID}
        />
     
      {
        isQRGenerated ?
        <div className="QRCode-container">
        <QRCode includeMargin value={infoData.HouseID} />
        </div>: null
      }
       </div>
      {
        !isQRGenerated ? 
        <button onClick={handeGenerateQRCode}>Generate QR Code</button> :
        <div>
            <button onClick={handleDownloadQRCode}>Download QR Code</button>
            <button onClick={createInfoData}>Submit</button>
        </div>
         
      }
     
      <AmplifySignOut/>
    </div>
  );
}

export default withAuthenticator(App);
