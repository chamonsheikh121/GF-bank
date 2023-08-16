document.getElementById('btn-deposit').addEventListener('click', function(){
    const inputElement = document.getElementById('input-deposit');
    const beforeInput = inputElement.value;
    const afterInput = parseFloat(beforeInput);
    if(isNaN(afterInput)){
        alert('please input deposit amount');
        inputElement.value = '';
        return;
    }
    
    
    const depositTotalElement = document.getElementById('current-deposit');
    const beforeDepositTotal = depositTotalElement.innerText;
    const afterDepositTotal = parseFloat(beforeDepositTotal);
    const currentDeposit = afterInput + afterDepositTotal;
    depositTotalElement.innerText = currentDeposit;


    const balanceTotal = document.getElementById('balance-total')
    const beforeBalanceTotal = balanceTotal.innerText;
    const afterBalanceTotal = parseFloat(beforeBalanceTotal);
    balanceTotal.innerText = afterInput + afterBalanceTotal;

    


    inputElement.value = '';

    

    
    
})