import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";

function Sisalto () {
    const [nimi, setNimi] = useState("");
    const [url, setUrl] = useState("");
    const [otsikko, setOtsikko] = useState("");
    const [teemakuvaBin, setTeemakuvaBin] = useState("");
    
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
                setTeemakuvaBin("data:image/png;base64, "+btoa(sivu.sivun_teemakuva.data));

                // setTeemakuva(sivu.sivun_teemakuva.data);
                // console.log(sivu.sivun_teemakuva.data)
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
                <p>{teemakuvaBin}</p>
                <img src={teemakuvaBin} alt="Ei vittu toimi legit hyppään kaivoon"/>
                <img src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA
    AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO
        9TXL0Y4OHwAAAABJRU5ErkJggg==" alt="Red dot" />

            </div>
        )
    };


  
  
export default Sisalto;
