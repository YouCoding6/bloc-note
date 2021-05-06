import React from "react";



const NoteList = (props) => {


    let notes = { ...localStorage }

    let keys = []

    for (let key in notes) {
        keys.push(key);
    }
    console.log(keys)

    // for (var i = 0; i < localStorage.length; i++) {
    //     console.log(localStorage.getItem(localStorage.key(i)));
    // }


    return (

        <div>
            <button className="btn btn-danger w-75 mb-3">Ajouter une note</button>
            {keys.map((key, index) =>
                <div key={index}>
                    <h4>{key}</h4>
                    <p>{localStorage.getItem(key)}</p>
                </div>)}

        </div>


    )


}



export default NoteList;