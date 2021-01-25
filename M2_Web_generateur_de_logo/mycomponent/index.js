class MyLogo extends HTMLElement {
    html = `
    <div id="fondlogo" class="test">
    <h3 id="logo">mon logo</h3>
    </div>
    <br>
    <h1>Personnalisation du texte</h1>
    <label for="name"> Texte du logo : </label>
    <input type="texte" name="texte" id="formTexte" required
    minlength="4" maxlength="8" size="10" ></input>
    <input type="submit" id="submitTexte" value ="Submit">
    <br>
    <label>Ecartement des lettres : </label>
    <input type="range" id="spaceChar"  min="0" max="50">
    <br>
    <label>Distortion : </label>
    <input type="range" id="distortion" min="0" max="900">
    <br>
    <label for="name"> Couleur du logo : </label>
    <input type="color" id="colorSelect">


    <br>
    <label for="size">Taille de la police :</label>
    <input type="number" id="policesize" name="size">
    <br><br>
    <label for="size">Padding de la police :</label>
    <input type="number" id="padding" name="size">
    <br>
    <p>Changer la police d'écriture :</p>
    <select class id="fontForm">
    <option value="Crimson Text">Crimson Text</option>
    <option value="Hanalei Fill">Hanalei Fill</option>
    <option value="Langar">Langar</option>
    <option value="Bungee Outline" >Bungee Outline</option>
    <option value="Audiowide">Audiowide</option>
    </select>
    <br>
    <br>
    <label>Taille du contour de la police :</label>
    <input type="number" id="strokeWidth" name="size">
    <br>
    <label> Couleur du contour: </label>
    <input type="color" id="strokeColor">
    <br><br>
    <label>Ajouter une texture au texte:</label>
    <br>
    <input type="file" id="myfileText" name="img"><br><br>
    <input type="submit" id="submitImageText">
    <br>
    <br>
    <h1>Personnalisation du fond</h1>
    <label for="myfile">Select a file:</label>
    <input type="file" id="myfile" name="img"><br><br>
    <input type="submit" id="submitImage">
    <br>
    <label>Largeur du fond: </label>
    <input type="range" id="largeurfond"  min="100" max="500">
    <br>
    <label>Hauteur du fond: </label>
    <input type="range" id="hauteurfond"  min="100" max="500">
    <br>
    <label> Type de bordure </label>
    <select class id="borderForm">
    <option value="dotted">dotted</option>
    <option value="dashed">dashed</option>
    <option value="solid">solid</option>
    <option value="double" >double</option>
    <option value="groove">groove</option>
    <option value="ridge">ridge</option>
    <option value="inset">inset</option>
    <option value="outset">outset</option>
    </select>
    <br>
    <label >Taille de la bordure: </label>
    <input type="range" id="borderSize"  min="1" max="100">
    <br>
    <label for="name"> Couleur de la bordure : </label>
    <input type="color" id="borderColor">
    <br>
    <br>
    <label >Radius de la bordure: </label>
    <input type="range" id="borderRadius" min="1" max="100">
    <br>
    <br>
    <h1>Animation :</h1>
    <label> Type d'animation' </label>
    <select class id="effects">
    <option value="wobble">wobble</option>
    <option value="rubberBand">rubberBand</option>
    <option value="bounce">bounce</option>
    <option value="rotateOut" >rotateOut</option>
    </select>
    <br>
    <label >Lenteur : </label>
    <input type="range" id="vitesse"  min="1" max="10">
    <br>
    <label> Direction : </label>
    <select class id="direction">
    <option value="normal">normal</option>
    <option value="reverse">reverse</option>
    <option value="alternate">alternate</option>
    <option value="alternate-reverse" >alternate-reverse</option>
    </select>

    <label> Timing : </label>
    <select class id="Timing">
    <option value="ease">ease</option>
    <option value="ease-in">ease-in</option>
    <option value="ease-out">ease-out</option>
    <option value="ease-in-out" >ease-in-out</option>
    <option value="linear">linear</option>
    <option value="step-start">step-start</option>
    <option value="step-end" >step-end</option>
    </select>
    <label> Etat : </label>
    <select class id="state">
    <option value="running">running</option>
    <option value="paused">paused</option>
    </select>

    `;

    style=`
    #logo {
        font-size:20px;
        color:blue;
        box-shadow: none;
        letter-spacing: 0px;
        font-family : Arial;
        background : None;
        margin : auto;
        transform: skew(0rad);
    }


    .rotateOut {
        -webkit-animation-name: rotateOut;
        animation-name: rotateOut;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        animation-iteration-count: infinite;
        }
        @-webkit-keyframes rotateOut {
        0% {
        -webkit-transform-origin: center;
        transform-origin: center;
        opacity: 1;
        }
        50% {
        -webkit-transform-origin: center;
        transform-origin: center;
        -webkit-transform: rotate3d(0, 0, 1, 200deg);
        transform: rotate3d(0, 0, 1, 200deg);
        opacity: 0;
        }
        100% {
            -webkit-transform-origin: center;
            transform-origin: center;
            -webkit-transform: rotate3d(0, 0, 1, 0deg);
            transform: rotate3d(0, 0, 1, 0deg);
            opacity: 0;
            }
        }
        @keyframes rotateOut {
        0% {
        -webkit-transform-origin: center;
        transform-origin: center;
        opacity: 1;
        }
        50% {
        -webkit-transform-origin: center;
        transform-origin: center;
        -webkit-transform: rotate3d(0, 0, 1, 200deg);
        transform: rotate3d(0, 0, 1, 200deg);
        }
        100%{
            -webkit-transform-origin: center;
            transform-origin: center;
            -webkit-transform: rotate3d(0, 0, 1, 0deg);
            transform: rotate3d(0, 0, 1, 0deg);
        }
        } 
        .bounce {
            -webkit-animation-name: bounce;
            animation-name: bounce;
            -webkit-transform-origin: center bottom;
            -ms-transform-origin: center bottom;
            transform-origin: center bottom;
            -webkit-animation-duration: 1s;
            animation-duration: 1s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
            animation-iteration-count: infinite;
            }
            @-webkit-keyframes bounce {
            0%, 20%, 53%, 80%, 100% {
            -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
            transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
            -webkit-transform: translate3d(0,0,0);
            transform: translate3d(0,0,0);
            }
            40%, 43% {
            -webkit-transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
            transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
            -webkit-transform: translate3d(0, -30px, 0);
            transform: translate3d(0, -30px, 0);
            }
            70% {
            -webkit-transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
            transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
            -webkit-transform: translate3d(0, -15px, 0);
            transform: translate3d(0, -15px, 0);
            }
        }
        .rubberBand {
            -webkit-animation-name: rubberBand;
            animation-name: rubberBand;
            -webkit-animation-duration: 1s;
            animation-duration: 1s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
            animation-iteration-count: infinite;
            }
            @-webkit-keyframes rubberBand {
            0% {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
            }
            30% {
            -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
            }
            40% {
            -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
            }
            50% {
            -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
            }
            65% {
            -webkit-transform: scale3d(.95, 1.05, 1);
            transform: scale3d(.95, 1.05, 1);
            }
            75% {
            -webkit-transform: scale3d(1.05, .95, 1);
            transform: scale3d(1.05, .95, 1);
            }
            100% {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
            }
            }
            @keyframes rubberBand {
            0% {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
            }
            30% {
            -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
            }
            40% {
            -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
            }
            50% {
            -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
            }
            65% {
            -webkit-transform: scale3d(.95, 1.05, 1);
            transform: scale3d(.95, 1.05, 1);
            }
            75% {
            -webkit-transform: scale3d(1.05, .95, 1);
            transform: scale3d(1.05, .95, 1);
            }
            100% {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
            }
            } 

            .wobble {
                -webkit-animation-name: wobble;
                animation-name: wobble;
                -webkit-animation-duration: 1s;
                animation-duration: 1s;
                -webkit-animation-fill-mode: both;
                animation-fill-mode: both;
                animation-iteration-count: infinite;
                }
                @-webkit-keyframes wobble {
                0% {
                -webkit-transform: none;
                transform: none;
                }
                15% {
                -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
                transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
                }
                30% {
                -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
                transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
                }
                45% {
                -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
                transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
                }
                60% {
                -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
                transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
                }
                75% {
                -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
                transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
                }
                100% {
                -webkit-transform: none;
                transform: none;
                }
                }
                @keyframes wobble {
                0% {
                -webkit-transform: none;
                transform: none;
                }
                15% {
                -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
                transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
                }
                30% {
                -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
                transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
                }
                45% {
                -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
                transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
                }
                60% {
                -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
                transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
                }
                75% {
                -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
                transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
                }
                100% {
                -webkit-transform: none;
                transform: none;
                }
                }
    `;
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.couleur = this.getAttribute('couleur');
        this.text = this.getAttribute("text");

    }

  
    connectedCallback() {

        console.group("connectedcallback");
        this.shadowRoot.innerHTML = `<style>${this.style}</style>` + this.html;
        this.myLogo = this.shadowRoot.querySelector("#logo");
        this.mybackground = this.shadowRoot.querySelector("#fondlogo");

       
        this.myLogo.style.color = this.couleur;
        this.myLogo.textContent = this.text;


        //Changement de couleur
        this.shadowRoot.querySelector("input#colorSelect").addEventListener("input",(event) => {
            console.log(event.target.value);
            this.myLogo.style.color = event.target.value;
        })

        //Changement de texte
        this.shadowRoot.querySelector("input#submitTexte").addEventListener("click",(event) => {
            console.log(event);
                console.log(this.shadowRoot.querySelector("input#formTexte").value);
                this.myLogo.textContent = this.shadowRoot.querySelector("input#formTexte").value;
        });

        //Changement des espacement des lettres
        this.shadowRoot.querySelector("input#spaceChar").addEventListener("click",(event) => {
            console.log(event.target.value)
            this.myLogo.style.letterSpacing = event.target.value + "px";
            console.log(this.myLogo.style.letterSpacing);
        });

        // //Changement du background
         this.shadowRoot.querySelector("input#submitImage").addEventListener("click",(event) => {
            console.log(this.shadowRoot.querySelector("input#myfile").files[0]);


            let blob = this.shadowRoot.querySelector("input#myfile").files[0]; 
            let reader = new FileReader(); 
            reader.readAsDataURL(blob); 
            reader.onloadend = () => { 
                let base64String = reader.result; 
                console.log(base64String);
                //this.myLogo.style.backgroundImage = 'url(' + base64String + ')';
                this.mybackground.style.backgroundImage = 'url(' + base64String + ')';
                console.log("coucou",this.myLogo.style.background);
                }
         });


        //Changement de la largeur du fond
        this.shadowRoot.querySelector("input#largeurfond").addEventListener("click",(event) => {
            console.log(event.target.value)
            this.mybackground.style.width = event.target.value + "px";
            console.log(this.mybackground.style.width);
        });

        //Changement de la hauteur du fond
        this.shadowRoot.querySelector("input#hauteurfond").addEventListener("click",(event) => {
            console.log(event.target.value)
            this.mybackground.style.height = event.target.value + "px";
            console.log(this.mybackground.style.height);
        });


        //Changement de la distortion du texte
        this.shadowRoot.querySelector("input#distortion").addEventListener("click",(event) => {
            console.log(event.target.value)
            this.myLogo.style.transform = "skew("+ event.target.value + "rad)";
            console.log(this.myLogo.style.transform);
        });


        //Changement de la taille de la police
        this.shadowRoot.querySelector("input#policesize").addEventListener("click",(event) => {
            console.log(event.target.value)
            this.myLogo.style.fontSize = event.target.value + "px";
            console.log(this.myLogo.style.fontSize);
        });



        //Changement du padding du logo
        this.shadowRoot.querySelector("input#padding").addEventListener("click",(event) => {
            console.log(event.target.value)
            this.myLogo.style.paddingTop = event.target.value + "px";
            console.log(this.myLogo.style.paddingTop);
        });


        //Changement de la taille du contour de la police
        this.shadowRoot.querySelector("input#strokeWidth").addEventListener("click",(event) => {
            console.log(event.target.value)
            this.myLogo.style.webkitTextStrokeWidth = event.target.value + "px";
 
        });



        //Changement de la couleur du contour d ela police
        this.shadowRoot.querySelector("input#strokecolor").addEventListener("click",(event) => {
            console.log(event.target.value)
            this.myLogo.style.webkitTextStrokeColor = event.target.value ;
        });


        //Changement de police
        this.shadowRoot.querySelector("#fontForm").addEventListener("click",(event) => {
            console.log(event.target.value);
            if(event.target.value =="Crimson Text"){
                this.myLogo.style.fontFamily = "'Crimson Text', serif";
            }
            else if(event.target.value =='Hanalei Fill'){
                this.myLogo.style.fontFamily = 'Hanalei Fill', cursive;
            }else if(event.target.value =='Langar'){
                this.myLogo.style.fontFamily = 'Langar', cursive; ;
            }else if(event.target.value =='Audiowide'){
                this.myLogo.style.fontFamily = 'Audiowide', cursive;;
            }else if(event.target.value =='Bungee Outline'){
                this.myLogo.style.fontFamily = 'Bungee Outline', cursive;;
            }

        });

          //Changement de la texture
          this.shadowRoot.querySelector("input#submitImageText").addEventListener("click",(event) => {
            console.log(this.shadowRoot.querySelector("input#myfileText").files[0]);


            let blob = this.shadowRoot.querySelector("input#myfileText").files[0]; 
            let reader = new FileReader(); 
            reader.readAsDataURL(blob); 
            reader.onloadend = () => { 
                let base64String = reader.result; 
                console.log(base64String);
                this.myLogo.style.backgroundSize = 'cover';
                this.myLogo.style.backgroundImage = 'url(' + base64String + ')';
                this.myLogo.style.webkitTextFillColor = 'transparent';
                this.myLogo.style.webkitBackgroundClip = 'text';
                }
         });

        //Changement de la taille de la bordure
        this.shadowRoot.querySelector("input#borderSize").addEventListener("click",(event) => {
            console.log(event.target.value)
            this.mybackground.style.borderWidth = event.target.value + "px";
        });

        //Changement du border color
        this.shadowRoot.querySelector("input#borderColor").addEventListener("click",(event) => {
            console.log(event.target.value)
            this.mybackground.style.borderColor = event.target.value;
    
        });

        //Type de bordure
        this.shadowRoot.querySelector("#borderForm").addEventListener("click",(event) => {
            console.log(event.target.value);
                this.mybackground.style.borderStyle = event.target.value;
        });

        //Border radius
        this.shadowRoot.querySelector("#borderRadius").addEventListener("click",(event) => {
            console.log(event.target.value);
                this.mybackground.style.borderRadius = event.target.value + "px";
        });

        // ANIMATION
        this.shadowRoot.querySelector("#effects").addEventListener("click",(event) => {
            console.log(event.target.value);
            const cls = ["wobble","rubberBand","bounce","rotateOut"];
            this.myLogo.classList.remove(...cls);
            this.myLogo.classList.add(event.target.value);
        });

                // ANIMATION
                this.shadowRoot.querySelector("#vitesse").addEventListener("click",(event) => {
                    console.log(event.target.value);
                    this.myLogo.style.animationDuration = event.target.value + "s";
                });


                this.shadowRoot.querySelector("#timing").addEventListener("click",(event) => {
                    console.log(event.target.value);
                    this.myLogo.style.timingFunction = event.target.value;
                });


                this.shadowRoot.querySelector("#direction").addEventListener("click",(event) => {
                    console.log(event.target.value);
                    this.myLogo.style.animationDirection = event.target.value ;
                });



                this.shadowRoot.querySelector("#state").addEventListener("click",(event) => {
                    console.log(event.target.value);
                    this.myLogo.style.animationPlayState = event.target.value ;
                    //running
                    //paused
                });
    }
  }
  
  customElements.define("my-logo", MyLogo);
  