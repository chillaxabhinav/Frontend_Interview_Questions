import { useState } from 'react';

const StarRating = (props) => {
    const { rating, onChange, size = 5 } = props;

    const [hoverState, setHoverState] = useState(0);

    const mouseEnter = (e) => {
        const target = e.target.getAttribute('data-id');
        setHoverState(target);
    };

    const mouseLeave = () => setHoverState(0);

    const onClickStar = (e) => {
        const target = e.target.getAttribute('data-id');
        onChange(target);
    };

    return (
        Array(size).fill("").map((_, index) => {
            let thisStarClass = 'star';
            if ((index + 1) <= hoverState) {
                thisStarClass += ' hover';
            } else if ((index + 1) <= rating && hoverState === 0) {
                thisStarClass += ' active';
            }
            return (
                <span
                    key={index+1}
                    className={thisStarClass}
                    data-id={index+1}
                    onMouseEnter={(e) => mouseEnter(e)}
                    onMouseLeave={() => mouseLeave()}
                    onClick={(e) => onClickStar(e)}
                >
                    &#9733;
                </span>
            );
        })
    );
};

export default StarRating;
