import React from "react";
import "../App.css"

const Blogs = () => {
    let blogit=[
        {
            id:1,
            otsikko:"Kesäpuuhat",
            tekija:"Jarkko Koskela",
            sisalto:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in eros vel eros dapibus viverra id in ex. In vestibulum finibus lacus in elementum. Sed auctor sodales sem, non placerat justo mollis nec. Praesent vitae interdum turpis. Sed faucibus ipsum et lorem varius condimentum. Nulla luctus, ante nec tincidunt lacinia, nisi massa rutrum felis, lobortis faucibus ex urna id sapien. Morbi congue ac ipsum ac ultrices. In vestibulum, orci vestibulum fermentum porta, lorem ex volutpat quam, at vulputate neque est ut diam. Suspendisse varius eleifend felis at posuere. Ut laoreet nisi sit amet efficitur volutpat. Integer ullamcorper ligula dolor, sed auctor justo semper eget. Integer nec sapien ante. Aenean sed nisi id lacus blandit facilisis sit amet ac purus. Cras tempus sollicitudin arcu, ut condimentum mi tempor tincidunt. Suspendisse lacinia magna ut vehicula laoreet. Vestibulum sed hendrerit ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam accumsan nibh sed tortor dictum aliquet. Donec bibendum velit vel felis tincidunt, in feugiat libero gravida. Proin quis justo ut nunc suscipit commodo vel at orci. Praesent nec felis quis dolor blandit accumsan in ut mauris. Phasellus fermentum, erat id blandit accumsan, sapien justo porttitor urna, sit amet dignissim risus lorem vitae nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed blandit, ex sed ultrices pulvinar, tortor velit lacinia nunc, sed laoreet sem nunc in libero. Fusce placerat nisi non ultricies scelerisque. Suspendisse at ipsum in ipsum congue maximus sed nec enim. Etiam iaculis lacus vitae odio sagittis, vitae eleifend ipsum hendrerit. Proin elementum eget ante sed euismod. Integer ultrices velit in venenatis rutrum. Praesent a sodales est. Praesent semper enim nec mauris tempus vulputate. Vestibulum sit amet tincidunt nibh. Nullam vehicula lectus vel est aliquam tempor. Donec a ligula dapibus, tincidunt nunc vitae, ultricies erat. Ut eleifend purus fermentum dignissim vulputate. Suspendisse vel lacus in elit interdum vestibulum et quis quam. Quisque sit amet ornare nulla. Praesent aliquet eu diam vel tempus."
        },
        {
            id:2,
            otsikko:"Talvipuuhat",
            tekija:"Mikko Laatikainen",
            sisalto:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in eros vel eros dapibus viverra id in ex. In vestibulum finibus lacus in elementum. Sed auctor sodales sem, non placerat justo mollis nec. Praesent vitae interdum turpis. Sed faucibus ipsum et lorem varius condimentum. Nulla luctus, ante nec tincidunt lacinia, nisi massa rutrum felis, lobortis faucibus ex urna id sapien. Morbi congue ac ipsum ac ultrices. In vestibulum, orci vestibulum fermentum porta, lorem ex volutpat quam, at vulputate neque est ut diam. Suspendisse varius eleifend felis at posuere. Ut laoreet nisi sit amet efficitur volutpat. Integer ullamcorper ligula dolor, sed auctor justo semper eget. Integer nec sapien ante. Aenean sed nisi id lacus blandit facilisis sit amet ac purus. Cras tempus sollicitudin arcu, ut condimentum mi tempor tincidunt. Suspendisse lacinia magna ut vehicula laoreet. Vestibulum sed hendrerit ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam accumsan nibh sed tortor dictum aliquet. Donec bibendum velit vel felis tincidunt, in feugiat libero gravida. Proin quis justo ut nunc suscipit commodo vel at orci. Praesent nec felis quis dolor blandit accumsan in ut mauris. Phasellus fermentum, erat id blandit accumsan, sapien justo porttitor urna, sit amet dignissim risus lorem vitae nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed blandit, ex sed ultrices pulvinar, tortor velit lacinia nunc, sed laoreet sem nunc in libero. Fusce placerat nisi non ultricies scelerisque. Suspendisse at ipsum in ipsum congue maximus sed nec enim. Etiam iaculis lacus vitae odio sagittis, vitae eleifend ipsum hendrerit. Proin elementum eget ante sed euismod. Integer ultrices velit in venenatis rutrum. Praesent a sodales est. Praesent semper enim nec mauris tempus vulputate. Vestibulum sit amet tincidunt nibh. Nullam vehicula lectus vel est aliquam tempor. Donec a ligula dapibus, tincidunt nunc vitae, ultricies erat. Ut eleifend purus fermentum dignissim vulputate. Suspendisse vel lacus in elit interdum vestibulum et quis quam. Quisque sit amet ornare nulla. Praesent aliquet eu diam vel tempus."
        }
        ]
    return (
        <div class="margintop">
                    {blogit.map((blogi) => {
                        
                        return (
                            <div key={blogi.id} class="blogi border">
                                    <h2>{blogi.otsikko} </h2>
                                    <p>{blogi.sisalto}</p>
                                    <i>-{blogi.tekija}</i>
                            </div>
                            
                        );
                        
                    })}

        </div>
    );
};

export default Blogs;
