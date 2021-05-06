import React from 'react';
import Showdown from 'showdown';


const NoteDisplay = (props) => {
    const converter = new Showdown.Converter();
    const contentDisplay = converter.makeHtml(props.content);
    const contentMarkup = { __html: contentDisplay }



    return (
        <div>
            <div>
                <h4 className="text-danger">{props.title}</h4>
            </div>
            <div>
                <p dangerouslySetInnerHTML={contentMarkup} />
            </div>
        </div>
    )
}




export default NoteDisplay;