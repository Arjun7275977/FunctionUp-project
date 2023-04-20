


export default function Invitation(props){
    return(
       <div>

       <p> Subject :{props.subject}
        <br/>

  To : {props.to}
  <br/>
  Hi ,{props.name}
  <br/>
  
  I am having a{props.inv}  next Friday at my Home . Would you like to come ? It will be fun . Lots of people from my school are coming . you know some of them {props.hello}
  <br/>
  My house is behind our school , near  {props.avn}
  <br/>
  I hope you will come and see you soon .
  <br/>
  from {props.place}
  </p>

  </div>

    )
}