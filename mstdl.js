function buildLink(strFormID){
    var myForm = document.getElementById(strFormID);

    
    var linkLabel = document.getElementById('chatLinkLabel').value;
    var linkIcon = document.getElementById('chatTeamsIcon').value;

    var addrs = document.getElementById('chatAddresses').value;
    var addr = addrs.replace("\n", ',');

    var subject = document.getElementById('chatSubject').value;
    var message = document.getElementById('chatMessage').value;
    
    var myLink = "https://teams.microsoft.com/l/chat/0/0?";
    myLink += "users=" + addr;
    
    if( subject != "" ){
        myLink += "&topicName=" + subject;
    }

    if( message != "" ){
        myLink += "&message=" + message;
    }

    var finalLink = encodeURI(myLink);
    document.getElementById("generatedLink").value = finalLink;
    document.getElementById("generatedLinkHelp").innerHTML = "Use this URL to build your link!";


}