type GreetProps = {
    name: string,
    messageCount: number,
    isLogged: boolean
}

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2> {props.isLogged ? `Hi ${props.name}..! You have ${props.messageCount} unread messages` : "Welcome Guest" }</h2>
    </div>
  )
}
