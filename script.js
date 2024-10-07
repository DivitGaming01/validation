function validateform()
{
    var a=document.forms["myform"]["fname"].value;
    if (a=="")
    {
        alert("Please fill your name");
        return false;
    }
}