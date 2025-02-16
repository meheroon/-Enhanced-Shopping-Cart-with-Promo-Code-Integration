const promoCodes = {
    "ostad10": 0.10, // 10% discount
    "ostad5": 0.05,  // 5% discount
  };
  
  let appliedPromoCode = null;
  
  function applyPromoCode() {
    const promoCodeInput = document.getElementById('promoCode').value;
    const subtotal = parseFloat(document.getElementById('subtotal').innerText);
  
    if (promoCodes[promoCodeInput]) {
      if (appliedPromoCode) {
        document.getElementById('promoMessage').innerText = "You have already used a promo code.";
        return;
      }
      
      const discountPercentage = promoCodes[promoCodeInput];
      const discountAmount = subtotal * discountPercentage;
      const total = subtotal - discountAmount;
  
      document.getElementById('discount').innerText = discountAmount.toFixed(2);
      document.getElementById('total').innerText = total.toFixed(2);
      document.getElementById('promoMessage').innerText = `Promo code "${promoCodeInput}" applied successfully!`;
  
      appliedPromoCode = promoCodeInput; // Mark the promo code as applied
    } else {
      document.getElementById('promoMessage').innerText = "Invalid promo code.";
    }
  }
  
  document.getElementById('applyPromoBtn').addEventListener('click', applyPromoCode);
  