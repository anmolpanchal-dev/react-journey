
const ErrMsg = ({item}) => {
    return <>
    {item.length ===0 ? <p>No AI Tools Found</p> : null}
    </>
}

export default ErrMsg;