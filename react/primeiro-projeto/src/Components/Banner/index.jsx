
export default function(props) {

    /* 
        o children permite que voce passe e renderize 
        conteudo 
    */



    return (
        <div className="bannerStyle">
            {props.children}
        </div>
    )
}