function val()
{
    let u=document.reg.email.value;
    if(u==="")
    {
    alert("enter email ");
    return false;
    }

    let pasw=document.reg.pass.value;
     alert(typeof pasw);
    // let passTest=pasw.match()
    if(pasw==="" || pasw==null)
    {
        alert("enter password");
        return false;
    }
    else{
        if(pasw.length>=12 && pasw.includes())
        {
            
        }
    }
}
