import dangerouslySetInnerHTML from "react";
import seamlessMetal from '../img/metal-seamless.jpg';

const BlogPost = ({otsikko, paivaus, kirjoitus, kuva, youtube}) =>{

    return(
        <div className=" p-3">
            <div className=" p-5 " style={{backgroundImage: `url(${seamlessMetal})` }}>
                <div>
                    <h1>{otsikko}</h1>
                </div>

                <div>
                    <p className=" text-2xl">{paivaus}</p>
                </div>

                {youtube.length > 0 &&
                    <div className="flex justify-center p-1">
                        <iframe width="852" height="480"
                            src={youtube}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                }

                {kuva.length > 0 &&
                    <div  className="flex justify-center p-2">
                        <img src={require('../img/' + kuva)}/>
                    </div>
                }
                
                <div dangerouslySetInnerHTML={{__html: kirjoitus}} className=" text-lg" />
            </div>
        </div>
    );
}

export default BlogPost;

/*

JSON blog post template, lisää aina alkuun ennen aikaisempaa { muttä [ jälkeen

{
    "otsikko" : "",
    "paivaus" : "",
    "youtube" : "",
    "kuva" : "",
    "kirjoitus" : ""
},

*/