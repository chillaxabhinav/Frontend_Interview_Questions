const Carousel = (props) => {
    const {
        images = [],
        isLoading = false,
    } = props;

    if (isLoading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div>
            Carousel
        </div>
    )
};

export default Carousel;
