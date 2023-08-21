import './App.css'
import React from 'react';
import { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";




const App = () => {
  const [Content, setContent] = useState();
  const [isCopied, setCopied] = useClipboard(Content, {successDuration:1000});
  const startListening = () => SpeechRecognition.startListening({ continuous: true, language:'en-IN' });

  const {
    transcript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if(!browserSupportsSpeechRecognition){
    return null;
  }
  return (
    <>
      <div className="container">
          <h1>Speech To Text Converter</h1>
          <br/>

          <div className="content" onClick={ () => setContent(transcript)}>
            {transcript}
          </div>
          <div className="buttons">
            <button onClick={setCopied}>
              {isCopied ? 'Copied!' : 'Copy to clipboard'}
            </button>
            <button onClick={startListening}>Start ►</button>
            <button onClick={SpeechRecognition.stopListening}>Stop II</button>
          </div>
      </div>
    </>
  );
}

export default App