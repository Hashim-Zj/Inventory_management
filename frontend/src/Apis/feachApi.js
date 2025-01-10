import commonApi from "./comonApi"

// item master api end points
export const listItems=()=>{
  return commonApi("GET","","http://127.0.0.1:8000/item_master/","")
}

export const getItem=(id)=>{
  return commonApi("GET","",`http://127.0.0.1:8000/item_master/${id}/`,"")
}

export const editItem=(id,data)=>{
  return commonApi("PUT",data,`http://127.0.0.1:8000/item_master/${id}/`,"")
}

export const addItem=(data)=>{
  return commonApi("POST",data,"http://127.0.0.1:8000/item_master/","")
}

export const deleteItem=(id)=>{
  return commonApi("DELETE","",`http://127.0.0.1:8000/item_master/${id}/`,"")
}


// stock end points
export const getAllStock=()=>{
  return commonApi("GET","","http://127.0.0.1:8000/goodsin/","")
}

export const addStock=(id,data)=>{
  return commonApi("POST",data,`http://127.0.0.1:8000/item_master/${id}/add_GoodsIn/`,"")
}

// OutList end points

export const getOutList=()=>{
  return commonApi("GET","","http://127.0.0.1:8000/goodsout/","")
}

export const addOut=(id,data)=>{
  return commonApi("POST",data,`http://127.0.0.1:8000/item_master/${id}/add_GoodsOut/`,"")
}


