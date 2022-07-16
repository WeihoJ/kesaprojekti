import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Buffer } from 'buffer';
window.Buffer = Buffer;

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
        document.addEventListener("DOMContentLoaded",()=>{
            document.getElementById("alaotsikkonappi").addEventListener("click",Lisaa("alaotsikko"));
            document.getElementById("tekstinappi").addEventListener("click",Lisaa("teksti"));
            document.getElementById("kuvanappi").addEventListener("click",Lisaa("kuva"));
        })


    const Lisaa = async(mitaLisataan)=>{
        if(mitaLisataan=="alaotsikko"){
            let lisattava=document.getElementById("alaotsikko").value;
            if(lisattava!=""&&lisattava!=null){
                await axios.post(
                    "http://localhost:3001/lisaaContenttia",{params:
                    {lisattava,mitaLisataan,nimi}})

            }
        }
        else if(mitaLisataan=="teksti"){
            let lisattava=document.getElementById("teksti").value;
            if(lisattava!=""&&lisattava!=null){
                await axios.post(
                    "http://localhost:3001/lisaaContenttia",{params:{
                        lisattava,mitaLisataan,nimi
                    }})

            }
        }
        else if(mitaLisataan=="kuva"){
            let lisattavaElmnt=document.getElementById("kuva");

            if(lisattavaElmnt!=""&&lisattavaElmnt!=null){
                let kuva=document.getElementById("image");
                const lisattava=lisattavaElmnt.files[0];
                if(lisattava!=undefined){                    
                    const getBase64 =(tdst)=> {
                        return new Promise((resolve, reject) => {
                          const lukija = new FileReader();
                          lukija.readAsDataURL(tdst);
                          lukija.onload = () => resolve(lukija.result);
                          lukija.onerror = error => reject(error);
                        });
                    
                    }
                      let base64Kuva= await getBase64(lisattava);
                    kuva.setAttribute("src", base64Kuva);


                    await axios.post(
                        "http://localhost:3001/lisaaContenttia", {
                            base64Kuva,mitaLisataan,nimi
                        }
                        
                        
                        )
                }
            }
        }
        

        }
        

        
        

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

                <img src={`data:image/jpeg;base64,/9j/${btoa(teemakuvaBin)}`} alt={`(teemakuva) ei toimi legit hyppään kaivoon\n data:image/jpeg;base64,/9j/${btoa(teemakuvaBin)}`}/>
                {Object.keys(alaotsikot).map(key=><p>{alaotsikot[key].sivun_alaotsikko}</p>)}
                {Object.keys(tekstit).map(key=><p>{tekstit[key].sivun_teksti}</p>)}

                    <br/>
                    <div id="lisaysParent" style={{backgroundColor:"darkkhaki"}}>
                    <label style={{margin:10}}>Alaotsikko</label><input type="text" id="alaotsikko"/><button onClick={()=>Lisaa("alaotsikko")}>Lisää</button><br/>
                    <label style={{margin:10}}>Teksti</label><input type="text" id="teksti"/><button onClick={()=>Lisaa("teksti")}>Lisää</button><br/>
                    <label style={{margin:10}}>Kuva</label><input type="file" accept='image/png, image/jpg, image/jpeg' id="kuva"/><button style={{margin:-25}} onClick={()=>Lisaa("kuva")}>Lisää</button><br/>
                    <img id='image' class="previewImg"/>
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

                
                                    <div id="sisallot">
                <img src={`data:image/jpeg;base64,/9j/${btoa(teemakuvaBin)}`} alt={`(teemakuva) ei toimi legit hyppään kaivoon\n data:image/jpeg;base64,/9j/${btoa(teemakuvaBin)}`}/>
                {Object.keys(alaotsikot).map(key=><p>{alaotsikot[key].sivun_alaotsikko}</p>)}
                {Object.keys(tekstit).map(key=><p>{tekstit[key].sivun_teksti}</p>)}
                {/* {console.log(kuvat[0]?.sivun_kuva.data.toString().replaceAll(',', ''))} */}

                </div>
                    </div>)}
                <hr></hr>
            </div>
        )
        
    };

    

  
  
export default Sisalto;
