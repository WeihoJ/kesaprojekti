import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";

function Sisalto () {
    const [nimi, setNimi] = useState("");
    const [url, setUrl] = useState("");
    const [otsikko, setOtsikko] = useState("");
    const [teemakuvaBin, setTeemakuvaBin] = useState("");
    const [loggedUserRole, setLoggedUserRole] = useState("");
    const [tekstit,setTekstit]=useState({});
    const [alaotsikot,setAlaotsikot]=useState({});
    const [kuvat,setKuvat]=useState({});

    const sivunUrl= useParams().url;

    //editorin muuttujat

    const [msg, setMsg] = useState("");

    axios.defaults.withCredentials = true;

    const EtsiSivu = async () => {
    useEffect(()=>{
        async function joo(){
            const sivutieto = await axios.get(
                "http://localhost:3001/sivu",{params: {
                    url:sivunUrl
                }}
            );
            const sivutiedot = await axios.get(
                "http://localhost:3001/haeKaikkiTiedot",{params: {
                    nimi,url
                }}
            );


            const sivu=await sivutieto.data[0];
            setNimi(await sivu.sivun_nimi);
            setUrl(await sivu.sivun_url);
            setOtsikko(await sivu.sivun_otsikko);
            setTeemakuvaBin("data:image/png;base64, "+btoa(await sivu.sivun_teemakuva.data));
            setTekstit(await sivutiedot.data[0]);
            setAlaotsikot(await sivutiedot.data[1]);
            setKuvat(await sivutiedot.data[2]);
                    }

                    joo();
                    
        
    },[tekstit,alaotsikot,kuvat])


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
        

        };
    const Muokkaa = async () => {
                const nimiM=document.getElementById("nimiM").innerHTML;
                const otsikkoM=document.getElementById("otsikkoM").innerHTML;
                
                
            if (typeof nimiM === "undefined" || nimiM === "") {
                setMsg("Nimi tarvitaan");
            } else if (typeof otsikkoM === "undefined" || otsikkoM === "") {
                setMsg("Otsikko tarvitaan");
            } else {
                try {
                    const vastaus = await axios.post(
                        "http://localhost:3001/muokkaa",
                        {nimiM,otsikkoM,url}
                    ).then(console.log(`Nimi: ${nimiM},\nOtsikko: ${otsikkoM},\nurl: ${url}`)
                    )
                    setMsg(vastaus.data.message);
                } catch (error) {
                    console.log(error);
                }
            }
        };
    const Lisaa = async(e)=>{
        e.preventDefault();
            let sisallot=document.getElementById("sisallot");
            kaikkiTestitiedot.map((teksti)=>{
               let osa=document.createElement("p");
               osa.innerHTML=teksti.teksti;
               osa.setAttribute("contenteditable",true);
               console.log(osa);
               sisallot.appendChild(osa) 
            })
        };

    EtsiSivu();
        
        return(
            <div class="margintop2 sisalto ml-5" id="tr">
            {loggedUserRole=="editor" ? (<div>
                <p>{msg}</p>

                <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Sivun nimi</th>
                        <th scope="col">Otsikko</th>
                        <th scope="col">URL</th>
                        <th scope="col"><button onClick={Muokkaa}>Tallenna muutokset</button></th>


                    </tr>
                </thead>
                <tbody>
                    <tr key={nimi}>
                        <th scope="row" contentEditable="true" id="nimiM" name="nimi"  suppressContentEditableWarning={true}>{nimi}</th>
                        <td scope="row" contentEditable="true" id="otsikkoM" name="otsikko" suppressContentEditableWarning={true}>{otsikko}</td>
                        <td scope="row" name="url">localhost:3000/sisalto/<b>{url}</b></td>
                    </tr>
                </tbody>
            </table>

                <img src={teemakuvaBin} alt="(teemakuva) Ei vittu toimi legit hyppään kaivoon"/>
                <div id="sisallot">
                <p>{alaotsikot[0].teksti}</p>
                </div>
                </div>
                )
                ://-----------------------------------------------------------------------------------------------------------------
                (
                <div><table class="table table-striped">
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
                        <td name="url">localhost:3000/sisalto/<b>{url}</b></td>
                    </tr>

                </tbody>
            </table>

                                    <img src={teemakuvaBin} alt="(teemakuva) Ei vittu toimi legit hyppään kaivoon"/>
                
                                    <div id="sisallot">
                <p>{JSON.stringify(alaotsikot)}</p>
                <p>{JSON.stringify(tekstit)}</p>
                <p>{JSON.stringify(kuvat)}</p>


                </div>
                    </div>)}
                <hr></hr>

                <form onSubmit={Lisaa}>
                    <input type="radio" name="teksti" value="teksti"/>
                     <label htmlFor="teksti">Teksti</label><br/>
                    <input type="radio" name="kuva" value="kuva"/>
                     <label htmlFor="kuva">Kuva</label><br/>
                    <input type="radio" name="tekstijakuva" value="kuvajateksti"/>
                     <label htmlFor="tekstijakuva">Teksti ja kuva</label><br/>
                     <button type="submit">Lisää uusi elementti</button>
                </form>  

              {/* <img src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA
    AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO
        9TXL0Y4OHwAAAABJRU5ErkJggg==" alt="Red dot" /> */}
            </div>
        )
        
    };

    

  
  
export default Sisalto;
