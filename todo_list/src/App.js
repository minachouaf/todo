import React,{Component} from 'react'
import Todo from './components/todoitems/Todo'
import Add from './components/Additems/Add'
import './App.css'
class App extends Component
{
    state={
        items:[
        {id:1,name:"mina",age:17},
        {id:2,name:"KHADIJA",age:19},
        {id:3,name:"safae",age:13},
        ]
    }
    deletehandle=(id)=>
    {



let liste3=this.state.items.filter(item=>{
    return item.id!==id
})
this.setState({
    items:liste3
})


// let listez=this.state.items;

// let j=listez.findIndex(ele=>ele.id===id)
// listez.splice(j,1);

// this.setState({
//     items:listez
// })



// let liste=[];
// for (let i=0;i<this.state.items.length;i++)
// {
// if(this.state.items[i].id!==id)
// {
//     liste.push(this.state.items[i]);
// }

// }
// this.setState({
//     items:liste
// })




    }

    handladd=(elementt)=>
{
   let liste=this.state.items;
   elementt.id=Math.random;
   liste.push(elementt);
    this.setState({
        items:liste
    })
}
    render(){
        return(
            <div className='app container'>
                <h1 className='text-center'>todo list</h1>
                <Todo items={this.state.items} deletee={this.deletehandle}/>
                <Add ajouter={this.handladd}/>
            </div>
        )
    }
}
export default App;