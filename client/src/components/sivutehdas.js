import React,{useState} from "react";
import axios from "axios";


const Sisaltosivut = () => {
    const [nimi,setNimi]=useState("");
    const [otsikko,setOtsikko]=useState("");
    const [teemakuva,setTeemakuva]=useState("");
    const [url,setUrl]=useState("");
    const [msg,setMsg]=useState("");


    const lisaa = async (e) => {
        e.preventDefault();

        if (typeof nimi === "undefined" || nimi === "") {
            setMsg("Nimi tarvitaan");
        } else if ( otsikko === "undefined" || otsikko === "") {
            setMsg("Otsikko tarvitaan");
        } else if (teemakuva === "undefined" || teemakuva === "") {
            setMsg("Teemakuva tarvitaan");
        }else if (url === "undefined" || url === "") {
            setMsg("Url tarvitaan");
        
        } else {
            try {
                const vastaus = await axios.post(
                    "http://localhost:3001/lisaaSivu",
                    {nimi,otsikko,teemakuva,url}
                );
                setMsg(vastaus.data.message);
            } catch (error) {
                console.log(error);
            }
        }
    };

    

return (
<div class="margintop">
<form class="tehdasform" onSubmit={lisaa}>
<p>{msg}</p>
    <p>Nimi <input type="text" name="nimi" onChange={(e)=>setNimi(e.target.value)}></input></p>
    <p>Otsikko <input type="text" name="otsikko" onChange={(e)=>setOtsikko(e.target.value)}></input></p>
    <p>Teemakuva <input type="file" name="teemakuva" onChange={(e)=>setTeemakuva(e.target.value)}></input></p>
    <p>Sivun URL <input type="text" name="url" onChange={(e)=>setUrl(e.target.value)}></input></p>

    <button type="submit">Luo sivu</button>
</form>


</div>
)
};

export default Sisaltosivut;
