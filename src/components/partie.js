import React  from 'react'

class Partie extends React.Component{
    render() {
        return(
            <p style={{backgroundColor:"#00796B", marginTop:"5%", marginBottom:"5%", fontSize:"130%"}}>
                {this.props.name}
            </p>
        )
    }
}
export default Partie