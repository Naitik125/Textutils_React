import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>
    {
        let newText=text.toUpperCase();
        setText(newText)
        // console.log("Upper case is done")
        props.showAlert("Upper Case is Enabled","success")
    }
    const handleLoClick=()=>
    {
        let newText=text.toLowerCase();
        setText(newText)
        // console.log("Upper case is done")
        props.showAlert("Lower Case is Enabled","success")
    }
    const handleOnChange=(event)=>
    {
        // console.log("On CH ange")
        setText(event.target.value)
    }
    const handleClear=(event)=>
    {
        // console.log("On CH ange")
        let newText="";
        setText(newText)
        props.showAlert("Text is Cleared","success")
    }
    const handleCopy=()=>
    {
        let text=document.getElementById("exampleFormControlTextarea1")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is copied","success")
    }
    const [text,setText]=useState("Enter the text")
    // text ='new Text' wrong way to change the state
    // setText('new Text') right way to change the state

    return (
        <>
        <div className='container' style={{ color:props.mode==='dark'?'white':'black'}}>
            <form>
  <div className="form-group">
    <h1> {props.heading}</h1>
    <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1"  rows="8"></textarea>
  </div>
</form>
<button className="btn btn-primary my-2 " onClick={handleUpClick}>To UpperCase</button>
<button className="btn btn-primary my-2  mx-2" onClick={handleLoClick}>To LowerCase</button>
<button className="btn btn-primary my-2  mx-2" onClick={handleClear}>Clear text</button>
<button className="btn btn-primary my-2  mx-2" onClick={handleCopy}>Copy text</button>

        </div>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your text Summary</h1>
            <p>{text.split(" ").length} Words and {text.length} Character</p>
            <p>{.008 * text.split(" ").length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter somethings in text area to preview it here"}</p>

        </div>
        </>
    )
}
