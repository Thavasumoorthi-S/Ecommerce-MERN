import React, { useEffect } from "react"
import { FaCartPlus } from 'react-icons/fa';
import '../styles/Home.css';
import list from '../data';
import {  useMemo, useState } from "react";
import Userscontext from "../Userscontext";
import { useContext} from "react";
import { Link, useNavigate ,useLocation} from "react-router-dom";
import axios from "axios";

const Home = () => {
const location=useLocation();
const param=new URLSearchParams(location.search);
const username=param.get('username')
const useremail=param.get('mail')

  const redirectURL = `../cart?username=${username}&mail=${useremail}`;

  const navigate=useNavigate();
  const [useritem,setuseritem]=useState([])
  const [insert,setinsert]=useState([])
  const [deletes,setdeletes]=useState([])

  const {cart,setcart}=useContext(Userscontext)
    const [newdata,setnewdata]=useState([])
    const [check,setcheck]=useState(0);
  
  const [mobileshow,setmobileshow]=useState(false);
  const [laptopshow,setlaptopshow]=useState(false);
  const [desktopshow,setdesktopshow]=useState(false);
  const [ramshow,setramshow]=useState(false)
  
  const [mobiledata,setmobiledata]=useState([]);
  const [laptopdata,setlaptopdata]=useState([]);
  const [desktopdata,setdesktopdata]=useState([]);
  
  
  const [selectedOption, setSelectedOption] = useState('');
  const [selects, setselects] = useState('');
  
  
  const [brand,setbrand]=useState('');
  const [size,setsize]=useState('')
  
  
  const handleChange=(e)=>{
    setSelectedOption(e.target.value)
  }
  
  const handleChange2=(e)=>{
    setselects(e.target.value)
  }
  
  const dataitemchange=(item)=>{
       setbrand(item)
  }
  
  const datasizechange=(item)=>{
    setsize(item)
  }
  
  let cont;
  
  useMemo(()=>{
    if(mobileshow===true && ramshow===true)
    {
      if(brand!=='' && size!=='')
      {
        cont=list.filter(items=>{
          return items.size===size && items.brand===brand
        })
         setnewdata(cont)
        setcheck(1)
      }
  
      else if(brand==='')
      {
        cont=list.filter(items=>{
          return items.size===size;
        })
        setnewdata(cont)
        console.log(size)
        console.log(cont)
        setcheck(1)
      }
      else if(size==='')
      {
        cont=list.filter(items=>{
          return items.brand===brand
        })
        setnewdata(cont)
        setcheck(1)
      }
  
    }
    
    else if(laptopshow===true && ramshow===true)
    {
      if(brand!=='' && size!=='')
      {
        cont=list.filter(items=>{
          return items.size===size&& items.brand===brand
        })
        setnewdata(cont)
        setcheck(1)
      }
  
      else if(brand==='')
      {
        cont=list.filter(items=>{
          return items.size===size
        })
        setnewdata(cont)
        setcheck(1)
      }
      else if(size==='')
      {
        cont=list.filter(items=>{
          return items.brand===brand
        })
        setnewdata(cont)
        setcheck(1)
      }
    }
  
    else if(desktopshow===true && ramshow===true)
    {
      if(brand!=='' && size!=='')
      {
        cont=list.filter(items=>{
          return items.size===size && items.brand===brand;
        })
        setnewdata(cont)
        setcheck(1)
      }
  
      else if(brand==='')
      {
        cont=list.filter(items=>{
          return items.size===size
        })
        setnewdata(cont)
        setcheck(1)
      }
      else if(size==='')
      {
        cont=list.filter(items=>{
          return items.brand===brand
        })
        setnewdata(cont)
        setcheck(1)
      }
    }
  
   else if(mobileshow===true)
    {
      cont=mobiledata.filter(items=>{
        return items.brand===brand
      })
      setnewdata(cont)
      setcheck(1)
    }
  
   else if(laptopshow===true)
    {
      cont=laptopdata.filter(items=>{
        return items.brand===brand
      })
      setnewdata(cont)
      setcheck(1)
    }
  
    else if(desktopshow==true)
    {
      cont=desktopdata.filter(items=>{
        return items.brand===brand
      })
      setnewdata(cont)
      setcheck(1);
    }
  
    else if(ramshow===true)
    {
      cont=list.filter(items=>{
        return items.size===size
      })
      setnewdata(cont)
      setcheck(1);
    }
  
  },[brand,size])
  
  
  const desktopclick=()=>{
    setdesktopshow(!desktopshow);
  }
  
  const laptopclick=()=>{
    setlaptopshow(!laptopshow)
  }
  
  const mobileclick=()=>{
    setmobileshow(!mobileshow)
  }
  
  const ramclick=()=>{
    setramshow(!ramshow)
  }
  
  useMemo(()=>{
    if(laptopshow===false&&desktopshow===false &&mobileshow===false )
    {
     const items=list.filter(item=>{
        return item
      })
      setnewdata(items);
      setcheck(1)
    }
    
    else if(laptopshow===true&&desktopshow===true &&mobileshow===true)
    {
     const items=list.filter(item=>{
        return item
      })
      setnewdata(items);
      setcheck(1)
    }
    else if(mobileshow===true&&laptopshow===true)
    {
     const items=list.filter(item=>{
        return item.type==='mobile' || item.type==='laptop';
      })
      setnewdata(items);
      setcheck(1)
    }
    else if(mobileshow===true&&desktopshow===true)
    {
     const items=list.filter(item=>{
        return item.type==='mobile' ||item.type==='desktop';
      })
      setnewdata(items);
      setcheck(1)
    }
    else if(laptopshow===true&&desktopshow===true)
    {
     const items=list.filter(item=>{
        return item.type==='laptop' ||item.type==='desktop';
      })
      setnewdata(items);
      setcheck(1)
    }
   else if(mobileshow===true)
    {
     const items=list.filter(item=>{
        return item.type==='mobile';
      })
      console.log(items)
      setnewdata(items);
      setmobiledata(items)
      setcheck(1)
    }
   else if(laptopshow===true)
    {
     const items=list.filter(item=>{
        return item.type==='laptop';
      })
      console.log(items)
      setnewdata(items);
      setlaptopdata(items)
      setcheck(1)
    }
    else if(desktopshow===true)
    {
     const items=list.filter(item=>{
        return item.type==='desktop';
      })
      setnewdata(items);
      setdesktopdata(items)
      setcheck(1)
    }
    else if(ramshow===true)
    {
     const items=list.filter(item=>{
        return item;
      })
      setnewdata(items);
      setcheck(1)
    }
  
  
  },[mobileshow,laptopshow,desktopshow,ramshow])

  useMemo(()=>{
    axios.get(`http://localhost:8000/getitem?useremail=${useremail}`).then(items=>{console.log(items.data);setuseritem(items.data)}).catch(err=>{console.log(err)})

  },[insert,deletes])

 const cartitemfilter=async (item,id)=>{
  if(!(useritem.find(items=>items.id===id)))
  {
 
  await axios.post(`http://localhost:8000/setitem?useremail=${useremail}`,item).then(item=>{
      console.log(item.data)
      setinsert(item.data)
    }).catch(err=>{
      console.log(err)
  })

  }
else
{

await axios.delete(`http://localhost:8000/deleteitem?useremail=${useremail}&&it=${id}`).then(item=>{
  console.log(item.data);
  setdeletes(item.data)
}).catch(err=>{
  console.log(err)
})

}
 }


 

    return (
        <div className="home">
            <div className="header">
            
            <div className="headers">
           <h3 className="header1"><Link  style={{textDecoration:"none",color:"white",backgroundColor:"black",border:"1px solid white",borderRadius:'5px',padding:'3px'}} to="../login">LOGOUT</Link></h3>
           <h1 className="header2" style={{color:'white'}}>E-MART ONLINE SHOPPING</h1>
           <h1 className="header3"><Link to={redirectURL} style={{textDecoration:"none"}}><FaCartPlus/><span>{useritem.length}</span></Link></h1>
           </div>

            </div>
            <div className="section">
            <div className="filter">
         <div  className="filters">
          <h2 style={{backgroundColor:"blue",color:"white",textAlign:'center'}}>WELCOME {username.toUpperCase()},</h2>
         <div className='outerbrand'><input  onChange={mobileclick}  type="checkbox"/><span>MOBILE BRAND</span></div>
       {
         mobileshow?(
        <div className="inner-cont">
      <div className="innerbrand"><input  type="radio" value="option1" onChange={handleChange} onClick={()=>dataitemchange('Vivo')} checked={selectedOption === 'option1'}  /><label>VIVO</label></div>
      <div className="innerbrand"> <input type="radio" value="option2" onChange={handleChange} onClick={()=>dataitemchange('Oppo')} checked={selectedOption === 'option2'}/><label>OPPO</label>  </div>
      <div className="innerbrand"> <input  type="radio" value="option3" onChange={handleChange} onClick={()=>dataitemchange('Redmi')} checked={selectedOption === 'option3'} /><label>REDMI</label></div>
      <div className="innerbrand">
       <input  type="radio" value="option4" onChange={handleChange} onClick={()=>dataitemchange('Realme')} checked={selectedOption === 'option4'}  /><label>REALME</label>
       </div>
       <div className="innerbrand">
       <input type="radio" value="option5" onChange={handleChange} onClick={()=>dataitemchange('Oneplus')} checked={selectedOption === 'option5'}  /><label>ONEPLUS</label>
       </div> 
       <div className="innerbrand">
       <input type="radio" value="option6" onChange={handleChange} onClick={()=>dataitemchange('Samsung')} checked={selectedOption === 'option6'}/><label>SAMSUNG</label>
      </div>
       </div>
         ):
         (null)
       }
      <div className='outerbrand'><input onChange={laptopclick}   type='checkbox'/><span>LAPTOP BRAND</span></div>
      {
        laptopshow?

        (
          <div className="inner-cont">
       <div className="innerbrand"><input type="radio" value="option7" onChange={handleChange}  onClick={()=>dataitemchange('Lenovo')} checked={selectedOption === 'option7'} /><label>LENOVO</label></div>
       <div className="innerbrand"><input type="radio" value="option8" onChange={handleChange} onClick={()=>dataitemchange('Hp')} checked={selectedOption === 'option8'}/><label>HP</label></div>
       <div className="innerbrand"><input type="radio" value="option9" onChange={handleChange} onClick={()=>dataitemchange('Dell')} checked={selectedOption === 'option9'} /><label>DELL</label></div>
       <div className="innerbrand"><input type="radio" value="option10" onChange={handleChange} onClick={()=>dataitemchange('Acer')} checked={selectedOption === 'option10'} /><label>ACER</label></div>


          </div>



        ):
        (null)
      }

      
       <div  className='outerbrand' >  <input type='checkbox' onChange={desktopclick}/><span>DESKTOP BRAND</span></div>

       {

        desktopshow?
        (
          <div className="inner-cont">
       <div className="innerbrand"><input type="radio" value="option11" onChange={handleChange}  checked={selectedOption === 'option11'}onClick={()=>dataitemchange('lenovo')}   /><label>LENOVO</label></div>
       <div className="innerbrand"><input  type="radio" value="option12" onChange={handleChange} checked={selectedOption === 'option12'}onClick={()=>dataitemchange('hp')}  /><label>HP</label></div>
       <div className="innerbrand"><input  type="radio" value="option13" onChange={handleChange} checked={selectedOption === 'option13'} onClick={()=>dataitemchange('dell')} /><label>DELL</label></div>
       <div className="innerbrand"><input  type="radio" value="option14" onChange={handleChange} checked={selectedOption === 'option14'}onClick={()=>dataitemchange('acer')}  /><label>ACER</label></div>
       <div className="innerbrand"><input  type="radio" value="option15" onChange={handleChange}  checked={selectedOption === 'option15'}onClick={()=>dataitemchange('asus')} /><label>ASUS</label></div>
       </div>


        ):
        (null
        )

       }
      

      <div className="outerbrand"><input onChange={ramclick}   type="checkbox"/><span>RAM</span></div>
       {
         ramshow?(

          <div className="inner-cont">
       <div className="innerbrand"> <input  type="radio" value="option1"onChange={handleChange2} checked={selects=== 'option1'} onClick={()=>datasizechange('4GB')}   /><label>4GB</label></div>
      <div className="innerbrand"> <input type="radio" value="option2" onChange={handleChange2}  checked={selects === 'option2'}onClick={()=>datasizechange('8GB')}  /><label>8GB</label></div>
       <div className="innerbrand"><input  type="radio" value="option3"onChange={handleChange2} checked={selects=== 'option3'} onClick={()=>datasizechange('12GB')}  /><label>12GB</label></div>
       <div className="innerbrand"><input  type="radio" value="option4" onChange={handleChange2}  checked={selects=== 'option4'}onClick={()=>datasizechange('16GB')}  /><label>16GB</label></div>
        </div>

         ):
         (
          null
         )

       }
     </div>
     </div>
            <div className="filterdata">
        <div className="imageitem">
          {
            check===0?(list.map(item=>{
                return(
                    <div className="item" key={item.id}>
                        <img  src={item.img} alt="image" style={{width:'100%',height:'50%'}}/>
                        <div className="brand">BRAND:{item.brand.toUpperCase()}</div>
                        <div className="ram">RAM:{item.size}</div>
                        <div className="price">PRICE:{item.price}</div>
                        <div className="button"><button onClick={()=>cartitemfilter(item,item.id)}>{!(useritem.find((items) => items.id ===item.id))?"ADD TO CART":"REMOVE FROM CART"}</button></div>
                    </div>
                )
            })):(
                newdata.map(item=>{
                    return( 
                        <div className="item" key={item.id}>
                            <img  src={item.img} alt="image" style={{width:'100%',height:'50%',backgroundColor:"white"}}/>
                            <div className="brand">BRAND:{item.brand.toUpperCase()}</div>
                            <div className="ram">RAM:{item.size}</div>
                            <div className="price">PRICE:{item.price}</div>
                            <div className="button"><button onClick={()=>cartitemfilter(item,item.id)}>{!(useritem.find((items) => items.id ===item.id))?"ADD TO CART":"REMOVE FROM CART"}</button></div>
                        </div>

            )}))}
          </div>

            </div>
            </div>
          
            <div className="footer">
            <div className="footeritem">
            <h3 className="copyright"><small>&copy; Copyright 2023, E-MART ONLINE SHOPPING.  All Rights Reserved. </small> Contact to:  <a className="contact" href="mailto:thavasumoorthi@gmail.com">thavasumoorthi@gmail.com</a></h3>

            </div>
            </div>
        </div>
    )
}

export default Home
