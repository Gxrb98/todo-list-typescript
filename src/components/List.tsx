import { Sub } from "../types"

interface Props{
    subs: Array<Sub>
}
export const List = ({subs}: Props) =>{
    return (
        <ul>
        {
          subs.map(
            sub => {
              return(
              <li >
                <img src={sub.avatar} alt= {`Avatar for ${sub.nick}`} />
                <h4>{sub.nick} (<small>{sub.subMonths} Months</small>)</h4>
                <p>{sub.description?.substring(0, 100)}</p>
              </li>)
            }
          )
        }
      </ul>
    )
}