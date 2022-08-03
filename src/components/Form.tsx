import { Sub } from '../types'
import useNewSubForm from '../hooks/useNewSubForm'

interface FormProps {
    onNewSub: (newSub: Sub) => void
}



export const Form = ( {onNewSub}: FormProps ) =>{
    const [inputValues, dispatch] = useNewSubForm()

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) =>{
        evt.preventDefault();
        onNewSub(inputValues);
        dispatch({ type: "clear" });
    };

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement |  HTMLTextAreaElement>) => {
        const {name, value} = evt.target

        dispatch({
            type: "change_value",
            payload: {
                inputName: name,
                inputValue: value
            }
        })
    };

    const handleClear = (): void =>{
       dispatch({type: "clear"})
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input onChange={handleChange} value={inputValues.nick} type="text" name="nick" placeholder="NickName"/>
                <input onChange={handleChange} value={inputValues.subMonths} type="text" name="subMonths" placeholder="Months that the sub has been suscribed"/>
                <input onChange={handleChange} value={inputValues.avatar} type="text" name="avatar" placeholder="Avatar"/>
                <textarea onChange={handleChange} value={inputValues.description} name="description" placeholder="Description"/>
                <button onClick={handleClear} type="button">clear the form</button>
                <button type="submit">Save new sub!</button>
            </form>
        </div>
    )
}