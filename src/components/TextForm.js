import React ,{ useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleonChange=(event)=>{
        setText(event.target.value);
    }
    const handleupclick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Upper case has been Activated','Success')
    }

    const handleloclick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Lower has been Activated','Success')
    }

    const Capitalize=()=>{
        let newText = text.split(" ").map(el=> el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
        props.showAlert('Text has been Capitalized','Success')
    }

    const ClearText=()=>{
        let newText = "";
        setText(newText);
        props.showAlert('Text has been Cleard','Success')
    }

    const SentencedCase=()=>{
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
        props.showAlert('Sentenced Case has been Activated','Success')
    }

    const CopyText=()=>{
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert('Text copy to clipboard','Success')
    }

    const removeSpaces=()=>{
        let newText=text.replace(/ /g,'');
        setText(newText);
        props.showAlert('Extra spaces has been removed','Success')
    }

  return (
    <>
    <div>
    <div className="container" style={{color :  props.mode ==='dark' ? 'white' : 'black'}}>
        <h3>{props.heading } </h3>
        <div className="my-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleonChange}
        style={{ backgroundColor: props.mode ==='dark' ? 'grey' : 'white' , color :  props.mode ==='dark' ? 'white' : 'black'}} rows="8"></textarea><br />
        <button type="button" className="btn btn-primary mx-2"  onClick={handleupclick} >Uppercase </button> 
        <button type="button" className="btn btn-primary mx-2"  onClick={handleloclick} >Lowercase</button>
        <button type="button" className="btn btn-primary mx-2"  onClick={Capitalize} >Capitalized</button>
        <button type="button" className="btn btn-primary mx-2"  onClick={SentencedCase} >Sentenced Case</button>
        <button type="button" className="btn btn-primary mx-2"  onClick={ClearText} >CLear</button>
        <button type="button" className="btn btn-primary mx-2"  onClick={CopyText} >Copy Text</button>
        <button type="button" className="btn btn-primary mx-2"  onClick={removeSpaces}>Remove Spaces </button>

        </div>
    </div>
    <div className="container" style={{color :  props.mode ==='dark' ? 'white' : 'black'}}>
        <h3>Words counter </h3>
        <p>{text.split(" ").length} words and {text.length} charcters</p>
        <p> {0.008 * text.split(" ").length} minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length===0 ? 'Write something in the above box to preview it here' : text }</p>
    </div>
    </div>
    </>
  )
}
