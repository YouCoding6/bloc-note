import React from 'react';
import ReactDOM from 'react-dom';
import MarkDownInput from './components/MarkDownInput';
import NoteDisplay from './components/NoteDisplay';
import NoteList from './components/NoteList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'

const App = () => {

    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');


    const changeTitle = (event) => {
        setTitle(event.target.value);
    };

    const changeContent = (event) => {
        setContent(event.target.value);
    };

    const handleSave = () => {
        localStorage.setItem(title, content);
        document.location.reload();
    }




    return (
        <div className="container m-5">
            <div className="row">
                <div className="col-md-4">
                    <NoteList />
                </div>
                <div className="col-md-6 offset-md-1">
                    <NoteDisplay title={title} content={content} />
                    <MarkDownInput title={title} content={content} changeTitle={changeTitle} changeContent={changeContent} save={handleSave} />
                </div>
            </div>
        </div>
    )
}




ReactDOM.render(<App />, document.getElementById("root"));