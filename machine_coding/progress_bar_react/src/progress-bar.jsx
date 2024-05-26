import { useEffect } from 'react';
import { useState } from 'react';

const ProgressBar = ({ value }) => {
    const [percent, setPercent] = useState(value);

    useEffect(() => {
        setPercent(Math.min(100, Math.max(value, 0)));
    }, [value]);
    
    return (
        <div className="progress">
            <span
                style={{
					color: percent > 49 ? 'black' : 'green'
				}}
            >
                {percent.toFixed()+'%'}
            </span>
            <div style={{
                width: `${percent}%`
            }} role='progressbar' aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent} />
        </div>
    )
};

export default ProgressBar;
