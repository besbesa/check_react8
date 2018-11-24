import React  from 'react'

class Experience extends React.Component{
    render() {
        return(
            <div>
                <p style={{marginLeft:"4%", color:"#009688", fontSize:"140%", textDecoration:"underline", marginBottom:"-1%"}}>
                    {this.props.ismha}
                </p>
                <p className="bloc2">
                    {this.props.date}
                </p>
                <div className="bloc1" >
                    <p style={{marginBottom:"0%"}}>{this.props.blablabla1}</p>
				    <p style={{marginBottom:"0%"}}>{this.props.blablabla2}</p>
                    <p>{this.props.blablabla3}</p>
                </div>
            </div>
        )
    }
}
export default Experience