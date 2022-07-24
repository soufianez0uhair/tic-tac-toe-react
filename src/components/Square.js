const Square = ({content,play}) => {
    return (
        <div className="square" onClick={play}>
            {content}
        </div>
    )
}

export default Square;