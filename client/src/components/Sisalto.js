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
                const sivutieto = await axios.get(
                    "http://localhost:3001/sivu",{params: {
                        url:sivunUrl
                    }}
                );
                const sivu=sivutieto.data[0];

                setNimi(sivu.sivun_nimi);
                setUrl(sivu.sivun_url);
                setOtsikko(sivu.sivun_otsikko);
                setTeemakuva(sivu.teemakuva);
//tähän sitten kaikkea kivaa jippikajei


            } catch (error) {
                console.log(error);
            }
        }
        
        EtsiSivu();

        return(
            <div class="margintop ml-5">
                <p>{nimi}</p>
                <p>{otsikko}</p>

            </div>
        )
    };


  
  
export default Sisalto;
