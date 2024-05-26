import { useState } from "react";

const emojis = {
    folder: '🗂️',
    file: '📃'
};

const Folder = (props) => {
    const { explorer } = props;

    const [expand, setExpand] = useState(false);

    if (explorer.isFolder) {
        return (
            <>
                <div key={explorer.id} className='folder' onClick={() => setExpand((prev) => !prev)}>
                    <span>{emojis.folder} {explorer.name}</span>
                </div>
                <div className='folder-items' style={{ display: expand ? 'flex' : 'none' }}>
                    {explorer.items.map(item => {
                        return (
                            <Folder key={item.id} explorer={item} />
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
