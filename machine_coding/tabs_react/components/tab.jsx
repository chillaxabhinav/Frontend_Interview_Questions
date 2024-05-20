import './style.css';

const Tab = (props) => {
    const { selected, children, className } = props;
    return (
        <div data-id={props['data-id']} className={className+`${selected ? " active" : ""}`}>
            {children}
        </div>
    )
};

export default Tab;