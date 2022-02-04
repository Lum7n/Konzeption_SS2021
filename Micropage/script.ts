namespace Tag_der_Medien {

    window.addEventListener("load", handleLoad);

    let ideaButton: HTMLButtonElement;
    let conceptButton: HTMLButtonElement;
    let prototypButton: HTMLButtonElement;

    function handleLoad(): void {
    
        console.log("script");
        backgroundSize();

        ideaButton = <HTMLButtonElement>document.getElementById("ideaButton");
        ideaButton.addEventListener("click", handleIdea);

        conceptButton = <HTMLButtonElement>document.getElementById("conceptButton");
        conceptButton.addEventListener("click", handleConcept);

        prototypButton = <HTMLButtonElement>document.getElementById("prototypButton");
        prototypButton.addEventListener("click", handlePrototyp);
    }

    function backgroundSize(): void {

        let mainContent: HTMLElement = <HTMLElement>document.querySelector(".main");
        let heightContent: number = mainContent.offsetHeight;

        heightContent = heightContent + 150;
        console.log(heightContent);

        let css: string = ".block_1:after{ height: " + heightContent + "px }";
        console.log(css);

        let style: HTMLStyleElement = <HTMLStyleElement>document.createElement("style");

        style.appendChild(document.createTextNode(css));

        document.getElementsByTagName("head")[0].appendChild(style);
    }

    function handleIdea(): void {
        console.log("Idee");

        let ideaDiv: HTMLDivElement = <HTMLDivElement>document.querySelector(".idea");
        ideaDiv.style.display = "block";

        let conceptDiv: HTMLDivElement = <HTMLDivElement>document.querySelector(".concept");
        conceptDiv.style.display = "none";

        let prototypDiv: HTMLDivElement = <HTMLDivElement>document.querySelector(".prototyp");
        prototypDiv.style.display = "none";
    }

    function handleConcept(): void {
        console.log("Konzeption");

        let ideaDiv: HTMLDivElement = <HTMLDivElement>document.querySelector(".idea");
        ideaDiv.style.display = "none";

        let conceptDiv: HTMLDivElement = <HTMLDivElement>document.querySelector(".concept");
        conceptDiv.style.display = "block";

        let prototypDiv: HTMLDivElement = <HTMLDivElement>document.querySelector(".prototyp");
        prototypDiv.style.display = "none";
    }

    function handlePrototyp(): void {
        console.log("Prototyp");

        let ideaDiv: HTMLDivElement = <HTMLDivElement>document.querySelector(".idea");
        ideaDiv.style.display = "none";

        let conceptDiv: HTMLDivElement = <HTMLDivElement>document.querySelector(".concept");
        conceptDiv.style.display = "none";

        let prototypDiv: HTMLDivElement = <HTMLDivElement>document.querySelector(".prototyp");
        prototypDiv.style.display = "block";
    }
}