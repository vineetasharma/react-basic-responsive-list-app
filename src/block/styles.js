import backgroundImg from '../images/background.jpeg';
export const styles = (props) => {

    let styling = {
        blockContainer: {
            margin: 10,
            backgroundColor: "#a1a1a1",
            width: props.width,
            height: 100,
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "cover"
        },
        inlineFlex: {
            display: "inline-flex"
        },
        padding5: {
            padding: 5
        },
        hoverState: {
            top: -120,
            zIndex: 1000,
            position: "relative",
            left: 5,
            display: "flex"
        },
        disabledIcon: {
            padding: 5,
            cursor: "not-allowed",
            margin: 5, borderRadius: 4,
            backgroundColor: "#b1b1b1",
            color: "#fff"
        },
        activeIcon: {
            padding: 5,
            cursor: "pointer",
            margin: 5,
            borderRadius: 4,
            backgroundColor: "#b1b1b1",
            color: "#f00"
        }
    }
    return styling;
}