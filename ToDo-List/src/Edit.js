import React from "react";

function Edit(){
    return(
        <div className="edit">
              <form>
          <input placeholder="enter a Todo" style={{
            width: 400,
            padding: 10,
            borderRadius: 20,
            border: "none",
            fontSize: 20,
          }}
          //changing the input box
            onChange={(e) => setTodo(e.target.value)}
          />

        </form>
        </div>
    )
}
 