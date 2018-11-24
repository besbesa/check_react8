import React  from 'react'

class Info extends React.Component{
    render() {
        return(
            <div style={{marginBottom:"7%"}}>
                <p style={{marginBottom:"-1%", fontSize:"90%"}}>
                    {this.props.name}
                </p>
                <p style={{fontSize:"90%"}}>
                    {this.props.des1}
                </p>
            </div>
        )
    }
}
export default Info
