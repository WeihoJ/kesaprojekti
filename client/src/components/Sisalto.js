import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";

function Sisalto () {
    const [nimi, setNimi] = useState("");
    const [url, setUrl] = useState("");
    const [otsikko, setOtsikko] = useState("");
    const [teemakuva, setTeemakuva] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
    
    const sivunUrl= useParams().url;
    axios.defaults.withCredentials = true;

    const EtsiSivu = async () => {
        
            try {
                const sivu = await axios.get(
                    "http://localhost:3001/sivu",[sivunUrl]
                );
                // setNimi(sivu.sivun_nimi);
                // setUrl(sivu.sivun_url);
                // setOtsikko(sivu.sivun_otsikko);
                // setTeemakuva(sivu.teemakuva);
                console.log(sivu);



            } catch (error) {
                console.log(error);
            }
        }
        
        EtsiSivu();

        return(
            <div class="margintop">

            </div>
        )
    };


  
  
export default Sisalto;
