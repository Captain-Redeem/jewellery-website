(function () {
    "use strict";
    
    var delivery = document.getElementById('del-to');

    document.addEventListener('DOMContentLoaded', function() {
document.getElementById('cart').addEventListener('submit', estimateTotal);
    
        var btnEstimate = document.getElementById('btn-estimate');

        btnEstimate.disabled = true;
        
        delivery.addEventListener('change', function () {
            
            if (delivery.value === '') {
                btnEstimate.disabled = true;
            } else {
                btnEstimate.disabled = false;
            }

        });
    });
        
    function estimateTotal(event) {
        event.preventDefault();
        
        if (delivery.value === '') {
            alert('Please pick a delivery option');
            
            state.focus();
        }
        
        var Item01 = parseInt(document.getElementById('product01').value, 10) || 0,
            Item02 = parseInt(document.getElementById('product02').value, 10) || 0,
            Item03 = parseInt(document.getElementById('product03').value, 10) || 0,
            Item04 = parseInt(document.getElementById('product04').value, 10) || 0, 
            Item05 = parseInt(document.getElementById('product05').value, 10) || 0, 
            Item06 = parseInt(document.getElementById('product06').value, 10) || 0, 
            deliveryState = delivery.value;
        
        var totalQty =Item01 + Item02 + Item03 + Item04 + Item05 + Item06,
            deliveryCharge = 0,
            minCharge = 99.99,
            taxFactor = 1,
            estimate,
        totalItemPrice = (45 * Item01) + (115 * Item02) + (105 * Item03) + (15 * Item04) + (150 * Item05) + (110 * Item06);
        
        if (deliveryState === 'USA') {
            taxFactor = 1.075;
        }
        
        if (deliveryState === 'EU') {
            taxFactor = 1.050;
        }
        
        if (totalItemPrice < minCharge) {
            deliveryCharge = 10;
        }
        
        estimate = '£' + ((totalItemPrice * taxFactor) + deliveryCharge).toFixed(2);
        
        document.getElementById('txt-estimate').value = estimate;
        
        var results = document.getElementById('results');
        
        results.innerHTML = 'Total items ordered: ' + totalQty + '<br />';
        results.innerHTML += 'Delivery charges: £' + deliveryCharge.toFixed(2) + '<br />';
        results.innerHTML += 'Tax Paid: ' + ((taxFactor -1) * 100).toFixed(2) + '%(' + deliveryState +')';
    }
}());