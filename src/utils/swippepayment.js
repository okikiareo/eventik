// src/utils/swwipePayment.js
export const initiatePayment = (email, amount, metadata = {}) => {
    try {
      // if (!window.Netpay) {
      //   console.error("Swwipe SDK not loaded. Check your script link.");
      //   return;
      // }
  
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
  


// import { toast } from "react-toastify";

// const MERCHANT_KEY = "B3Do2YrewjJbh16rqt5UgmDC"; // test public key

// const generateReference = () =>
//   "txn_" + Date.now() + "_" + Math.random().toString(36).slice(2, 11);

// export const initiatePayment = (email, amount, metadata = {}) => {
//   try {
//     if (!window.Netpay) {
//       toast.error("Payment SDK not loaded. Check index.html script.");
//       console.error("window.Netpay:", window.Netpay);
//       return;
//     }

//     // Ensure numeric
//     const parsed = Number(amount);
//     if (!Number.isFinite(parsed) || parsed <= 0) {
//       toast.error("Invalid amount. Amount must be a number greater than 0.");
//       return;
//     }

//     // SDK expects the smallest currency unit (kobo)
//     const amountKobo = Math.round(parsed * 100);

//     // Validate email (simple)
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email || !emailRegex.test(email)) {
//       toast.error("Please provide a valid email address.");
//       return;
//     }

//     const payload = {
//       amount: amountKobo,
//       reference: generateReference(),
//       email,
//       merchantKey: MERCHANT_KEY,
//       metadata,
//       currencyCode: "NGN", // optional, safe to include
//       // callback and onClose are provided below as functions
//     };

//     // Log payload so you can inspect what the SDK is sending to backend
//     console.log("Swwipe createPayment payload:", payload);

//     // createPayment may throw synchronously with validation errors from SDK/backend
//     const payment = window.Netpay.createPayment({
//       ...payload,
//       callback: function (response) {
//         console.log("Payment callback response:", response);
//         toast.success("Payment successful!");
//         // Ideally: verify the transaction on your server using response.reference
//       },
//       onClose: function () {
//         console.log("Payment modal closed by user");
//         toast.info("Payment cancelled.");
//       },
//     });

//     // open the payment modal
//     payment.open();
//     toast.info("Opening payment modal...");
//   } catch (err) {
//     // Show useful info for debugging
//     console.error("Error initializing payment:", err);

//     // SDK may throw Error whose message contains server validation lines.
//     // Show the message in a toast so you can see it quickly in the UI.
//     const message = (err && err.message) ? err.message : "Payment initialization failed.";
//     toast.error(message);

//     // Also suggest checking Network tab (explain below)
//   }
// };
