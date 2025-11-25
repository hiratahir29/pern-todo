import { useEffect, useState } from "react";
import './ListTodos.css';
import { toast } from "react-toastify";




const ListTodo=()=>{
    const [todoList,setList]=useState([]);
    
       useEffect(()=>{
        const fetchList = async () => {
             try {
            //const body= {description: desc}
            //console.log(desc)
            const response=await fetch("http://localhost:5000/todos",{
                method:"GET",
                headers:{"Content-Type":"application/json"},
                // body:JSON.stringify(body)
            })
            const res = await response.json()
            setList(res);
        } catch (error) {
            console.log(error.message)
            toast.error("Something Went Wrong!");
        }
        }

        fetchList();
    
       }, [todoList])

       const deleteTask= async(id)=>{
         try {
            const response = await fetch("http://localhost:5000/todos/"+id,{
                method:"DELETE",
                headers:{"Content-Type":"application/json"},
            })

            const res=await response.json();
            toast.success(res);
            const newList=[...todoList];
            setList(newList.filter((obj)=>obj.todo_id!==id))
            
        }catch(err){
            toast.error("Something Went Wrong!");
        }
    }
       

   return (
        <>
        <h1 className="title">PERN Todo List</h1>

        <div className="table-container">
            <table className="todo-table">
            <thead>
                <tr>
                <th>ID</th>
                <th>Description</th>
                <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {todoList.map((obj) => (
                <tr key={obj.todo_id}>
                    <td>{obj.todo_id}</td>
                    <td>{obj.description}</td>
                    <td>
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn" onClick={()=>deleteTask(obj.todo_id)}>Delete</button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </>


);

}

export default ListTodo;