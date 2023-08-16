document.getElementById('btn-withdraw').addEventListener('click', function(){
    const inputWithdrawElement = document.getElementById('input-withdraw')
    const beforeWithdraw = inputWithdrawElement.value;
    const afterWithdraw = parseFloat(beforeWithdraw);
    if(isNaN(afterWithdraw)){
        alert('please input amount');
        inputWithdrawElement.value = '';
        return;
    }

    

    const currentWithdrawElement = document.getElementById('current-withdraw');
    const beforeCurrentWithdraw = currentWithdrawElement.innerText;
    


    const balanceElement = document.getElementById('balance-total');
    const beforeBalance = balanceElement.innerText;
    const afterBalance = parseFloat(beforeBalance);

    

    if(afterWithdraw > afterBalance){
        alert('girl friend er bank a ato tk nei mama');
        inputWithdrawElement.value = '';
        return;
    }


    const afterCurrentWithdraw = parseFloat(beforeCurrentWithdraw);
    currentWithdrawElement.innerText = afterWithdraw + afterCurrentWithdraw

    balanceElement.innerText = afterBalance - afterWithdraw;

    inputWithdrawElement.value = '';



    



    













})