import React from 'react';

const MarkDownInput = (props) => {



    return (
        <div className="form-group">
            <div>

            </div>
            <div className="markdownInput">
                <input className="form-control markdown mt-2" value={props.title} onChange={props.changeTitle} />
                <textarea className="form-control markdown mt-2" rows="4" value={props.content} onChange={props.changeContent} />
                <button className="btn btn-danger mt-2" onClick={props.save}>Sauvegarder</button>
            </div>
        </div>
    );
}




export default MarkDownInput;