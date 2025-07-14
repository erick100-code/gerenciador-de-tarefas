function Btnico(props) {
    return (
        <button 
        {...props}
        className="bg-[#90A1B9] text-white rounded-[5px] p-[8px] cursor-pointer">
            {props.children}
        </button>
    )
}

export default Btnico