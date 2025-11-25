import { useState } from "react"
import { toast } from "react-toastify";

const EditTodo=(props)=>{

    const [desc,setdesc]=useState(props.todo.description);

    const editDescription=async()=>{
        const body= {description: desc}
        const response= await fetch("http://localhost:5000/todos/"+props.todo.todo_id,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(body)
        })
        const res=await response.json();
        toast.success(res);
       

    }


    return(
        <>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${props.todo.todo_id}`}>
           Edit
        </button>


            <div class="modal" id={`id${props.todo.todo_id}`} onClick={()=>setdesc(props.todo.description)}>
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Edit Todo</h4>
                    <button type="button" class="close" data-dismiss="modal" onClick={()=>setdesc(props.todo.description)}>&times;</button>
                </div>


                <div class="modal-body">
                    <input type="text" className="form-control" value={desc} onChange={(e)=>{setdesc(e.target.value)}}/>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={editDescription}>Edit</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={()=>setdesc(props.todo.description)}>Close</button>
                </div>

                </div>
            </div>
            </div>
        </>
    )
}

export default EditTodo;