const InputField = function({label, value, setValue}){

    const handleInput = function(e){
        setValue(e.target.value)
    };

    return(
        <>
        <label htmlFor={label}>{label}: </label>
        <input onChange={handleInput} type="text" id={label} value={value}/>
        </>
    )

};

export default InputField