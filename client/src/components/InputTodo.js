import { useState } from "react";
import { toast } from "react-toastify";

const InputTodo=()=>{


    const [desc,setDesc]=useState("");
    const onSubmitForm= async(e) =>{
        e.preventDefault();
        try {
            if(desc==="" || desc===null )
            {
                toast.error("Please fill something before adding!")
            }
            else{
                const body= {description: desc}
            //console.log(desc)
                const response=await fetch("http://localhost:5000/todos",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })
            toast.success("Task is Added!")
             setDesc("");
            console.log(response)
            }
            
        } catch (error) {
            console.log(error.message)
             toast.error("Something Went Wrong!");
        }
    }


    return(
        <>
            <h1 className="text-center mt-5">PERN Todo List:</h1>
            <form className="d-flex justify-content-center" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" value={desc} style={{ width: '200px' }} onChange={(e)=>setDesc(e.target.value)}/>
                <button className="btn btn-success">Add</button>
            </form>
        </>
    )
}

export default InputTodo;