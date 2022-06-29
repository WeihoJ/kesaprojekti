import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";

function Sisalto () {
    const [nimi, setNimi] = useState("");
    const [url, setUrl] = useState("");
    const [otsikko, setOtsikko] = useState("");
    const [teemakuvaBin, setTeemakuvaBin] = useState("");
    const [loggedUserRole, setLoggedUserRole] = useState("");
    const sivunUrl= useParams().url;
    axios.defaults.withCredentials = true;

    const EtsiSivu = async () => {
        useEffect(() => {
            axios
                .get("http://localhost:3001/api/checklogin")
                .then((response) => {
                    // console.log(response.data.loggedIn);
                    if (response.data.loggedIn) {
                        setLoggedUserRole(response.data.userRole);
                    } else {
                        setLoggedUserRole("");
                    }
                })
                .catch((error) =>
                    console.log(
                        "Palvelin ei päällä tai ei anna vastausta api pyyntöön" +
                            error
                    )
                );
        }, []);
        
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
            <div class="margintop2 sisalto ml-5" id="tr">
            {loggedUserRole=="editor" ? (<div><table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Sivun nimi</th>
                        <th scope="col">Otsikko</th>
                        <th scope="col">URL</th>
                        <th scope="col"><button>Tallenna muutokset</button></th>

                    </tr>
                </thead>
                <tbody>
                    <tr key={nimi}>
                        <th scope="row" contentEditable="true">{nimi}</th>
                        <td contentEditable="true">{otsikko}</td>
                        <td>localhost:3000/sisalto/{url}</td>
                    </tr>
                </tbody>
            </table>

                <img src={teemakuvaBin} alt="(teemakuva) Ei vittu toimi legit hyppään kaivoon"/></div>)
                :
                (<div><table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Sivun nimi</th>
                        <th scope="col">Otsikko</th>
                        <th scope="col">URL</th>

                    </tr>
                </thead>
                <tbody>
                    <tr key={nimi}>
                        <th scope="row">{nimi}</th>
                        <td>{otsikko}</td>
                        <td>localhost:3000/sisalto/{url}</td>
                    </tr>

                </tbody>
            </table>

                <img src={teemakuvaBin} alt="(teemakuva) Ei vittu toimi legit hyppään kaivoon"/></div>)}
                {/* <img src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA
    AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO
        9TXL0Y4OHwAAAABJRU5ErkJggg==" alt="Red dot" /> */}

            </div>
        )
    };

    

  
  
export default Sisalto;
