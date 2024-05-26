import { useState, useRef } from "react";

const emojis = {
    folder: '🗂️',
    file: '📃'
};

const Folder = (props) => {
    const { explorer, handleInsertNode } = props;

    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: false,
    });

    const handleNewFileFolder = (e, isFolder) => {
        e.stopPropagation();
        setExpand(true);
        setShowInput((prev) => {
            return {
                ...prev,
                visible: true,
                isFolder
            }
        });
    };

    const onAddFolder = (e) => {
        if (e.keyCode !== 13 || !e.target.value) return;
        // add folder or file
        handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
        setShowInput((prev) => {
            return {
                ...prev,
                visible: false,
            }
        });
    }

    if (explorer.isFolder) {
        return (
            <>
                <div key={explorer.id} className='folder' onClick={() => setExpand((prev) => !prev)}>
                    <span>{emojis.folder} {explorer.name}</span>
                    <div className='folder-buttons'>
                        <button onClick={(e) => handleNewFileFolder(e, true)}>Folder +</button>
                        <button onClick={(e) => handleNewFileFolder(e, false)}>File +</button>
                    </div>
                </div>
                <div className='folder-items' style={{ display: expand ? 'flex' : 'none' }}>
                    {showInput.visible && (
                        <div className='input-container'>
                            <span>{showInput.isFolder ? emojis.folder : emojis.file}</span>
                            <input
                                onKeyDown={onAddFolder}
                                onBlur={() => {
                                    setShowInput((prev) => {
                                        return {
                                            ...prev,
                                            visible: false
                                        }
                                    });  
                                }}
                                autoFocus
                                className="input-container__input"
                                type="text"
                            />
                        </div>
                    )}
                    {explorer.items.map(item => {
                        return (
                            <Folder key={item.id} explorer={item} handleInsertNode={handleInsertNode} />
                        )
                    })}
                </div>
            </>
        )
    } else {
        return (
            <span
                className='file'
                key={explorer.id}
            >
                {emojis.file} {explorer.name}
            </span>
        )
    }
};

export default Folder;
