export default function Form(){
    return(
        <form>
            <label>
                Email:
                <input type="email" name="email" />
            </label>
        <br />
            <label>
                Password:
                <input type="password" name="password" />
            </label>
        <br />
        <button type="submit">Submit</button>
        </form>
    )
}