import React,{Component} from 'react'
import './add.css'
class Add extends Component{
state={
   name:'',
   age:''
   
    
};
handlechange=(e)=>{
    this.setState({
        [e.target.id]:e.target.value
    })
}

handlsubmit=(e)=>{
    e.preventDefault();
    if(e.target.name.value==='' || e.target.age.value==='')
    {return false;}
    else{
        this.props.ajouter(this.state);
        this.setState({
            
            name:'',
            age:''
        })
    }
   
}
    render()
    {
        const {ajouter}=this.props;
        
        return(
           <div>
            <form onSubmit={this.handlsubmit}>
           <input  className="input1" type="text" name="name"  id="name" value={this.state.name} onChange={this.handlechange}/>
           <input className="input2" type="number" name="age"id="age" value={this.state.age} onChange={this.handlechange}/>
           <input   className="input3" type="submit" value="add"/>
           </form>
           </div>
        )
    }
}
export default Add;