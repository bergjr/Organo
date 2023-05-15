import './Flex.css';
const Flex = (props) => {
    return (
        <section className="flex-container">
            {props.children}
        </section>
    )
}

export default Flex;