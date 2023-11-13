import { Editor, EditorState, RichUtils, Modifier } from "draft-js";
import EditorButton from "./EditorButton";

export default function NotesBody(props) {
    const onBold = () => {
        props.setEditorState(
            RichUtils.toggleInlineStyle(props.editorState, 'BOLD')
        );
    };

    const onItalic = () => {
        props.setEditorState(
            RichUtils.toggleInlineStyle(props.editorState, 'ITALIC')
        );
    };

    const handleTab = (event) => {
        event.preventDefault();
        const currentContent = props.editorState.getCurrentContent();
        const selection = props.editorState.getSelection();
        const newContent = Modifier.replaceText(currentContent, selection, "\t");
        const newEditorState = EditorState.push(props.editorState, newContent, 'insert-characters');
        props.setEditorState(newEditorState);
    };

    return (
        <div className="w-full bg-gray-600">
            <EditorButton name="B" onChange={onBold}/>
            <EditorButton name="I" onChange={onItalic}/>
            <Editor
                editorState={props.editorState}
                onChange={props.setEditorState}
                onTab={handleTab}
            />
        </div>
    )
}