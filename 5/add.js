function umnoz(){
    let stoim = document.getElementById("stoim").value;
    let colvo = document.getElementById("colvo").value;
    let rezult = document.getElementById("rezult");

    if(stoim ==="" || colvo ==="")
        rezult.innerHTML = "�� �� ����� ��������� ��� ��������� ������"
    else if(stoim != parseInt(stoim) || colvo != parseInt(colvo) || parseInt(colvo)<0 || parseInt(stoim)<0)
        rezult.innerHTML = "���� �� ����� �������� ������������ ������� ��� ������ ��� ������������ �������";
    else
        rezult.innerHTML = "���������: " + parseInt(colvo)*parseInt(stoim); 
}

window.addEventListener("DOMContentLoaded", function() {
    let buttom = document.getElementById("but");
    buttom.addEventListener("click", umnoz);
});