
export const initiatePayment = (email, amount, metadata = {}) => {
    try {
      // Convert to kobo
      const payment = window.Netpay.createPayment({
        amount: parseInt(amount) * 100,
        reference: generateReference(),
        email,
        merchantKey: "B3Do2YrewjJbh16rqt5UgmDC", // your test public key
        metadata,
        mode: "test",
        callback: function (response) {
          console.log("Payment successful:", response);
          alert("✅ Payment successful!");
        },
        onClose: function () {
          alert("❌ Payment cancelled by user.");
        },
      });
  
      payment.open();
    } catch (error) {
      console.error("Error initializing payment:", error);
    }
  };
  
  const generateReference = () => {
    return "txn_" + Date.now() + "_" + Math.random().toString(36).slice(2, 11);
  };
  
