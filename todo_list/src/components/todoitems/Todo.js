import React,{Component} from 'react'
import './todo.css'
class Todo extends Component{

  
    render()
    {
        const {items,deletee} = this.props;
        const liste=items.map(item=>{
          return(
              
              <div key={item.id} >
                  <span className='name'>{item.name}</span>
                  <span className='age'>{item.age}</span>
                  <span className='action icon' onClick={()=>deletee(item.id)}>&times;</span>
                  </div>
          )})
   
     const mess=<p>no item in the liste</p>
       
        return(
            <div className='listeitems'>
        <span className='name title'>name</span>
          <span className='age title'>age</span>
          <span className='action title'>actions</span>
            {items.length===0? mess:liste}
            </div>
        )
    }
}
export default Todo;